import "../styles/globals.css";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import type { AppProps } from "next/app";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Head />
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};
export default app;
