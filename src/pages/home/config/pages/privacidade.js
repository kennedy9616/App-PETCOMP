import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {stylesConfig} from '../../../../styles/styleConfig';
import SafeAreaView from 'react-native-safe-area-view';

export function PrivacidadeConfg ({navigation}){
    return(
      <SafeAreaView style={stylesConfig.backgroundConfig}>
        <View style={stylesConfig.containerConfig}>
        <View style={stylesConfig.bottomItem}>
          <Text style={stylesConfig.headerText}>
            Conexões
          </Text>
        </View>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Privacidade da Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Contas restritas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Contas bloqueadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Contas silenciadas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Contas que você segue</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }