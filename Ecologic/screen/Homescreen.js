import React,{Component} from 'react';
import { StyleSheet,View,Text,FlatList,Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const post=[
  {
    id:1,
    name:"Menta",
    text:"Plantas Medicinales",
    image:require("../image/post1.jpg")
  },
  {
    id:2,
    name:"Bulbosas o bulbonicas.",
    text:"Plantas Ornamentales",
    image:require("../image/orn4.jpg")
  },
  {
    id:3,
    name:"Zabila",
    text:"Plantas Medicinales",
    image:require("../image/post3.jpg")
  },
  
  {
    id:4,
    name:"Manzanilla",
    text:"Plantas Medicinales",
    image:require("../image/post4.png")
  },
  {
    id:5,
    name:"Zacate de LImos",
    text:"Plantas Medicinales",
    image:require("../image/post5.jpg")
  },
  {
    id:6,
    name:"Planta",
    text:"Plantas Medicinales",
    image:require("../image/post6.jpg")
  },
  {
    id:7,
    name:"Eucalipto",
    text:"Plantas Medicinales",
    image:require("../image/post7.jpg")
  },
  {
    id:8,
    name:"Arboles",
    text:"Plantas Ornamentales",
    image:require("../image/cat3.jpg")
  },
  {
    id:9,
    name:'Acuaticos',
    text:"Plantas Ornamentales",
    image:require("../image/orn1.jpg")
},
{
    id:10,
    name:'Trepadoras',
    text:"Plantas Ornamentales",
    image:require("../image/orn2.jpg")
},
];
export default class Homescreen extends Component {

  
  RenderPost=post=>{
    return(
      <View style={styles.Item}>
       
        <View style={{flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <View>
             <Text style={styles.nombre}>{post.name}</Text>
          </View>
          <Icon name="ios-more" size={28} color="grey" />
      
         </View>
            
        <Image resizeMode="cover" style={styles.Image} source={post.image}  />
        <View>
             <Text style={styles.post}>{post.text}</Text>
          </View>
        </View>
        
      </View>
    );
  }
      render(){
      return (
        <View style={styles.container}>
        <FlatList 
         style={styles.feed}
         data={post}
         renderItem={({item})=>this.RenderPost(item)}
         keyExtractor={item=>item.id}
         showsVerticalScrollIndicator={false}
        />
      </View>
        );
      }
      
}





const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'beige',
  
  },
  feed:{
  marginHorizontal:15,

  }
  ,
  Item:{
    backgroundColor:"#fff",
    borderRadius:5,
   padding:8,
    flexDirection:"row",
    marginVertical:8
  },
  
  nombre:{
    fontSize:18,
    fontWeight:"600",
    color:"silver"
  },

Texto:{
  marginTop:16,
  fontSize:15,
  color:"lightgray"
},
Image:{
    width:undefined,
    height:180,
    borderRadius:8,
    marginVertical:15
}
})
