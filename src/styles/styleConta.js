import React from 'react';
import {StyleSheet} from 'react-native'

export const stylesConta = StyleSheet.create({
backgroundConta:{
    flex: 1,
    backgroundColor: '#2a09a3',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    padding:15,
  },
  inputConta:{
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 30,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#f99e00',
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  contaText:{
    fontSize:20,
    color:'#FFF',
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'bolder',
    justifyContent: 'center',
  },
  registerText: {
    color: '#FFF',
  },
})