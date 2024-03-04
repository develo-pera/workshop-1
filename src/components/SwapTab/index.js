import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SwapForm from "@/components/SwapForm";

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

export default SwapTab;