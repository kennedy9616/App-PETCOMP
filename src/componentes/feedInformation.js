import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function oi ({headerText}) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {headerText}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal: 10,
        marginBottom:25
    },
    header: {
        flex:1,
        borderBottomColor: "#0084ca",
        borderBottomWidth: 1,
        
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    content: {
        flex:5
    },
    contentText: {
        fontSize: 18,
        textAlign: "justify"
    },
});