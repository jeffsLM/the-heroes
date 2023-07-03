import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

import { Skeleton } from '@/components/Design/Skeleton';

import { Container } from './styles';

interface CharacterAvatarProps extends HTMLAttributes<HTMLDivElement> {
  altImage?: string;
  srcImage: string;
  isLoading: boolean;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({ srcImage, isLoading, altImage, ...props }) => {

  if (isLoading) {
    return (
      <Container {...props}>
        <Skeleton
          speed={2}
          width={180}
          height={200}
          viewBox="0 0 180 200"
        >
          <rect x="0" y="0" rx="5" ry="5" width="180" height="200" />
        </Skeleton>
      </Container>
    )
  }

  return (
    <Container {...props}>
      <Image
        src={srcImage}
        width='200'
        height='150'
        loading="lazy"
        alt={`image: ${altImage}`}
      /></Container>
  );
}
