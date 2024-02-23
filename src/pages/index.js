import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Head from "next/head";

const TokenSelector = () => {
  const options = {
    eth: "ETH",
    usdc: "USDC",
  }

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select token" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={options.eth}>
          <div className="flex gap-[7px] items-center">
            <img className="w-5" src="/eth-logo.svg" alt="ETH logo" />
            {options.eth}
          </div>
        </SelectItem>
        <SelectItem value={options.usdc}>
          <div className="flex gap-[7px] items-center">
            <img className="w-5" src="/usdc-logo.svg" alt="USDC logo" />
            {options.usdc}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

const SwapForm = () => (
  <div className="mt-5">
    <Label htmlFor="youPay">You pay</Label>
    <div className="flex items-center gap-[20px] mb-5">
      <Input id="youPay" placeholder="0" />
      <TokenSelector />
    </div>
    <Label htmlFor="youReceive">You receive</Label>
    <div className="flex items-center gap-[20px]">
      <Input id="youReceive" placeholder="0" />
      <TokenSelector />
    </div>
    <Button size="lg" className="w-full mt-5">Swap</Button>
  </div>
);

const LendForm = () => (
  <div className="mt-5">
    <Label htmlFor="amount">Amount to supply</Label>
    <div className="flex items-center gap-[20px] mb-5">
      <Input id="amount" placeholder="0" />
      <TokenSelector />
    </div>
    <Button size="lg" className="w-full mt-5">Lend</Button>
  </div>
);

const SwapTab = () => (
  <Card className="mt-10">
    <CardHeader>
      <CardTitle>Choose which protocol you want to use to swap tokens</CardTitle>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="uniswap">
        <TabsList >
          <TabsTrigger className="flex gap-[7px] items-center" value="uniswap">
            <img className="w-5" src="/uniswap-uni-logo.png" alt="Uniswap logo" />
            Uniswap
          </TabsTrigger>
          <TabsTrigger className="flex gap-[7px] items-center" value="curve">
            <img className="w-5" src="/curve-logo.png" alt="Curve logo" />
            Curve
          </TabsTrigger>
          <TabsTrigger className="flex gap-[7px] items-center" value="balancer">
            <img className="w-5" src="/balancer-logo.png" alt="Balancer logo" />
            Balancer
          </TabsTrigger>
        </TabsList>
        <TabsContent value="uniswap">
          <SwapForm />
        </TabsContent>
        <TabsContent value="curve">
          <SwapForm />
        </TabsContent>
        <TabsContent value="balancer">
          <SwapForm />
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
);

const LendTab = () => (
  <Card className="mt-10">
    <CardHeader>
      <CardTitle>Lend your assets on Aave</CardTitle>
    </CardHeader>
    <CardContent>
      <LendForm />
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <main>
      <Head>
        <title>Shell Integrateooor</title>
      </Head>
      <p className="font-bold text-2xl text-center py-10 text-gray-600">Shell Integrateooor</p>
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
