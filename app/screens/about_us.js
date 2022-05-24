import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants';



const about_us = ({navigation}) => {
    
  ;

  return (
    //<ScrollView horizontal={true} >
    <ScrollView>
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <StatusBar
        backgroundColor={COLORS.bluePage + '30'}
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.35* SIZES.height,
          padding: 20,
          backgroundColor: COLORS.blue + '20',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/images/logoo.png')}
          style={{
            position: 'absolute',
            top: 270,
            left: 80,
            opacity: 0.3,
            width: '60%',
            height: 300,

          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.blue + '45',
              marginRight: 0,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            
          </View>
        </View>

        <Text style={{fontSize: 33, lineHeight: 45, fontWeight: 'bold'
    }}>
          TEAM
        </Text>
        
        <Text style={{fontSize: 20, lineHeight: 30,bottom:-30
    }}>
        Richard Filkuka {"\n"}
(Managing Partner)
            </Text>
            <Text style={{marginVertical: 15, fontSize: 15,bottom:-75,fontWeight: 'bold'}}>"Originally from the Czech Republic. After receiving his degree in Marketing from Lamar University (Houston, US, athletic scholarship), Richard has been training tennis for Future Star tennis club in the Hamptons, NY. Arriving to Doha 6 years ago, his strong passion for tennis & sports led him to launch FFT Sports, LLC in 2014. FFT Sports has now 6 full time & 5 part time internationally certified trainers, 12 programs in 9 locations and growing every year. "</Text>
        
        
            <Image
          source={require('../assets/images/team.jpg')}
          style={{
            position: 'absolute',
            top: 120,
            left: 220,
            width: '45%',
            height: 120,


          }}
        />
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
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 20,
          backgroundColor: COLORS.blue + '20',

        }}>
      <Text style={{fontSize: 33, lineHeight: 450, fontWeight: 'bold', textAlign:'center'
    }}>
          CLIENT
        </Text>
        <Image
          source={require('../assets/images/client1.jpg')}
          style={{
            position: 'relative',
            top: -200,
            left: 200,
            width: '40%',
            height: 120,
          }}
        />
         <Image
          source={require('../assets/images/client2.jpg')}
          style={{
            position: 'relative',
            top: -320,
            left: 10,
            width: '42%',
            height: 120,
          }}
        />
         <Image
          source={require('../assets/images/client3.jpg')}
          style={{
            position: 'absolute',
            top: 430,
            left: 221,
            width: '40%',
            height: 120,
          }}
        />
         <Image
          source={require('../assets/images/client4.jpg')}
          style={{
            position: 'absolute',
            top: 430,
            left: 31,
            width: '42%',
            height: 120,
          }}
        />
        </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default about_us;
