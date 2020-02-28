import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export function Senha ({navigation}){
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.background}>
          
                <TextInput
                style={styles.input}
                placeholder="senha Atual"
                autoCorrect={false}
                onChangeText={() => {}}
                />

                <TextInput
                style={styles.input}
                placeholder="Nova senha"
                autoCorrect={false}
                onChangeText={() => {}}/>

                <TextInput
                style={styles.input}
                placeholder="Confirma a nova senha"
                autoCorrect={false}
                onChangeText={() => {}}/>

            <TouchableOpacity style={styles.btnSubmit} onPress={()=> {}}>
                <Text style={styles.registerText}>Enviar</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
  
    );
  }

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: '#222',
    padding:10,
  },
  Text:{
    fontSize:20,
    color:'#FFF',
  },
  input:{
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
  registerText: {
    color: '#FFF',
  },
})
