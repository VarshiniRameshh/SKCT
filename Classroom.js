import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Linking, Image} from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Classroom = () => (
  <SafeAreaView style={styles.container}>
     <View style={styles.container}>
    <Image
        style={styles.logo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/skct3.png?alt=media&token=e7724004-67c2-416b-9cc7-80af267e45f3',
        }}
      />
    <Text style={styles.headerText, {fontSize: 20, marginBottom: 0, textAlign: 'center', color:'#00008b', fontWeight: 'bold',justifyContent:'flex-start'}}>
          SRI KRISHNA COLLEGE OF TECHNOLOGY</Text>
          </View>
          <View>
       <Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center', color:'#000000', fontWeight:'bold'}}>
      Academic Year 2021-2022
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="ODD SEM"
          onPress={()=> Linking.openURL('http://skct.edu.in/googleclassroom/pages/google_classroom_two.php?keyss=ODD')}/>
        <Button
          title="EVEN SEM"
          onPress={()=> Linking.openURL('http://skct.edu.in/googleclassroom/pages/google_classroom_two.php?keyss=EVEN')}/>
      </View>
      <Separator />
      <Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center', color:'#000000', fontWeight:'bold'}}>
      Academic Year 2020-2021
      </Text>
      <View style={styles.fixToText}>
      <Button
          title="ODD SEM"
          onPress={()=> Linking.openURL('http://skct.edu.in/googleclassroom/pages/google_classroom.php?keyss=ODD')}/>
        <Button
          title="EVEN SEM"
          onPress={()=> Linking.openURL('http://skct.edu.in/googleclassroom/pages/google_classroom.php?keyss=EVEN')}/>
      </View>
      <Text style={{ fontSize: 9, marginBottom: 300, textAlign: 'center', color:'#000000', fontWeight:'bold', width: '100%', height: 5,justifyContent: 'flex-end'}}>
      </Text>
      <Text style={{color:'#808080',fontSize: 10}}>Developers: Varshini Ramesh & Surya.V </Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 40,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: 
  {
    fontSize :25,
    textAlign:"center",
    margin:20,

  },
  logo: {
    width: 69,
    height: 60,
    paddingTop: 50,
    alignItems: 'center'
  }
});

export default Classroom;