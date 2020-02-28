import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export function Privacidade({navigation}) {
    const texto="Sua privacidade está protegida";
    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={styles.privacidadeText}>
                    {texto} 
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
    privacidadeText:{
        fontSize:25,
        color:'#fff',
    }
})