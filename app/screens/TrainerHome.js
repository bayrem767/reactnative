import React, { useEffect, useState } from 'react';
import RNPickerSelect from "react-native-picker-select";

import  {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {COLORS, SIZES} from '../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const TrainerHome = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch('http://10.0.2.2:8000/api/auth/getalluser', {
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
  
  

  return (
    
    <ScrollView>
    <SafeAreaView style={{flex:1, position: 'relative'}}>
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
        <TouchableOpacity style={{ flexDirection:"row", marginLeft:200,width:80, marginTop:35}}>
        
</TouchableOpacity>
        <Text style={{fontSize: 35, lineHeight: 60, fontWeight: 'bold',bottom:-75}}>
          FIRST FIT TRAINING
        </Text>
        <Text style={{fontSize: 25, lineHeight: 60, fontWeight: 'bold',bottom:-75, textAlign:'center'}}>
          Welcome, Trainer.
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
      
          <Text style={{fontSize: 25, lineHeight: 60, fontWeight: 'bold',bottom:50, textAlign:'center'}}>Presence List</Text>
          <RNPickerSelect
          style={customPickerStyles.inputAndroid}
        placeholder={{ label: "Select your group", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Groupe 1", value: "GP1" },
                     { label: "Groupe 2", value: "GP2" },
                     { label: "Groupe 3", value: "GP3" },
                 ]}
             />
          <View style={{width: '50%', marginLeft:180}}>
          
</View>
          {data.map((item)=>{
              
                return(<View key={item.id} style={{flexDirection:'row'}}> 
                <Text style={{fontSize:20}}> {item.nom_user} {item.prenom_user}</Text>
                <TouchableOpacity><FontAwesome5 name={'check'} /></TouchableOpacity>
                
                <TouchableOpacity><FontAwesome5 name={'ban'} /></TouchableOpacity>
            </View> )
                
              }
          )}
          
          
    </SafeAreaView>
    </ScrollView>
  );
};
const customPickerStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default TrainerHome;