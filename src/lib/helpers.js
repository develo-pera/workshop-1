import { keccak256 } from "@ethersproject/solidity";

export function reduceString (string, limitBefore, limitAfter) {
  return `${string.substring(0, limitBefore)}...${string.substring(string.length - limitAfter)}`
}

function removeLeadingZeros(hexString) {
  // Remove the "0x" prefix if present
  if (hexString.startsWith("0x")) {
    hexString = hexString.slice(2);
  }

  // Remove all leading "0" digits
  while (hexString.startsWith("0")) {
    hexString = hexString.slice(1);
  }

  return "0x" + hexString;
}

export const calculateWrappedTokenId = (address, id) => {
  return removeLeadingZeros(keccak256(["address", "uint256"], [address, id]));
}