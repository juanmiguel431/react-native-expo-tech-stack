import { Library } from '../models';
import React from 'react';
import { Card } from './common';

type ListItemProps = {
  item: Library;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <Card
      title={item.title}
      description={item.description}
    />
  );
};
