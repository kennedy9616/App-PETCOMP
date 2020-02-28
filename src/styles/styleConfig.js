import React from 'react';
import {StyleSheet} from 'react-native';

export const stylesConfig = StyleSheet.create({
    backgroundConfig: {
        flex: 1,
        backgroundColor: '#222',
      },
    containerConfig: {
        flex: 1,
        alignItems:'flex-start',
        width: '90%',
        flexDirection:'column',
    },
    bottom:{
        height:'10%',
        width:'120%',
        backgroundColor:'#eee',
        borderColor:'#000',
        borderWidth:1,
        padding:5,
    },
    bottomItem:{
        height:'10%',
        width:'120%',
    },
    confgText:{
        fontSize:20,
        color:'#fff',
        marginHorizontal:15,
    },
    inputPesquisa:{
        backgroundColor: '#EEE',
        width: '100%',
        marginBottom: 30,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginHorizontal:15,
        marginVertical:10,
    },
    headerText:{
        fontSize:20,
        padding:5,
        color:'#fff',
    }
});