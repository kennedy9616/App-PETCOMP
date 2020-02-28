import React from 'react';
import {StyleSheet} from 'react-native'

export const stylesLogin = StyleSheet.create({
    backgroundLogin: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
      },
      Logo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 360,
        marginBottom: 50,
      },
      input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 20,
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
      submitText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'bolder',
        justifyContent: 'center',
      },
      btnRegister: {
        marginTop: 10,
        height: 35,
      },
      registerText: {
        color: '#FFF',
      },
})