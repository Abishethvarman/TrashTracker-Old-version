import React,{useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as EmailValidator from 'email-validator';
import { auth ,db} from '../../firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, setDoc, doc } from '@firebase/firestore';

const SignupFormSchema= Yup.object().shape({
    email:Yup.string().email().required('a email is required'),
    username: Yup.string().required().min(5,"Your username has to have at least 5 character"),
    password:Yup.string().required().min(8,'your password must have atleast 8 charectors'),
    confirmPassword: Yup.string().trim().oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

const SignupForm = ({navigation}) => {
    const onSignUp = (email,password) => {
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db, 'users', auth.currentUser.uid), {
            owner_uid: auth.currentUser.uid,
            username: username,
            email: email,
            isOnline: true,
        })   
        .then((re) => {
                console.log(re);
                navigation.push("HomeScreen");
            })
            .catch((re) => {
                console.log(re );
        })
    }
    

    return (
        <View style={styles.wrapper}>
            <Formik 
                initialValues={{email:'', username:'', password:''}}
                onSubmit={(values)=>{{onSignUp(values.email,values.username, values.password )}}}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >

            {({handleChange,
             handleBlur, 
             handleSubmit, 
             values,
             isValid})=>(
                <>
            <View 
                style={[
                    styles.inputField,
                        {
                            borderColor:
                            values.email.length<1 || EmailValidator.validate(values.email)
                            ? '#ccc'
                            : 'red',
                        },
                    ]}
            >
                <TextInput
                    placeholder='e-mail id'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                >
                </TextInput>
           </View>

           <View 
                style={[
                    styles.inputField,
                        {
                            borderColor:
                            1>values.username.length || values.username.length >=5
                            ? '#ccc'
                            : 'red',
                        },
                    ]}
            >
                <TextInput
                    placeholder='Username'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    textContentType='username'
                    autoFocus={true}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                >
                </TextInput>
           </View>

           <View style={[
                    styles.inputField,
                        {
                            borderColor:
                            1>values.password.length || values.password.length >=8
                            ? '#ccc'
                            : 'red',
                        },
                    ]}>
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                >
                </TextInput>
           </View>

           <View style={[
                    styles.inputField,
                        {
                            borderColor:
                            1>values.password.length || values.password.length >=8
                            ? '#ccc'
                            : 'red',
                        },
                    ]}>
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor='#444'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='confirmPassword'
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                >
                </TextInput>
           </View>
          

            <View style={{alignItems:'flex-end',marginBottom:30}}>
                <Text style={{color:'#1E90FF'}}> Forgot Password? </Text>
            </View>
    
            <Pressable 
                titleSize={20} 
                style={styles.button(isValid)} 
                onPress={handleSubmit} disabled={!isValid}
            > 
              <Text style={{color:'white'}}>Sign Up</Text>
            </Pressable>


            <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:5}}>
                    <Text style={{color:'black', fontSize:15}}>Do you already have an account</Text>
                <TouchableOpacity onPress={()=>navigation.goBack('loginScreen')}>
                    <Text style={{color:'#1E90FF', fontSize:15}}> LogIn</Text>
                </TouchableOpacity>
            </View>
            </>
            )}   
            </Formik>
        </View>
    )
}

const styles=StyleSheet.create({
    wrapper:{
        marginTop:35
    },
    
    inputField:{
        borderRadius:5,
        padding:5,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    button:(isValid)=>({
        backgroundColor: isValid ? '#1E90FF' : '#9ACAF7',
        borderRadius:5,
        alignItems:'center',
        padding:10
    })
})

export default SignupForm
