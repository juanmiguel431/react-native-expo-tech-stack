import { FlatList } from 'react-native';
import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../reducers';
import { Library } from '../models';
import { ListItem } from './ListItem';

type LibraryListProps = {
  // title: string;
};

type Props = LibraryListProps & StateProps;

const _LibraryList: React.FC<Props> = ({ libraries }) => {

  return (
    <FlatList
      data={libraries}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem item={item}/>
      )}
    />
  );
};

type StateProps = {
  libraries: Library[];
};

const mapStateToProps: MapStateToProps<StateProps, LibraryListProps, RootState> = (state, ownProps) => {
  return { libraries: state.libraries };
};

type DispatchProps = {}

export const LibraryList = connect<StateProps, DispatchProps, LibraryListProps, RootState>(mapStateToProps)(_LibraryList);
