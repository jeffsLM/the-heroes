import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Background } from '@/components/Design/Background';
import { ThemeContextProvider } from '@/contexts/Theme.context';

import { fonts } from '@/fonts';

import { queryClient } from '@/services/queryClient';

import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Background className={fonts.className}>
          <Head>
            <title>THE HEROES</title>
          </Head>
          <Component {...pageProps} />
        </Background>
      </ThemeContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
