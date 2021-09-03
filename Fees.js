import React from 'react';
import { ImageBackground,StyleSheet,View,Linking,Button} from 'react-native';
function Fees(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/Login2.png")}>
        <View style={styles.button}>
       <Button title=
       '             PAY HERE              '
    
       onPress={()=> Linking.openURL('https://pgw.srikrishna.ac.in/?key=ujtyj564ty64rt6') }
       />
  </View>
</ImageBackground>
    );
}
export default Fees;

const styles=StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:'center',
    },
    button: {
        justifyContent: "center",
        width:'100%',
        height:'160%',
        alignItems:"center",
        padding:15,
        fontSize:10
    },
})