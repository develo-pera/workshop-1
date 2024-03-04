import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TokenSelector from "@/components/TokenSelector";

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

export default SwapForm;