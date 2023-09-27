import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Card } from './common';
import { selectLibrary } from '../actions';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { Library } from '../models';

type ListItemProps = {
  item: Library;
}

type Props = ListItemProps & StateProps & DispatchProps;

const _ListItem: React.FC<Props> = ({ item, selectLibrary }) => {
  return (
    <Card
      title={item.title}
      description={item.description}
      button={{
        title: 'Select',
        callback: () => selectLibrary(item.id)
      }}
    />
  );
};

type StateProps = {};
type DispatchProps = {
  selectLibrary: typeof selectLibrary
}

export const ListItem = connect<StateProps, DispatchProps, ListItemProps, RootState>(null, { selectLibrary })(_ListItem);
