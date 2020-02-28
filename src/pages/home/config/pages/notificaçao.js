import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {stylesConfig} from '../../../../styles/styleConfig';
import SafeAreaView from 'react-native-safe-area-view';

export function Notificaçao ({navigation}){
    return(
      <SafeAreaView style={stylesConfig.backgroundConfig}>
        <View style={stylesConfig.containerConfig}>
        <View style={stylesConfig.bottomItem}>
          <Text style={stylesConfig.headerText}>
            Notificações push
          </Text>
        </View>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Tempo')} >
            <Text style={stylesConfig.confgText}>pausar tudo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Publicações e comentários</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Seguindo e Seguidores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
            <Text style={stylesConfig.confgText}>Mensagens</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }

  
