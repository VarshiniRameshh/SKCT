import * as React from 'react';
import { Button, DataTable } from 'react-native-paper';
import {  StyleSheet,Text,View,Linking, Image} from "react-native";



const optionsPerPage = [2, 3, 4];

const Events = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/skct-298c8.appspot.com/o/skct3.png?alt=media&token=e7724004-67c2-416b-9cc7-80af267e45f3',
        }}
      />
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center', color:'#00008b', fontWeight:'bold'}}>
            SRI KRISHNA COLLEGE OF TECHNOLOGY
          </Text>
    <DataTable>
      <DataTable.Header>
      
        <DataTable.Title>S.no</DataTable.Title>
        <DataTable.Title numeric>Event Name</DataTable.Title>
        <DataTable.Title numeric>Date</DataTable.Title>
        
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>1</DataTable.Cell>
        <DataTable.Cell numeric>Turning Dreams into Business</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-23</DataTable.Cell>
      </DataTable.Row>

      
      <DataTable.Row>
        <DataTable.Cell>2</DataTable.Cell>
        <DataTable.Cell numeric><Text> A Webinar on "Pervasive Computing Technologies-Startup"binar </Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>2021-08-14</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>3</DataTable.Cell>
        <DataTable.Cell numeric>Start-up Bootcamp on 4G Mobile Communication</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-14</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>4</DataTable.Cell>
        <DataTable.Cell numeric>A startup bootcamp programme on "Identity and access Management"</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-07</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>5</DataTable.Cell>
        <DataTable.Cell numeric>Web Seminar on Startup opportunities in Tech Industry</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-7</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>6</DataTable.Cell>
        <DataTable.Cell numeric>Interactive Webinar session on Strategies for Developing Enterpreneuri</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-7</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>7</DataTable.Cell>
        <DataTable.Cell numeric>A startup Bootcamp programme on "Forecasting Through Industries"</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-7</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>8</DataTable.Cell>
        <DataTable.Cell numeric>Club Activities of Sensors Interfacing with Raspberry PI</DataTable.Cell>
        <DataTable.Cell numeric>2021-08-6</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>9</DataTable.Cell>
        <DataTable.Cell numeric>Startup Bootcamp on"Semiconductor Carrer Prospects and Oppurtunities"</DataTable.Cell>
        <DataTable.Cell numeric>2021-07-31</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>10</DataTable.Cell>
        <DataTable.Cell numeric>Webinar on IELTS -A Gateway to Study in Abroad</DataTable.Cell>
        <DataTable.Cell numeric>2021-07-31</DataTable.Cell>
      </DataTable.Row>
      
      

      
      <Button style={{color:'blue'}} onPress={()=> Linking.openURL('http://www.skct.edu.in/#/allevents') }>For More</Button>
    </DataTable>
    </View>
  );
}

export default Events;
const styles = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center'
  },

  logo:{
      width: 66,
      height: 58,
    }
    
    
 
  })