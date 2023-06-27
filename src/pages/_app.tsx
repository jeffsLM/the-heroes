import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Background } from '@/components/Background';
import { ThemeContextProvider } from '@/contexts/Theme.context';

import { fonts } from '@/fonts';

import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Background className={fonts.className}>
        <Head>
          <title>THE HEROES</title>
        </Head>
        <Component {...pageProps} />
      </Background>
    </ThemeContextProvider>
  )
}
