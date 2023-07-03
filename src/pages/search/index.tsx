import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Container } from '@/components/Design/Container';
import { Form } from '@/components/Form';
import { Search } from '@/components/Form/Search';
import { Header } from '@/components/Header';
import { List } from '@/components/List';
import NoResults from '@/components/NoResults';

import { useCharacters } from '@/services/hooks/useCharacters';

type SearchFormData = {
  search: string;
}

const singInFormSchema = yup.object().shape({
  search: yup.string().required(),
})

export default function SearchPage() {
  const [search, setSearch] = useState('spider');

  const { data, isLoading, refetch: getCharacters } = useCharacters(
    { nameStartsWith: search || '', limit: 15, orderBy: '-modified' },
    { refetchOnWindowFocus: false });

  const results = data?.data?.results;
  const existsDataToRender = (results?.length || [].length) > 0;

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
            {search === 'spider' ? 'Favorite by Creator' : 'Characters'}
          </List.Label>
          <List.Group
            numSkeletonToRender={15}
            isLoading={isLoading}>
            {
              existsDataToRender ? results?.map(item => (
                <List.Link
                  key={item.id}
                  href={`/characters/${item.id}`}
                  passHref>
                  <List.Avatar
                    isLoading={isLoading}
                    title={item.name}
                    srcImage={item.thumbnail.path + '.' + item.thumbnail.extension}>
                    <List.Date modifiedDate={item.modified} />
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
