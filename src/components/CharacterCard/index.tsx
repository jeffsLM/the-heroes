import React from 'react';

import { Character } from '@/components/Character';

interface CharacterCardProps {
  srcImage: string;
  isLoading: boolean;
  altImage?: string;
  name?: string;
  dateTime?: Date;
  description?: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ srcImage, altImage, isLoading, name, dateTime, description }) => {
  return (
    <Character.Card>
      <Character.CardHeader>
        <Character.Avatar
          srcImage={srcImage}
          altImage={altImage}
          isLoading={isLoading}
        />
      </Character.CardHeader>
      <Character.Body>
        <Character.Title isLoading={isLoading} >{name} </Character.Title>
        <Character.Date isLoading={isLoading} dateTime={dateTime} />
        <Character.Description>
          {description ? description : 'Description not provided.'}
        </Character.Description>
      </Character.Body>
    </Character.Card>
  );
}
