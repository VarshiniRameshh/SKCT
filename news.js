import  React,{Component} from 'react';
import { Image, StyleSheet,Text,View } from "react-native";
import { BackgroundCarousel } from './BackgroundCarousel';

const images = [
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(10).jpeg?alt=media&token=4dc45851-f315-4f8b-be26-bb88aa7750a3",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(1).jpeg?alt=media&token=f37b955a-107c-4a39-ac5e-156bc8efe405",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(11).jpeg?alt=media&token=8df01f31-98bb-47a1-8380-06d343ea968d",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(12).jpeg?alt=media&token=dcf90173-1994-46c4-8ba8-ec4c740137b7",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(13).jpeg?alt=media&token=6812394f-3256-4da1-8b26-5d91244de364",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(14).jpeg?alt=media&token=1162ff4b-4daf-4830-bbca-8279d575faef",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(15).jpeg?alt=media&token=9705ca00-24bc-411b-bf4c-faac8d80844d",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(16).jpeg?alt=media&token=f0567724-7b80-44b4-b7ce-08925c45d580",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(17).jpeg?alt=media&token=5816b6cd-fefc-492b-97b1-018f89d560e6",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(2).jpeg?alt=media&token=aef3b375-a56a-497c-b9d9-4449199d8483",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(3).jpeg?alt=media&token=065181e8-4027-49f8-a8b9-7321d5b42734",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(4).jpeg?alt=media&token=ebb82cb6-a628-4a25-94f7-fc7ed29fed5f",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM.jpeg?alt=media&token=7096bd70-7877-40b2-b281-99c443c2f0fb",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(9).jpeg?alt=media&token=30109834-5cfc-4b7d-bf36-beb4842a09ab",
  "https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/WhatsApp%20Image%202021-08-24%20at%203.26.57%20PM%20(7).jpeg?alt=media&token=00a478f7-c843-47e2-bae6-97877e914ae4",

];
export default class App extends Component {
  render() {
    return <View style={styles.container}>
       <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center', color:'#00008b', fontWeight: 'bold'}}>
         SRI KRISHNA COLLEGE OF TECHNOLOGY
         </Text>
        <BackgroundCarousel images={images} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});