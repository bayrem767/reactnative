import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Picker, ScrollView } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'
import DatePicker from 'react-native-datepicker'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { setDate } from 'date-fns'



export default function register({ navigation }) {
  
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  const [selectedValue, setSelectedValue] = useState("java");
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [lastname, setlastname] = useState({ value: '', error: '' })
  const [phone, setphone] = useState({ value: '', error: '' })
  const [date , setDatedate] = useState(new Date())
  
  const genders = [
    "Female","Male"];
  const onSignUpPressed = () => {
    const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email_user:email.value,password:password.value,nom_user:lastname.value,prenom_user:name.value,tel_client:phone.value,date_naissance_client:date}) }; fetch('http://10.0.2.2:8000/api/auth/register', requestOptions) .then(response => response.json()) .then(data => console.log(data));
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    alert("Successfully registered.")
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    })
  }
  


  return (<ScrollView>
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastname.value}
        onChangeText={(text) => setlastname({ value: text, error: '' })}
        error={!!lastname.error}
        errorText={lastname.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value}
        onChangeText={(text) => setphone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
      />

        <DatePicker

                      style={{width:  320}}
                      mode="date"
                      date={date}
                      placeholderText="Birthday"

                      format="YYYY/MM/DD "
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'relative',
                          left: -5,
                          top: 25,
                          marginLeft: 10
                        },
                        dateInput: {
                          marginLeft: 10,
                          top: 29,
                          height: 58,
                          
                          borderRadius: 3,
                          borderColor: '#444',
                        },
                        
                        dateText: {
                          fontSize: 17,
                          color: "black",
                          textAlign: "right"
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {   // returns 2019-10-15T23:23 - set in format prop
                        setDatedate(date)

                      }
                        }

                    />
 <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />


<SelectDropdown
            data={genders}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Gender'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
       {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="java" />
        <Picker.Item label="Female" value="js" />
      </Picker> */}
   
   {/* <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/> */}
      <TextInput
      style={{top: 25,}}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  dropdown1BtnTxtStyle: {color: theme.colors.secondary, textAlign: 'left',fontSize: 17,},
  dropdown1DropdownStyle: {backgroundColor: theme.colors.surface,},
  dropdown1RowStyle: {backgroundColor: '#ffffff', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {fontWeight: 'bold',color: theme.colors.primary, textAlign: 'left',fontSize: 20,},
  dropdown1BtnStyle: {
    width: '100%',
    height: 60,
    backgroundColor: theme.colors.surface,
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: '#444',
    marginTop:60,
    top: 10,

  },
  dropdown2BtnTxtStyle: {color: theme.colors.secondary, textAlign: 'left',fontSize: 17,},
  dropdown2DropdownStyle: {backgroundColor: theme.colors.surface,},
  dropdown2RowStyle: {backgroundColor: '#ffffff', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {fontWeight: 'bold',color: theme.colors.primary, textAlign: 'left',fontSize: 20,},
  dropdown2BtnStyle: {
    width: '100%',
    height: 60,
    backgroundColor: theme.colors.surface,
    borderRadius: 4,
    borderWidth: 0.7,
    borderColor: '#444',
    marginTop:30,
    top: 10,

  },
})