import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TokenSelector from "@/components/TokenSelector";

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