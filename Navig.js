import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Avatar, Title, Caption,Drawer,} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import {FontAwesome} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {SimpleLineIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export function Navig(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://pbs.twimg.com/profile_images/1192649745329618944/aGOAw4lX_400x400.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>SKCT</Title>
                                <Caption style={styles.caption}></Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                  <FontAwesome name="home" size={size} color={'#ff4500'}/>
                              )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                  <FontAwesome5 name="rupee-sign" size={size} color={'#006400'}/>
                              )}
                            label="Online Payment "
                            onPress={() => {props.navigation.navigate('Fees')}}
                        />
                        <DrawerItem
                             icon={({color, size}) => (
                              <SimpleLineIcons name="event" size={size} color={'#dc143c'}/>
                          )}
                            label="Upcoming Events"
                            onPress={() => {props.navigation.navigate('Events')}}
                        />
                        <DrawerItem
                             icon={({color, size}) => (
                              <Entypo name="facebook" size={size} color={'#00008b'}/>
                          )}
                            label="Social Media"
                            onPress={() => {props.navigation.navigate('Networking')}}
                        />
                        <DrawerItem
                             icon={({color, size}) => (
                              <Entypo name="news" size={size} color={'#e9967a'}/>
                          )}
                            label="News"
                            onPress={() => {props.navigation.navigate('News')}}
                        />
                        <DrawerItem
                             icon={({color, size}) => (
                              <MaterialCommunityIcons name="google-classroom" size={size} color={'#008000'}/>
                          )}
                            label="Google Classroom"
                            onPress={() => {props.navigation.navigate('Classroom')}}
                        />
                         
                    </Drawer.Section>
                  
                </View>
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:'#00008b'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
