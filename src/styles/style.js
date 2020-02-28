import {StyleSheet} from 'react-native';
/*
import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: 600;
`;
export const PostImage = styled.Image`
width: 90%;
aspect-ratio: ${props => props.ratio}
`;
export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;
*/
export const styles = StyleSheet.create({

  ImageBackground:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%',
  },
  backgroundHome: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundConta:{
    flex: 1,
    backgroundColor: '#2a09a3',
    alignContent:'flex-end',
    justifyContent:'flex-end',
    padding:15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
  },
  containerLogo: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  inputConta:{
    backgroundColor: '#FFF',
    width: '100%',
    marginBottom: 30,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  contaText:{
    fontSize:20,
    color:'#FFF',
  },
  btnSubmit: {
    backgroundColor: '#f99e00',
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'bolder',
    justifyContent: 'center',
  },
  btnRegister: {
    marginTop: 10,
    height: 35,
  },
  registerText: {
    color: '#FFF',
  },
  Map:{
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0
  },
  backgroundFeed:{
    flex: 1,
    backgroundColor: '#DDD',
  },
  ImageFeed:{
    backgroundColor:'#222',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    marginBottom: 50,
    width:'45%',
    position:'absolute',
  },
  Description:{
    flex:1,
  },
});
