import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const Skeleton = styled(ContentLoader).attrs(({ theme }) => ({
  backgroundColor: theme.shadesOfGray.i800,
  foregroundColor: theme.shadesOfGray.i700,
}))``;
