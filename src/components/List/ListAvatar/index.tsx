import Image from 'next/image';
import React, { ReactElement, HtmlHTMLAttributes } from 'react';
import { Item, Content, Tittle } from './styles';

interface ListDisplayerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  srcImage: string;
  title: string;
  children: ReactElement;
}

export const ListAvatar: React.FC<ListDisplayerProps> = ({ children, title, srcImage, ...props }) => {
  return (
    <Item {...props}>
      <Content>
        {children}
        <Tittle>{title}</Tittle>
        <Image
          src={srcImage}
          width='250'
          height='275'
          loading="lazy"
          alt={`image: ${title}`}
        />
      </Content>
    </Item >
  );
}

