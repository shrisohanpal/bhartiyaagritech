import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ITEMS } from '../Data';
import ItemTile from '../components/CropItem';

const Items = props => {
  const renderGridItem = itemData => {
    return (
      <ItemTile
      props = {props}
      item = {itemData.item}
      /> 
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={ITEMS}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default Items;