import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView,Linking, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';


export default class Networking extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/skct3.png?alt=media&token=e7724004-67c2-416b-9cc7-80af267e45f3',
        }}
      />
            
        <Text style={styles.headerText, {fontSize: 30, marginBottom: 0, textAlign: 'center', color:'#00008b', fontWeight: 'bold',justifyContent:'flex-start'}}>
          SRI KRISHNA COLLEGE OF TECHNOLOGY</Text>
            </View>
          <View style={styles.container1}>
          <Text style={{ fontSize: 20, marginBottom: 0, textAlign: 'center', color:'#dc143c', fontWeight: 'bold',justifyContent:'flex-start'}}>
          You Can See Skct @
         </Text>
    
          <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={()=> Linking.openURL('https://www.facebook.com/skctofficial/')
                  }
                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="instagram"
                  onPress={()=> Linking.openURL('https://www.instagram.com/skct__official/')
                  }
                />
                <Text style={{ textAlign: 'center' }}>instagram</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={()=> Linking.openURL('https://www.linkedin.com/in/skctofficial/?originalSubdomain=in')
                }
                />
                <Text style={{ textAlign: 'center' }}>linkedin</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="youtube"
                  onPress={()=> Linking.openURL('https://www.youtube.com/channel/UCLtRq0iFEf2BQ2-VECJBUbA')
                  }
                />
                <Text style={{ textAlign: 'center' }}>youtube</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={()=> Linking.openURL('https://twitter.com/skct_official')
                }
                />
                <Text style={{ textAlign: 'center' }}>twitter</Text>
              </View>
            </View>
          </View>
          </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    marginTop:250,
    flex: 1,
    alignItems: 'center',
  },
  header: 
  {
    fontSize :25,
    textAlign:"center",
    margin:10,
  },
  logo: {
    width: 66,
    height: 58,
  }
});
