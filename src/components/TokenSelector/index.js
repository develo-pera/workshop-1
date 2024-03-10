import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DAI_TOKEN_DATA, USDC_TOKEN_DATA } from "@/lib/constants";

const TokenSelector = ({options, selectedToken, setSelectedToken}) => {


  return (
    <Select value={selectedToken} onValueChange={setSelectedToken}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select token" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={options.dai}>
          <div className="flex gap-[7px] items-center">
            <img className="w-5" src="/eth-logo.svg" alt="DAI logo" />
            {options.dai.name}
          </div>
        </SelectItem>
        <SelectItem value={options.usdc}>
          <div className="flex gap-[7px] items-center">
            <img className="w-5" src="/usdc-logo.svg" alt="USDC logo" />
            {options.usdc.name}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default TokenSelector;