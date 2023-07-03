import { useRouter } from 'next/router';
import React from 'react';

import { CharacterCard } from '@/components/CharacterCard';
import { Container } from '@/components/Design/Container';
import { Divisor } from '@/components/Design/Divisor';
import { Header } from '@/components/Header';
import { List } from '@/components/List';
import NoResults from '@/components/NoResults';

import { useCharactersDetails } from '@/services/hooks/useCharacterDetails';
import { useComics } from '@/services/hooks/useComics';
import { useSeries } from '@/services/hooks/useSeries';

export default function CharacterPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: dataCharactersDetails, isLoading: isLoadingCharacterDetails } = useCharactersDetails(
    { characterId: slug as string },
    { refetchOnWindowFocus: false }
  );
  const results = dataCharactersDetails?.data.results[0];
  const dateTimeToUse = results?.modified ? new Date(results?.modified) : new Date(0);

  const { data: dataComics, isLoading: isLoadingComics } = useComics(
    { characters: slug as string, orderBy: 'modified', limit: 10 },
    { refetchOnWindowFocus: false }
  );
  const resultComics = dataComics?.data.results;
  const existsComicsToRender = (resultComics?.length || [].length) > 0;

  const { data: dataSeries, isLoading: isLoadingSeries } = useSeries(
    { characters: slug as string, orderBy: 'modified', limit: 10 },
    { refetchOnWindowFocus: false }
  );
  const resultSeries = dataSeries?.data.results;
  const existsSeriesToRender = (resultSeries?.length || [].length) > 0;

  return (
    <>
      <Header />
      <Container.Flex >
        <CharacterCard
          srcImage={results?.thumbnail?.path + '.' + results?.thumbnail?.extension}
          altImage={results?.name}
          isLoading={isLoadingCharacterDetails}
          name={results?.name}
          dateTime={dateTimeToUse}
          description={results?.description}
        />
        <List.Root>
          <List.Label
            isLoading={isLoadingComics}>
            Latest Comics
          </List.Label>
          <List.Group
            numSkeletonToRender={10}
            isLoading={isLoadingComics}>
            {
              existsComicsToRender ? resultComics?.map(item => (
                <List.Link href='/coding' passHref key={item.id} >
                  <List.Avatar
                    isLoading={isLoadingComics}
                    title={item.title}
                    srcImage={item.thumbnail.path + '.' + item.thumbnail.extension}
                  >
                    <span />
                  </List.Avatar>
                </List.Link>
              )) : <NoResults />
            }
          </List.Group>
        </List.Root>
        <Divisor />
        <List.Root>
          <List.Label
            isLoading={isLoadingSeries}>
            Latest Series
          </List.Label>
          <List.Group
            numSkeletonToRender={10}
            isLoading={isLoadingSeries}>
            {
              existsSeriesToRender ? resultSeries?.map(item => (
                <List.Link href='/coding' passHref key={item.id} >
                  <List.Avatar
                    isLoading={isLoadingSeries}
                    key={item.id}
                    title={item.title}
                    srcImage={item.thumbnail.path + '.' + item.thumbnail.extension}
                  >
                    <span />
                  </List.Avatar>
                </List.Link>
              )) : <NoResults />
            }
          </List.Group>
        </List.Root>
      </Container.Flex >
    </>
  )
}
