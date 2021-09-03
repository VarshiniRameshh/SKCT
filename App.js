import React from 'react';
import { Navig } from './components/Navig';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import Classroom from "./components/Classroom";
import News from './components/news';
import Home from './components/home';
import Networking from './components/Networking';
import Events from './components/Events';
import Fees from './components/Fees' ;


const Drawer = createDrawerNavigator();

const App=()=>{
return (
        
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props=><Navig {...props}/>}>
           <Drawer.Screen name="Home" component={Home}/>
           <Drawer.Screen name="Events" component={Events}/>
           <Drawer.Screen name="Networking" component={Networking}/>
           <Drawer.Screen name="News" component={News}/>
           <Drawer.Screen name="Classroom" component={Classroom}/>
           <Drawer.Screen name="Fees" component={Fees}/>
          </Drawer.Navigator>
    </NavigationContainer>
      );
}
export default App;