import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerg}
    >
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
             <Image source={require('../assets/dogapoio.png')}
               style={styles.imagem}
          />
            <View style={[styles.container, { paddingBottom: 10 }]}>
          <Text style={styles.labelTextz}>Login</Text>
        </View>
        
    <View style={styles.containerf}>
      <TextInput
        style={styles.inputf}
        placeholder="Nome de usuário"
        placeholderTextColor="gray"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputf}
        placeholder="Senha"
        placeholderTextColor="gray"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.buttong}>
        <Text style={styles.buttonTextg}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonf} onPress={handleLogin}>
        <Text style={styles.buttonTextf}>Entrar</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
          <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',}}>Ou</Text>
      </View>
      <View style={{flex:1, justifyContent: 'center',}}>
          <TouchableOpacity style={{backgroundColor: '#E8E8E8', height:55, width:55, borderRadius:13, marginTop:95, marginRight: 190}}>
              <Image source={require('../assets/icons/google.png')}
                  style={{width:32, height:33, marginTop: 12, marginLeft:12.5}}>
              </Image>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#E8E8E8', height:55, width:55, borderRadius:13, marginTop:-55, marginLeft: 95}}>
              <Image source={require('../assets/icons/apple.png')}
                  style={{width:30, height:37, marginTop: 8.5, marginLeft: 13}}>
              </Image>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#E8E8E8', height:55, width:55, borderRadius:13, marginTop:-55, marginLeft:190}}>
              <Image source={require('../assets/icons/facebook.png')}
                  style={{width:35, height:35, marginTop: 9.5, marginLeft:11}}>
              </Image>
          </TouchableOpacity>
    </View>
           </View>
           </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerg: {
    flex: 1,
  },
  containerf: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 700,
    padding: 26,
  },
  inputf: {
    width: '100%',
    height: 50,
    borderWidth: 0,
    borderColor: 'gray',
    backgroundColor: '#E8E8E8',
    borderRadius: 15,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonf: {
    width: '100%',
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttong: {
    width: '100%',
    height: 30,
    backgroundColor: '',
    borderRadius: 8,
    marginLeft: 415
  },
  buttonTextf: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonTextg: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -10,
  },
  container: {
    flex: 1,
    alignItems: 'left',
    marginLeft: 35,
    marginTop: -10
    
  },
  backgroundImage: {
    flex: 1,
    height: 480,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  whiteBar: {
    height: 950,
    backgroundColor: 'white',
    marginBottom:-400,
    borderRadius:32
  },
  imagem: {
    marginTop:-110

  },
  labelTextz: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LoginScreen;

