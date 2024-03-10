import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TokenSelector from "@/components/TokenSelector";
import { DAI_TOKEN_DATA, USDC_TOKEN_DATA } from "@/lib/constants";

const SwapForm = () => {
  const [selectedToken, setSelectedToken] = useState(DAI_TOKEN_DATA);

  const tokenOptions = {
    dai: DAI_TOKEN_DATA,
    usdc: USDC_TOKEN_DATA,
  };

  return (
    <div className="mt-5">
      <Label htmlFor="youPay">You pay</Label>
      <div className="flex items-center gap-[20px] mb-5">
        <Input id="youPay" placeholder="0" />
        <TokenSelector
          options={tokenOptions}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
        />
      </div>
      <Label htmlFor="youReceive">You receive</Label>
      <div className="flex items-center gap-[10px] mt-1">
        <p>{0}</p>
        <p>{ selectedToken.name === tokenOptions.dai.name ? tokenOptions.usdc.name : tokenOptions.dai.name }</p>
      </div>
      <Button size="lg" className="w-full mt-5">Swap</Button>
    </div>
  );
}

export default SwapForm;