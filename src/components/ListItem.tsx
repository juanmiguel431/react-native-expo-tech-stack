import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { Card } from './common';
import { selectLibrary } from '../actions';
import { connect, MapStateToProps } from 'react-redux';
import { RootState } from '../reducers';
import { Library } from '../models';

type ListItemProps = {
  item: Library;
}

type Props = ListItemProps & StateProps & DispatchProps;

const _ListItem: React.FC<Props> = ({ item, expanded, selectLibrary }) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        LayoutAnimation.spring();
        selectLibrary(item.id);
      }}
    >
      <View>
        <Card
          title={item.title}
          description={expanded ? item.description : undefined}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

type StateProps = {
  expanded: boolean;
};

type DispatchProps = {
  selectLibrary: typeof selectLibrary
}

const mapStateToProps: MapStateToProps<StateProps, ListItemProps, RootState> = (state, ownProps) => {
  return { expanded: ownProps.item.id === state.selected };
}

export const ListItem = connect<StateProps, DispatchProps, ListItemProps, RootState>(mapStateToProps, { selectLibrary })(_ListItem);
