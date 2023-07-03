import React from 'react';
import { MdDateRange } from 'react-icons/md';

import { DateContainer } from './styles';

interface ListDateProps {
  modifiedDate: Date;
}

export const ListDate: React.FC<ListDateProps> = ({ modifiedDate }) => {
  return (
    <DateContainer>
      <MdDateRange size={20} />
      {new Date(modifiedDate).getFullYear()}
    </DateContainer>
  );
}

