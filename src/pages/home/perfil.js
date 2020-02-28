import React from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {stylesPerfil} from '../../styles/stylePerfil';

export function Perfil({ navigation }) {
    return (
      <View style={stylesPerfil.container}>

        <View style={stylesPerfil.top}>
          <View style={stylesPerfil.perfilImage}>
    
            <View style={stylesPerfil.descricao}>

              <Text style={stylesPerfil.perfilText}>@kennedy99</Text>
              <Text style={stylesPerfil.perfilsubText}>UFMA- Computer Science</Text>
              <Text style={stylesPerfil.perfilsubText}>Projeto: React Native</Text>

              <TouchableOpacity style={stylesPerfil.bottom} onPress={()=>{}}>
                <Text style={stylesPerfil.bottomText}>Editar Perfil</Text>
              </TouchableOpacity>
 
            </View>
          </View>

        </View>

        <View style={stylesPerfil.center}>
          
          <View style={stylesPerfil.bottomCenter}>
            <View style={stylesPerfil.itemCenter}>
              <TouchableOpacity style={stylesPerfil.bottom} onPress={()=>{}}>
                <Text style={stylesPerfil.bottomText}>Foto</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={stylesPerfil.bottomCenter}>
            <View style={stylesPerfil.itemCenter}>
              <TouchableOpacity style={stylesPerfil.bottom} onPress={()=>{}}>
                <Text style={stylesPerfil.bottomText}>Marcado</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View  style={stylesPerfil.galeria}>

          <View style={stylesPerfil.Item}>
            <View style={stylesPerfil.galeriaItem}>
              <Image style={stylesPerfil.imageItem} source={require('../../image/feed1.jpeg')}/>
            </View>
          </View>

          <View style={stylesPerfil.Item}>
            <View style={stylesPerfil.galeriaItem}>
              <Image style={stylesPerfil.imageItem} source={require('../../image/feed2.jpeg')}/>
            </View>
          </View>

          <View style={stylesPerfil.Item}>
            <View style={stylesPerfil.galeriaItem}>
              <Image style={stylesPerfil.imageItem} source={require('../../image/feed3.jpeg')}/>
            </View>
          </View>

          <View style={stylesPerfil.Item}>
            <View style={stylesPerfil.galeriaItem}>
              <Image style={stylesPerfil.imageItem} source={require('../../image/feed4.jpeg')}/>  
            </View>
          </View>

        </View>

      </View>
    );
  }