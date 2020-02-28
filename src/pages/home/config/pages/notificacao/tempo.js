import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export function Tempo({navigation}){
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
    
          <TouchableOpacity style={styles.bottomItem} onPress={()=> {}}>
            <Text style={styles.Text}>15 minutos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem} onPress={()=> {}}>
            <Text style={styles.Text}>30 minutos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem} onPress={()=> {}}>
            <Text style={styles.Text}>1 hora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem} onPress={()=> {}}>
            <Text style={styles.Text}>8 horas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomItem} onPress={()=> {}}>
            <Text style={styles.Text}>Outro</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#222',
    },
    container:{
        flex: 1,
        alignItems:'flex-start',
        width: '90%',
        flexDirection:'column',
        padding:10,
    },
    bottomItem:{
        height:'10%',
        width:'120%',
    },
    Text:{
        fontSize:20,
        color:'#fff',
        marginHorizontal:15,
    }

})
