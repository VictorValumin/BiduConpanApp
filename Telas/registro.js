import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image,} from 'react-native';

const RegistroScreen = () => {
    return(
         <ImageBackground
           source={require('../assets/roxo.png')}
           style={styles.backgroundImage}
          >
              <View style={{flex:1, marginLeft:12}}>
                 <TouchableOpacity style={{backgroundColor: 'white', height:45, width:45, borderRadius:29, marginTop:95, marginRight: 190}}>
                     <Image source={require('../assets/icons/back-arrow.png')}
                       style={{width:32, height:33, marginTop: 5, marginLeft:5.9}}>
                      </Image>
                  </TouchableOpacity>
              </View>
              <View style={
                styles.whiteBar
              }>
                <Image source={require('../assets/perrito.png')}
                  style={styles.imagem}
                />
                <View style={[styles.container, { paddingBottom: 10 }]}>
                    <Text style={styles.labelText}>Cadastrar?</Text>
                </View>
                <View style={styles.containerB}>
                    <Text style={styles.text}>Infelizmente não é possível se cadastrar no Bidu pela internet. </Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>Pedimos que você se dirija
                    a um estabelecimento parceiro e faça seu cadastro diretamente com um atendente. </Text>
                </View>
                <View style={styles.containerf}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Parceiros Bidu</Text>
                    </TouchableOpacity>                
                </View>
              </View>
         </ImageBackground>
    );
};

const styles = StyleSheet.create({
  whiteBar: {
    height: 950,
    backgroundColor: 'white',
    marginBottom:-400,
    borderRadius:32
  },  
  imagem: {
    marginTop:-149.4,
    marginLeft:200,
    height: 195,
    width:170,
  },
  container: {
    flex: 1,
    alignItems: 'left',
    marginLeft: 45,
    marginTop: 15
  },
  containerf: {
    flex: 1,
    width: 320,
    marginLeft: 35,
    marginTop: 0
  },
  containerB: {
    flex: 1,
    width: 320,
    marginLeft: 45,
    marginTop: -300
  },
  backgroundImage: {
    flex: 1,
    height: 480,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RegistroScreen;