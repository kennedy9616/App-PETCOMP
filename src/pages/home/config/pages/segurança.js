import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {stylesConfig} from '../../../../styles/styleConfig';
import SafeAreaView from 'react-native-safe-area-view';

export function Segurança ({navigation}){
    return(
      <SafeAreaView style={stylesConfig.backgroundConfig}>
        <View style={stylesConfig.containerConfig}>

          <View style={stylesConfig.bottomItem}>
            <Text style={stylesConfig.headerText}>
              Segurança de login
            </Text>
          </View>

            <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> navigation.navigate('Senha')}>
              <Text style={stylesConfig.confgText}>Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
              <Text style={stylesConfig.confgText}>Atividade de login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
              <Text style={stylesConfig.confgText}>Autenticação de dois fatores</Text>
            </TouchableOpacity>

          <View style={stylesConfig.bottomItem}>
            <Text style={stylesConfig.headerText}>
              Dados e Histórico
            </Text>
          </View>

            <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
                <Text style={stylesConfig.confgText}>Acessar dados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
                <Text style={stylesConfig.confgText}>Baixar dados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={stylesConfig.bottomItem} onPress={()=> {}}>
                <Text style={stylesConfig.confgText}>Histórico de pesquisa</Text>
              </TouchableOpacity>

        </View>
      </SafeAreaView>
  
    );
  }