import { useNavigation } from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    Alert,
    
  } from 'react-native';

  export default function Login() {

    const navigation: any = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function login(){
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }

      return(
        <View style={styles.container}>
        <StatusBar translucent hidden />
  
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
  
        <View style={styles.form}>
          <TextInput
            style={styles.login}
            placeholder="Email"
            value={email}
            onChangeText={ (email) => setEmail(email)}
          />
  
          <TextInput
            secureTextEntry={true}
            style={styles.login}
            placeholder="Senha"
            value={senha}
            onChangeText={ (senha) => setSenha(senha)}
          />
  
          <TouchableOpacity
            style={styles.loginSave}
            onPress={login}
          >
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }