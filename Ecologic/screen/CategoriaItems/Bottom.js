import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableHighlight, ImageBackground } from 'react-native';

export default class BottomScreen extends Component {
      render(){
      return (
        <View>
               <TouchableHighlight onPress={this.props.pestaña}>
                   <ImageBackground style={styles.image} source={this.props.image}>
                   <View style={styles.rightContainer}>
                     <Text style={styles.title}>{this.props.texto}</Text>
                     <Text style={styles.available}>{this.props.subtexto}</Text>
                     </View>
                   </ImageBackground>
                 
                </TouchableHighlight>
                
        </View>
   
        );
      }
      
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     backgroundColor:'#fff',
     alignItems:"center",
     justifyContent:'center'
    },
    rightContainer:{
      backgroundColor:'rgba(52,52,52,0.5)',
      alignSelf:'stretch',
      paddingTop:30,
      height:150
    },
    title:{
      fontSize:28,
      marginBottom:8,
      textAlign:'center',
      color:"#fff",
      backgroundColor:'rgba(52,52,52,0)'
    },
    available:{
      fontSize:18,
      textAlign:'center',
      color:'#fff',
      backgroundColor:'rgba(52,52,52,0)'
    },
    image:{
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'stretch',
      height:150
    }
    
  });
  