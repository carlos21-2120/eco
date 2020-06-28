import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView } from 'react-native';
import BottomScreen from './CategoriaItems/Bottom'

export default class Categoriascreen extends Component {
      render(){
      return (
               <ScrollView showsHorizontalScrollIndicator={false} style={{flex:1}}>
                 <BottomScreen pestaña={()=>this.props.navigation.navigate('Medicinales')}  texto='Plantas medicinales' subtexto='Clasificacion de Plantas' image={require('../image/med1.jpg')} />
                 <BottomScreen pestaña={()=>this.props.navigation.navigate('Alimenticias')}  texto='Plantas alimenticias' subtexto='Clasificacion de Plantas' image={require('../image/post2.jpg')} />
                 <BottomScreen  pestaña={()=>this.props.navigation.navigate('Ornamentales')}   texto='Plantas ornamentales.' subtexto='Clasificacion de Plantas' image={require('../image/cat3.jpg')} />
                 <BottomScreen pestaña={()=>this.props.navigation.navigate('Industrial')} texto='Plantas industriales' subtexto='Clasificacion de Plantas' image={require('../image/cat4.jpg')} />
                
               </ScrollView>
        );
      }
      
}



const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
  }
});
