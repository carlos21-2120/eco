import React,{Component} from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/Login';
import SingUpScreen from './screen/SingUp'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './screen/Homescreen';
import Icon from '@expo/vector-icons/Ionicons';
import Categoriascreen from './screen/Categoriascreen'
import IndustrialScreen from './screen/CategoriaItems/Items/Industriales';
import OrnamentalesScreen from './screen/CategoriaItems/Items/Ornamentales';
import MedicinalesScreen from './screen/CategoriaItems/Items/Medicinales';
import AlimenticiasScreen from './screen/CategoriaItems/Items/Alimenticias';
import Perfilscreen from './screen/Perfilscreen';

import * as firebase from 'firebase';

export const firebaseconfig={
  apiKey: "AIzaSyA0E8WxJPCUDgryf_sutrqvOOIwVMYdEU4",
  authDomain: "reactnative-e7f53.firebaseapp.com",
  databaseURL: "https://reactnative-e7f53.firebaseio.com",
  projectId: "reactnative-e7f53",
  storageBucket:""
};



firebase.initializeApp(firebaseconfig);

const Stack = createStackNavigator();
const BottomStack=createStackNavigator();
const BottomTabs=createBottomTabNavigator();

 function Bottom(){
  return(
    <BottomTabs.Navigator tabBarOptions={
    {
      activeTintColor:"#fff",
      inactiveTintColor:"lightgreen",
      style:{
        backgroundColor:'limegreen'
      }
    }
    } >
    <BottomTabs.Screen name="First" options={{
      tabBarLabel:'Home',
      tabBarIcon:({color,size})=>(
        <Icon 
        name="md-home"
        color={color} size={35}
      />
      )
    }} >
      {
        ()=>(
          <BottomStack.Navigator screenOptions>
            <BottomStack.Screen name="Feed" component={Homescreen} options={{
            headerLeft:()=>{
              null
            }
            }} />
          </BottomStack.Navigator>
        )
      }
    </BottomTabs.Screen>
    <BottomTabs.Screen name="Second" options={{
      tabBarLabel:'Categorias',
      tabBarIcon:({color,size})=>(
        <Icon 
        name="md-book"
        color={color} size={35}
      />
      )
    }}>
      {
        ()=>(
          <BottomStack.Navigator screenOptions>
            <BottomStack.Screen name="Categorias" component={Categoriascreen} options={{
            header:()=>{
              null
            }
            }} />
               <BottomStack.Screen name="Industrial" component={IndustrialScreen} />
               <BottomStack.Screen name="Ornamentales" component={OrnamentalesScreen} />
               <BottomStack.Screen name="Medicinales" component={MedicinalesScreen} />
               <BottomStack.Screen name="Alimenticias" component={AlimenticiasScreen} />
          </BottomStack.Navigator>
          
        )
      }
    </BottomTabs.Screen>
    <BottomTabs.Screen name="Perfil" options={{
      tabBarLabel:'Perfil',
      tabBarIcon:({color,size})=>(
        <Icon 
        name="md-person"
        color={color} size={35}
      />
      )
    }} >
      {
        ()=>(
          <BottomStack.Navigator screenOptions>
            <BottomStack.Screen name="Perfil" component={Perfilscreen} options={{
            headerLeft:()=>{
              null
            }
            }} />
          </BottomStack.Navigator>
        )
      }
    </BottomTabs.Screen>
</BottomTabs.Navigator>
  );
}

export default class Contenedor extends Component {
      render(){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} >
            <Stack.Screen  name="Login" component={LoginScreen} />
            <Stack.Screen name="SingUp" component={SingUpScreen} />
            <Stack.Screen name="Bottom Tabs" component={Bottom} />
          </Stack.Navigator>
           
         
           
        </NavigationContainer>
        );
      }
      
}




const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
   alignItems:"center",
   justifyContent:'center'
  }
  
});
