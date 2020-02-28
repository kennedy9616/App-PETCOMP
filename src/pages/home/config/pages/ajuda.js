import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {stylesConfig} from '../../../../styles/styleConfig';
import SafeAreaView from 'react-native-safe-area-view';

export function Ajuda ({navigation}){
    return(
      <SafeAreaView style={stylesConfig.backgroundConfig}>
        <View style={stylesConfig.containerConfig}>
        <View style={stylesConfig.bottomItem}>
          <Text style={stylesConfig.headerText}>
            Dúvidas
          </Text>
        </View>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=>navigation.navigate('FaleConosco')}>
            <Text style={stylesConfig.confgText}>Fale conosco</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Dados') }>
            <Text style={stylesConfig.confgText}>Dados do aplicativo</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }

