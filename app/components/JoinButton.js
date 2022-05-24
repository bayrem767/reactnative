import { useContext, useEffect, useState } from "react";
import { CredentialsContext } from "../context/StoredCredentials";
import React from "react";
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
  import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function JoinButton(props){
    const [statusButton,setStatusButton]=useState(false)
    const [statusButtonText,setStatusButtonText]=useState("")
    const navigation=useNavigation()
    const handleParticipate=async (idProgram)=>{
        try{
          const {data} =  await axios.post(
                 'http://10.0.2.2:8000/api/auth/addparticipe',{
                  program_id: idProgram, user_id: storedCredentials.user.id
                 }
                 ,
                 {
                     headers: {
                     'Content-Type': "application/json",
                     'Accept': "application/json",
                     }  
                 }   
              );
              console.log(data)     
               setStatusButton(true);
               setStatusButtonText('participated');
            //  alert ('participated')
          }catch(e){
          
          console.log(e);
         
          }
      }
    const {storedCredentials}=useContext(CredentialsContext)
    const  buttonStatus=(params)=>{
        let found=false;
       params.forEach(element => {
         console.log(element.user_id);
         if(storedCredentials.user.id==element.user_id){
           found=true
    
         }
         
       });
       setStatusButton(found);
       setStatusButtonText(statusButton?'Participated':'participe')
  
    
      }
    
    if ( storedCredentials.token ) { 
       useEffect(()=>{ buttonStatus(props.id.participe)},[])
       return( <Button
         style={{
         }} onPress={()=>handleParticipate(props.id.id)}
         disabled={statusButton}
       title={statusButtonText}
       color="#0000FF"
       accessibilityLabel="Learn more about this purple button"
       />)
     }
     return(<Button
       style={{
       }}
       onPress={()=>navigation.navigate('register')}
       title="JOIN NOW"
       color="#0000FF"
       accessibilityLabel="Learn more about this purple button"
       />)
   }
   