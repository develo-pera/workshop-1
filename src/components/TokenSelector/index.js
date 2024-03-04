import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

export default TokenSelector;