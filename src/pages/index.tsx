import { Container } from '@/components/Design/Container';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Container.Root>
        <Hero />
      </Container.Root>
    </>
  )
}
