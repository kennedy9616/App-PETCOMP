import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export function  Dados ({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.background}>
                <Text style={styles.Text}>
                    Facubook
                </Text>  

                <Image source={require('../../../../../image/facubook.png')} />

                <Text style={styles.Text}>
                    Versão: 1.0
                </Text>      
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#222',
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        fontSize:25,
        color:'#fff',
    }
})