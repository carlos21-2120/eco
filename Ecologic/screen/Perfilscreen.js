import React,{Component} from 'react';
import { StyleSheet,View,Text,Image,FlatList,ScrollView } from 'react-native';


const Img=[
  {
      id:1,
      image:require("../image/ind1.jpg")
  },
  {
      id:2,
      image:require("../image/ind2.jpg")
  },
  {
      id:3,
      image:require("../image/ind3.jpeg")
  },
  ,
  {
      id:4,
      image:require("../image/post1.jpg")
  },
  {
    id:5,
    image:require("../image/post2.jpg")
}
]


export default class Perfilscreen extends Component {

  RenderImage=Img=>{
    return(
      <View > 
       
         <Image style={styles.Image} source={Img.image} />
        
      </View>
    );
  }

      render(){
      return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View>
       <View style={styles.container}>
           <Image source={require('../image/foto2.jpg')}  style={styles.foto}/>
       </View>

        <View style={{flex:2,backgroundColor:'#fff'}}>
          <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:40}}>
              <View>
              <Text style={styles.nombre}>Carlos Garay</Text>
              
              <Text style={styles.times}>Se unio el 25 de Enero del 2020 </Text>
              
              </View>
            
        
          </View>
      
        </View>
        <View style={{backgroundColor:"#fff",marginTop:10}}>
        <Text style={styles.nombre}>Favoritos</Text>
        <FlatList 
                    
                    data={Img}
                    numColumns={2}
                    renderItem={({item})=>this.RenderImage(item)}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                    />
        </View>
      </View>
      </ScrollView>
        );
      }
      
}




const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
   alignItems:"center",
   justifyContent:'center',
   marginBottom:20
  }
  ,
  foto:{
    width:200,
    height:200,
    borderRadius:50,
    marginRight:16,
    marginTop:40
  },
  nombre:{
    fontSize:25,
    fontWeight:"600",
    color:"limegreen"
  },
  times:{
    fontSize:15,
    color:'gray',
    marginTop:10
  },
  Image:{
    width:150,
    height:160,
    borderRadius:8,
    margin:10
},Album:{
  width:140,
  height:140,
  borderRadius:8,
  margin:10
}
});
