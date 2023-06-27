import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
      </Container>
    </>
  )
}
