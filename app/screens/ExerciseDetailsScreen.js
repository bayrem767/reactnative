import React, {useEffect,useState,useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Button
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5' ;
import {COLORS, SIZES} from '../constants';
import { useNavigation } from '@react-navigation/native';
import {CredentialsContext }from '../context/StoredCredentials'
import JoinButton from '../components/JoinButton';
import axios from 'axios';
const ExerciseDetailsScreen = ({route}) => {
  const [exercise, setExercise] = useState(route.params.exercise);
  const [data, setData] = useState([]);
  const id = route.params.exercise.id
  useEffect(() => {
    
    fetch('http://10.0.2.2:8000/api/auth/getProgramsBySport/'+id, {
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
  const SessionItem = ({session, index}) => {

   
    
   
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.85*SIZES.width -40,
          borderRadius: 40,
          marginBottom: 10,
          padding: 5,
          shadowColor: '#9e9898',
          elevation: 5,  
      
          }}>
        
          <Text style={{fontSize: 30}}>{session.nom_program}</Text>
            <View style={{}}>
              <Text>{session.program_date_debut}</Text>
              <Text>{session.program_date_fin}</Text>
            </View>
        
         
        <View
        style={{
          flexDirection: 'row',justifyContent: 'space-between',padding:30,marginRight: 40}}
        >
            <Text>Nombre des séances:</Text>
            <Text>{session.nombre_seance}</Text>
        </View>
        <View
        style={{
          marginVertical: -70,flexDirection: 'row',justifyContent: 'space-between',padding:45,marginRight: 25
        }}
        >
            <Text>Prix d'une séance:</Text>
            <Text>{session.prix_seance}</Text>
        </View>

        <View 
        style={{alignItems: 'center',    marginVertical: 65,



        }}>
        <JoinButton id={session}/>
  
        </View>
        {/* <Button
        style={{
          marginVertical: -40,
        }}
        onPress={()=>navigation.navigate('register')}
        title="JOIN NOW"
        color="#0000FF"
        accessibilityLabel="Learn more about this purple button"
        />  */}
      </View>
    );
  };

  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={'#B1E5F6'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.4 * SIZES.height,
          padding: 30,
          backgroundColor: '#B1E5F6',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/images/BgPurple.png')}
          style={{
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        <Text style={{fontSize: 30, lineHeight: 45,fontWeight: 'bold'}}>{exercise.nom_sport}</Text>
        <Text style={{fontSize: 16, opacity: 0.6, marginVertical: 10}}>
          {exercise.nom_sport}
        </Text>
        <Text style={{fontSize: 20, width: '60%'}}>{exercise.nom_sport}</Text>
        

        <Image
          source={exercise.image_sport}
          style={{
            position: 'absolute',
            bottom: 40,
            right: 10,
            width: 150,
            height: 200,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{marginTop: -30, marginHorizontal: 30}}>
        <FlatList
          data={data}
          contentContainerStyle={{
            alignItems: 'center',
            
          }}
          key={'_'}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => "_" + item}
          renderItem={({item}) => (
            <SessionItem session={item} />
          )}
        />
        <Text style={{marginVertical: 15, fontSize: 20}}>{exercise.nom_sport}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white,
            borderRadius: 15,
            padding: 15,
            shadowColor: '#1E90FF',
            elevation: 5,
          }}>
          <Image
            source={exercise.image_sport}
            style={{width: 80, height: 60, resizeMode: 'center'}}
          />
          <View>
            <Text>Basic 2</Text>
            <Text>Start your deepen you practice</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default ExerciseDetailsScreen;