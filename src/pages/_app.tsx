import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeContextProvider } from '../contexts/Theme.context';

import { arimo } from '../fonts';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <main className={arimo.className}>
        <Head>
          <title>my-hero-project</title>
        </Head>
        <Component {...pageProps} />
      </main>
    </ThemeContextProvider>
  )
}
