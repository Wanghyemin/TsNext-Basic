import "../styles/globals.css";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import type { AppProps } from "next/app";
import {  QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";



const app = ({ Component, pageProps }: AppProps) => {

  const queryClient = new QueryClient();
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
