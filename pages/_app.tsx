import '../styles/globals.css'
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const app = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <ChakraProvider>
        <Head/>
        <NavBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
export default app
/* 
_app  vs  index

index는 사이트 경로에 액세스하는 경우에만 렌더링

_app는 프로젝트의 모든 페이지에서 렌더링된다.

1) 페이지들이 변화할 때 layout을 유지
2) 페이지를 navigating 할 때 state(상태) 유지


*/