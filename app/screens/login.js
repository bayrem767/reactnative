import React, { useContext, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, AsyncStorage } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import axios from 'axios';
import { CredentialsContext } from '../context/StoredCredentials'
export default function login({ navigation }) {
  const [email_user, setEmail_user] = useState({ value: '', error: '' })
 const {storedCredentials,setStoredCredentials}=useContext(CredentialsContext)
  const onLoginPressed = () => {
    const emailError = emailValidator(email_user.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail_user({ ...email_user, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    
      
    }
    
   
   
 const response= login()
//  console.log(response);

  }
  const [password, setPassword] = useState({ value: '', error: '' });
  const persistLogin = (credentials, message, status) => {
  //  console.log(credentials);
    AsyncStorage.setItem("AppCredentials", JSON.stringify(credentials))
      .then(() => {
        //handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
      //  handleMessage("Persisting login failed");
        console.log(error);
      });
  };
  const  login =async () => {
    
    try{
      const {data} =  await axios.post(
             'http://10.0.2.2:8000/api/auth/login',{
              email_user: email_user.value, password: password.value
             }
             ,
             {
                 headers: {
                 'Content-Type': "application/json",
                 'Accept': "application/json",
                 }  
             }   
          );
           // console.log(data)     
      persistLogin(data, "login sucessful", "SUCCESS");
         console.log(storedCredentials);   
      }catch(e){
      
      console.log(e);
     
      }
   
    
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header></Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email_user.value}
        onChangeText={(text) => setEmail_user({ value: text, error: '' })}
        error={!!email_user.error}
        errorText={email_user.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('reset')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: '#000',
  },
  
})