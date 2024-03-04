import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import SwapTab from "@/components/SwapTab";
import LendTab from "@/components/LendTab";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { reduceString } from "@/lib/helpers";

export default function Home() {
  const { connect, connectors } = useConnect();
  const { address: walletAddress, isConnected } = useAccount();

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
