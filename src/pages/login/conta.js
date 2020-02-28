import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
  import SafeAreaView from 'react-native-safe-area-view';
  import {stylesConta} from '../../styles/styleConta';

export function Conta({navigation}){
    return(
        <SafeAreaView style={stylesConta.backgroundConta}>
            <ScrollView>
            <View style={stylesConta.backgroundConta}>
                <Text style={stylesConta.contaText}>Nome</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Nome"
                autoCorrect={true}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Email :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Confirma email :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Confirma email"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Senha:</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="senha"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Confirma Senha:</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Confirma senha"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Universidade :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Universidade:"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Estado :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="UF"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Usuario :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="Nickname"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <Text style={stylesConta.contaText}>Telefone :</Text>
                <TextInput
                style={stylesConta.inputConta}
                placeholder="(xx) x xxxx-xxxx"
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <TouchableOpacity style={stylesConta.btnSubmit} onPress={()=> navigation.navigate('Login')}>
                    <Text style={stylesConta.registerText}>Confirmar</Text>
                </TouchableOpacity>
  
            </View>
        </ScrollView>
        </SafeAreaView>
  );
  }
  