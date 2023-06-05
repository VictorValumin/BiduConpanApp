import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const AssetExample = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/astolfo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 338,
    width: 368,
    marginTop: 80
  },
});

export default AssetExample;
