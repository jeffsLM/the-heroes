import Image from 'next/image';
import { LinkProps } from 'next/link';
import React from 'react';
import { MdDateRange } from 'react-icons/md';

import { Item, Content, Tittle, DateContainer } from './styles';

interface ListDisplayerProps extends LinkProps {
  isLoading: boolean;
  srcImage: string;
  title: string;
  modifiedDate: Date;
}

export const ListAvatar: React.FC<ListDisplayerProps> = ({ modifiedDate, title, srcImage, ...props }) => {
  return (
    <Item passHref {...props}>
      <Content>
        <DateContainer>
          <MdDateRange size={20} />
          {new Date(modifiedDate).getFullYear()}
        </DateContainer>
        <Tittle>{title}</Tittle>
        <Image
          src={srcImage}
          width='250'
          height='275'
          loading="lazy"
          alt={`image: ${title}`}
        />
      </Content>
    </Item>
  );
}

