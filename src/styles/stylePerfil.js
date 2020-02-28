import {StyleSheet} from 'react-native';

export const stylesPerfil = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#222',
    },
    top:{
      height:'30%',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      backgroundColor:'#222',
      padding:20,
    },
    perfilImage:{
      width:140,
      height:140,
      borderRadius:100,
      borderWidth:4,
      borderColor:'#e66805',
      backgroundColor:'#fff',
    },
    perfilText:{
      fontSize:25,
      fontFamily:'Arial',
      color:'#e66805',
      padding:5,
    },
    perfilsubText:{
      fontSize:13,
      fontFamily:'Arial',
      color:'#fff',
      marginHorizontal:5,
      padding:5,
    },
    descricao:{
      width:200,
      height:150,
      marginHorizontal:150,
      borderColor:'#e66805',
      marginVertical:5,
    },
    bottom:{
      backgroundColor: '#e66805',
        height: 35,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginHorizontal:10,
    },
    bottomText:{
      fontSize:13,
      fontFamily:'Arial',
      color:'#fff',
      marginHorizontal:20,
    },
    center:{
      height:'10%',
      backgroundColor:'#222',
      flexDirection:'row',
      flexWrap:'wrap',
    },
    bottomCenter:{
      width:'50%',
      padding:5,
    },
    itemCenter:{
      flex:1,
      backgroundColor:'#e66805',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
    },
    galeria:{
      height:'60%',
      backgroundColor:'#222',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:5,
    },
    Item:{
      width:'50%',
      height:'50%',
      padding:5,
    },
    galeriaItem:{
      flex:1,
      backgroundColor:'#e66805',
    },
    imageItem:{
      width:182,
      height:169,
    }

})
