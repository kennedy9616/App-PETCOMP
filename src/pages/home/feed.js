import React from 'react';
import {
  FlatList,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {stylesFeed} from '../../styles/styleFeed';

export function Feed({ navigation }) {

    return (
      <ScrollView>
      <SafeAreaView style={stylesFeed.container}>

        <View style={stylesFeed.container}>
            <View style={stylesFeed.center}>
              <Text style={stylesFeed.headerText}>@react976</Text>
            </View>
            <View style={stylesFeed.imageFeed}>
              <Image style={stylesFeed.imageItem} source={require('../../image/feed1.jpeg')}/>
            </View>
            <View style={stylesFeed.centerDescription}>
              <Text style={stylesFeed.descriptionText}>Venha fazer parte do nosso projeto React-Native, interessado informacões na Bio</Text>
            </View>
        </View>

        <View style={stylesFeed.container}>
            <View style={stylesFeed.center}>
              <Text style={stylesFeed.headerText}>@nd874</Text>
            </View>
            <View style={stylesFeed.imageFeed}>
              <Image style={stylesFeed.imageItem} source={require('../../image/feed2.jpeg')}/>
            </View>
            <View style={stylesFeed.centerDescription}>
              <Text style={stylesFeed.descriptionText}>Venha fazer parte do nosso projeto React-Native, interessado informacões na Bio</Text>
            </View>
        </View>

        <View style={stylesFeed.container}>
            <View style={stylesFeed.center}>
              <Text style={stylesFeed.headerText}>@raph654</Text>
            </View>
            <View style={stylesFeed.imageFeed}>
              <Image style={stylesFeed.imageItem} source={require('../../image/feed3.jpeg')}/>
            </View>
            <View style={stylesFeed.centerDescription}>
              <Text style={stylesFeed.descriptionText}>Venha fazer parte do nosso projeto React-Native, interessado informacões na Bio</Text>
            </View>

        </View>

        <View style={stylesFeed.container}>
            <View style={stylesFeed.center}>
              <Text style={stylesFeed.headerText}>@native927</Text>
            </View>
            <View style={stylesFeed.imageFeed}>
              <Image style={stylesFeed.imageItem} source={require('../../image/feed4.jpeg')}/>
            </View>
            <View style={stylesFeed.centerDescription}>
              <Text style={stylesFeed.descriptionText}>Venha fazer parte do nosso projeto React-Native, interessado informacões na Bio</Text>
            </View>
        </View>

        <View style={stylesFeed.container}>
            <View style={stylesFeed.center}>
              <Text style={stylesFeed.headerText}>@IA74</Text>
            </View>
            <View style={stylesFeed.imageFeed}>
              <Image style={stylesFeed.imageItem} source={require('../../image/feed5.jpeg')}/>
            </View>
            <View style={stylesFeed.centerDescription}>
              <Text style={stylesFeed.descriptionText}>Venha fazer parte do nosso projeto React-Native, interessado informacões na Bio</Text>
            </View>
        </View>

      </SafeAreaView>
      </ScrollView>
    );
  }
  