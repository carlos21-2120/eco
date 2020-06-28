import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity,ImageBackground,StatusBar,Image } from 'react-native';
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';


export default class SingUpScreen extends Component {
  state={
    correo:"",
    contrasena:"",
    error:null
}

funcionLogeo=()=>{
    const{correo,contrasena}=this.state;
 
    firebase.auth()
    .createUserWithEmailAndPassword(correo,contrasena)
      .then(this.props.navigation.navigate('Bottom Tabs'))
      .catch(error=>this.setState({error:error.message}));
    }
 
      render(){
      return (
        <ImageBackground style={{flex:1,justifyContent:'center'}} source={require('../image/fondo2.jpg')}>
 
 <View>
     
 <StatusBar borStyle="ligth-content"></StatusBar>
                          <Image style={{position:"absolute",marginTop:-10,marginRight:-200,height:550,width:500}} source={require('../image/header.png')} />

 <TouchableOpacity 
  style={{marginTop:-150}}
 onPress={()=>this.props.navigation.goBack()} >
                    <Ionicons
                    style={{marginTop:75,paddingLeft: 20}}
                    name="md-arrow-back"
                    size={30}
                    />
                  </TouchableOpacity>
<Text style={styles.TextFondo}>
                    {`Ingrese los datos`}
                </Text>
                <View style={styles.error}>
                        {this.state.error&&<Text style={styles.error}>{this.state.error}</Text>}
                 </View>
                <View style={styles.form}>

<View>
    <Text style={styles.TextoInput}>Correo</Text>
    <TextInput style={styles.Texto}
    value={this.state.email} autoCapitalize="none"
    onChangeText={correo=>this.setState({correo})} ></TextInput>
</View>

<View style={{marginTop:32}}>
    <Text style={styles.TextoInput}>contraseña</Text>
    <TextInput style={styles.Texto}
    value={this.state.Password}
    secureTextEntry autoCapitalize="none"
    onChangeText={contrasena=>this.setState({contrasena})}
    ></TextInput>
</View>
</View>

<TouchableOpacity style={styles.buton} onPress={this.funcionLogeo} >
                         <Text style={{color:"#fff",fontWeight:"500"}}>Sing up</Text>
                  </TouchableOpacity>
             
                  <TouchableOpacity style={{alignSelf:"center", marginTop:32}}
                  onPress={()=>this.props.navigation.goBack()}
                  >
                      <Text style={{color:"black",fontSize:15}}>
                             New to Social?<Text style={{fontWeight:"600",color:"darkgreen"}}>Login</Text>
                      </Text>
                  </TouchableOpacity>
         
</View>
        </ImageBackground>
       )
    }
}






const styles = StyleSheet.create({
    container: {
      flex:1
   
    }
    ,
    TextFondo:{
        marginTop:20,
        fontSize:30,
        fontWeight:"700",
        textAlign:"center",
        marginBottom:20
    }
    ,
    errorMessage:{
        height:72,
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:33
    }
  
    ,
    form:{
        marginBottom:48,
        marginHorizontal:39
    }
    ,
    TextoInput:{
        color:"darkgreen",
        fontSize:12,
        textTransform:"uppercase"
    },
    Texto:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:16,
        color:"black"
    },
    buton:{
        marginHorizontal:30,
      
       backgroundColor:"darkgreen",
        borderRadius:2,
        height:45,
        alignItems:"center",
        justifyContent:"center"
    },
    buton2:{
        marginTop:15,
        marginHorizontal:30,
      
       backgroundColor:"red",
        borderRadius:2,
        height:45,
        alignItems:"center",
        justifyContent:"center"
    },
    Image:{
      height:80,
      width:70
    }
    ,
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
       }
  });
  