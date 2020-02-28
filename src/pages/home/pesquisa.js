import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StatusBar} from 'react-native';
  import SafeAreaView from 'react-native-safe-area-view';
import {stylesPesquisa} from '../../styles/stylePesquisa';

export function Pesquisa({ navigation }) {
    return (
      <SafeAreaView  style={stylesPesquisa.backgroundPesquisa}>
      <ScrollView>
      <View >
          <Text style={stylesPesquisa.pesquisaText}>Pesquisa:</Text>
          <TextInput
          style={stylesPesquisa.inputPesquisa}
          placeholder="Facubook"
          autoCorrect={true}
          onChangeText={() => {}}
          />
      </View>
      </ScrollView>
      </SafeAreaView>      
    );
}
