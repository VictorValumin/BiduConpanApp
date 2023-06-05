import React from 'react';
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import AssetExample from '../src/components/AssetExample';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/roxo.png')}
        style={styles.backgroundImage}
      >
        <View style={[styles.container, { paddingBottom: 10 }]}>
          <Text style={styles.labelText}>Vamos começar?</Text>
        </View>
        <View style={styles.overlay} />
        <View style={styles.content}>
          <AssetExample />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fazer login</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.buttonContainer, { paddingBottom: 40 }]}>
          <TouchableOpacity style={styles.buttonz}>
            <Text style={styles.buttonTextz}>Não possui uma conta?</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    opacity: 0.01,
  },
  content: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10, 
  },
  button: {
    backgroundColor: 'orange',
    paddingHorizontal: 95,
    paddingVertical: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  labelText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 150,
  },
  buttonTextz: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonz: {
    backgroundColor: '',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 15,
  },
});

export default IndexScreen;
