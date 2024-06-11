import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "../themes/lightTheme";
import { trpc } from "../src/utils/trpcNext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  // @TODO add top level error boundary wrapper
  // @TODO add session provider etc...
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default trpc.withTRPC(App);
