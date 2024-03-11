import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import SwapTab from "@/components/SwapTab";
import LendTab from "@/components/LendTab";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { calculateWrappedTokenId, reduceString } from "@/lib/helpers";
import { Contract } from "ethers";
import { DAI_TOKEN_DATA, ELEVEN_BYTES_OF_ZERO, OCEAN_V3_ADDRESS, USDC_TOKEN_DATA } from "@/lib/constants";
import { OceanABI } from "@/lib/OceanABI";
import { useEthersSigner } from "@/lib/useEthersSigner";
import { arbitrumSepolia } from "viem/chains";
import { useEthersProvider } from "@/lib/useEthersProvider";
import { hexConcat } from "@ethersproject/bytes";
import { LiquidityPoolABI } from "@/lib/LiquidityPoolABI";

export default function Home() {
  const { connect, connectors } = useConnect();
  const { address: walletAddress, isConnected } = useAccount();
  const signer = useEthersSigner({chainId: arbitrumSepolia.id});
  const provider = useEthersProvider({chainId: arbitrumSepolia.id})
  // const provider = useProvider();

  // TODO: this is were important part starts
  const DAI_USDC_POOL_ADDRESS = "0xEaE5B59499a461887fBf2BF47887e4e4cB91D703";
  const DAI_OCEAN_ID = calculateWrappedTokenId(DAI_TOKEN_DATA.address, 0);
  const USDC_OCEAN_ID = calculateWrappedTokenId(USDC_TOKEN_DATA.address, 0);

  const packInteractionTypeAndAddress = (
      interaction,
      address
  ) => {
      return hexConcat([interaction, ELEVEN_BYTES_OF_ZERO, address]);
  }

  const interaction = {
    interactionTypeAndAddress: packInteractionTypeAndAddress("0x06", DAI_USDC_POOL_ADDRESS),
    inputToken: DAI_OCEAN_ID,
    outputToken: USDC_OCEAN_ID,
    specifiedAmount: 10,
    metadata: "0x0000000000000000000000000000000000000000000000000000000000000000"
  }

  // TODO: I'm was trying to call do interaction unsuccessfully. I thought it may be because I haven't called
  //  wrap interaction first, so I created new testMe function trying to call computeInputAmount directly on LiquidityPool proxy
  const testMeOld = async () => {
    const newsigner = await signer;
    console.log("newsigner", newsigner)

    const ocean = new Contract(OCEAN_V3_ADDRESS, OceanABI, newsigner || provider);

    // TODO: estimate gas reverts too
    // const gasEstimate = await ocean.doInteraction.estimateGas(interaction, {value: 0})
    // console.log(gasEstimate);
    const result = await ocean.connect(newsigner).doInteraction(interaction);
    const result2 = await ocean.connect(newsigner).owner();
    console.log(result);
    console.log(result2);
  }

  const testMe = async () => {
    const newsigner = await signer;

    const lp = new Contract(DAI_USDC_POOL_ADDRESS, LiquidityPoolABI, newsigner || provider)
    const result2 = await lp.connect(newsigner).computeOutputAmount(DAI_OCEAN_ID, USDC_OCEAN_ID, 10, "0xE0fF737685fdE7Fd0933Fc280D53978b3d0700D5", "0x0000000000000000000000000000000000000000000000000000000000000000");
    console.log(result2);
  }

  return (
    <main>
      <Head>
        <title>Shell Integrateooor</title>
      </Head>
      <div className="max-w-2xl mx-auto py-10 flex items-center justify-between">
        <p className="font-bold text-2xl text-gray-600">Shell Integrateooor</p>
        {
          walletAddress ?
            <p>{reduceString(walletAddress, 6, 4)}</p> :
            <Button onClick={() => connect({ connector: injected() })}>Connect</Button>
        }
      </div>
      <Button className="mx-auto block mb-10" onClick={testMe}>Test me button</Button>
      <div className="max-w-2xl mx-auto">
        <Tabs defaultValue="swap">
          <div className="flex justify-center">
            <TabsList >
              <TabsTrigger value="swap">Swap</TabsTrigger>
              <TabsTrigger value="lend">Lend</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="swap">
            <SwapTab />
          </TabsContent>
          <TabsContent value="lend">
            <LendTab />
          </TabsContent>
        </Tabs>
      </div>

    </main>
  );
}
