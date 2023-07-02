// import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Container } from '@/components/Design/Container';
import { Form } from '@/components/Form';
import { Search } from '@/components/Form/Search';
import { Header } from '@/components/Header';
import { List } from '@/components/List';

import { useCharacters } from '@/services/hooks/useCharacters';

type SearchFormData = {
  search: string;
}

const singInFormSchema = yup.object().shape({
  search: yup.string().required(),
})

export default function Knowledge() {
  const [search, setSearch] = useState('spider');

  const { data, isLoading, refetch: getCharacters } = useCharacters(
    { nameStartsWith: search, limit: 10, offset: 2, orderBy: '-modified' },
    { refetchOnWindowFocus: false });

  const results = data?.data.results;

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema)
  })
  const { errors } = formState;

  const handleSearch: SubmitHandler<SearchFormData> = async (formData) => {
    setSearch(formData.search);
    await getCharacters();
  }


  return (
    <>
      <Header />
      <Container.Flex>
        <Form onSubmit={handleSubmit(handleSearch)}>
          <Search
            id="search"
            placeholder="Agent, who needs to search?"
            error={errors.search}
            {...register("search")}
          />
        </Form>
        <List.Root>
          <List.Label
            isLoading={isLoading}>
            Characters
          </List.Label>
          <List.Group
            numSkeletonToRender={10}
            isLoading={isLoading}>
            {
              !isLoading && results?.map(item => (
                <List.Avatar
                  href={`/characters/${item.id}`}
                  isLoading={isLoading}
                  key={item.id}
                  title={item.name}
                  srcImage={item.thumbnail.path + '.' + item.thumbnail.extension}
                  modifiedDate={item.modified}
                />
              ))
            }
          </List.Group>
        </List.Root>
        <List.Root>
          <List.Label
            isLoading={isLoading}>
            Comics
          </List.Label>
        </List.Root>
      </Container.Flex >
    </>
  )
}
