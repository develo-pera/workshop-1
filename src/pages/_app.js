import "@/styles/globals.css";
import { createConfig, http, WagmiProvider } from "wagmi";
import { arbitrumSepolia } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const wagmiConfig = createConfig({
    chains: [arbitrumSepolia],
    transports: {
      [arbitrumSepolia.id]: http(),
    },
  });

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
