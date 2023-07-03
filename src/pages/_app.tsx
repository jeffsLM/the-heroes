import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Background } from '@/components/Design/Background';
import { Footer } from '@/components/Footer';
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
            <meta
              name="description"
              content="The Heros knowleadgebase! Get any Marvel Comics information,
              any character at any time!"
              key="desc"
            />
          </Head>
          <Component {...pageProps} />
          <Footer />
        </Background>
      </ThemeContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
