import  React,{Component} from 'react';
import {StyleSheet,View,Text,Image } from "react-native";
import { Title } from 'react-native-paper';
import { Homebg } from './homebg';

const images = [
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/11.jpeg?alt=media&token=033ba045-8874-4466-ae92-41fa50063a76",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/2.jpeg?alt=media&token=7ecc0830-e07d-4cbf-bd57-f1d9093844be",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/3.jpeg?alt=media&token=a34d1324-817a-487f-acd6-463903168471",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/4.jpeg?alt=media&token=245a4859-266a-4401-bce4-673fef2be2ed",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/5.jpeg?alt=media&token=385ac6a5-3b54-486d-b760-dd8753f4f529",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/6.jpeg?alt=media&token=d9a21620-56e7-4b78-8ddb-44aed80e7e39",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/7.jpeg?alt=media&token=a361b308-269d-4583-9fd6-3b1bd84092ba",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/8.jpeg?alt=media&token=414b6434-81dc-47f7-a2f3-021dbee0abb5",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/9.jpeg?alt=media&token=da2b2fd2-d014-483c-981e-d8ce1cad9b60",

];
export default class Home extends Component {
  render() {
    return <View style={styles.container}>
       <Image
        style={styles.logo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/skct3.png?alt=media&token=e7724004-67c2-416b-9cc7-80af267e45f3',
        }}
      />
       <Title style={{ fontSize: 20, marginBottom: 0, textAlign: 'center', color:'#00008b', fontWeight: 'bold',justifyContent:'flex-start'}}>
         SRI KRISHNA COLLEGE OF TECHNOLOGY
         </Title>
        <Homebg images={images} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 6
  },
  title: {
    height:'150%',
    justifyContent: "center",
    width:'100%'
  },
  logo: {
    width: 66,
    height: 58,
  }
});