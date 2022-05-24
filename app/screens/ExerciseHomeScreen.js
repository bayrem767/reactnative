import React, { useContext, useEffect, useState } from 'react';

import  {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';



import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';
import { CredentialsContext } from '../context/StoredCredentials';



const ExerciseHomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { storedCredentials} =useContext(CredentialsContext)
  useEffect(() => {
    fetch('http://10.0.2.2:8000/api/auth/getallsportt', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response)=>response.json()).then((json)=>
    {
     console.log(json)

    setData(json)
  })
  .catch((error)=>console.log(error)).finally((f)=>setLoading(false));

  }, []);
  const ExerciseItem = ({exercise}) => {
    return (
      

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExerciseDetailsScreen', {exercise: exercise})
        }
        activeOpacity={0.8}
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 35,
          margin: 10,
          height: 180,
          borderRadius: 10,
          padding: 15,
          shadowColor: '#1E90FF',
          elevation: 5,
        }}>
          
        <Image
           source={{uri: 'http://127.0.0.1:8000/sports/wRUYMc9am3NUNOO2hfxGVcjxCTfzRlet2haJTUBb.jpg'}}
          style={{width: 100, height: 100}} />
        
        <Text style={{marginTop: 20, textAlign: 'center', fontSize: 16}}>
          {exercise.nom_sport}
        </Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.blue + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.45 * SIZES.height,
          padding: 30,
          backgroundColor: COLORS.blue + '20',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/images/logoo.png')}
          style={{
            position: 'absolute',
            top: 20,
            left: 0,
            opacity: 0.5,
            width: '45%',
            height: 120,


          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          
        </View>
        
        {
            storedCredentials.token===undefined ? 
            <View style={{ flexDirection:"row", marginLeft:200,width:80, marginTop:35}}>
        <Button 
  onPress={() =>
    navigation.navigate("login")
  }
  title="LogIn"
  color="#1E90FF"
  accessibilityLabel="Learn more about this purple button"
/>
<Button 
  onPress={() =>
    navigation.navigate("register")
  }
  title="Register"
  color="#1E90FF"
  accessibilityLabel="Learn more about this purple button"
/>

</View>:null  
        }
       
        <Text style={{fontSize: 35, lineHeight: 60, fontWeight: 'bold',bottom:-100}}>
          FIRST FIT TRAINING
        </Text>
        
        <View
          style={{
            width: 60, 
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.blue + '55',
            position: 'absolute',
            right: -30,
            bottom: 50,
          }}></View>
      </View>

      <FlatList
        data={data}
        style={{
          paddingHorizontal: 20,
          marginTop: -60,
        }}
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.title}
        renderItem={({item}) => <ExerciseItem exercise={item} />}
      />
    </SafeAreaView>
    </ScrollView>
  );
};

export default ExerciseHomeScreen;