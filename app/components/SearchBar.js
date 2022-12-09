import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import colors from '../misc/colors';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder='cari disini...'
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 35,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    height: 35,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 15,
  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;
