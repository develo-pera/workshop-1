export function reduceString (string, limitBefore, limitAfter) {
  return `${string.substring(0, limitBefore)}...${string.substring(string.length - limitAfter)}`
}