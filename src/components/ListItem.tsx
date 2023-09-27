import React from 'react';
import { TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Touchable, View } from 'react-native';
import { Card } from './common';
import { selectLibrary } from '../actions';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../reducers';
import { Library } from '../models';

type ListItemProps = {
  item: Library;
}

type Props = ListItemProps & StateProps & DispatchProps;

const _ListItem: React.FC<Props> = ({ item, selected, selectLibrary }) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        selectLibrary(item.id);
      }}
    >
      <View>
        <Card
          title={item.title}
          description={selected ? item.description : undefined}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

type StateProps = {
  selected: boolean;
};

type DispatchProps = {
  selectLibrary: typeof selectLibrary
}

const mapStateToProps: MapStateToProps<StateProps, ListItemProps, RootState> = (state, ownProps) => {
  return { selected: ownProps.item.id === state.selected };
}

export const ListItem = connect<StateProps, DispatchProps, ListItemProps, RootState>(mapStateToProps, { selectLibrary })(_ListItem);
