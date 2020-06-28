import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,Image,FlatList } from 'react-native';

const Img=[
    {
        id:1,
        name:'Acuaticos',
        image:require("../../../image/orn1.jpg")
    },
    {
        id:2,
        name:'Trepadoras',
        image:require("../../../image/orn2.jpg")
    },
    {
        id:3,
        name:'Palmeras',
        image:require("../../../image/orn3.jpg")
    },
    {
        id:4,
        name:'Bulbosas',
        image:require("../../../image/orn4.jpg")
    },
    {
      id:5,
      name:'Arboles',
      image:require("../../../image/cat3.jpg")
  },
  {
    id:6,
    name:'Arbustos',
    image:require("../../../image/cat4.jpg")
}
]

export default class OrnamentalesScreen extends Component {

    RenderImage=Img=>{
        return(
          <View style={{marginTop:15}}> 
          <View style={{marginBottom:2,marginLeft:5}}>
            <Text style={{fontSize:15,color:'gray'}}>{Img.name}</Text>
          </View>
             <Image style={styles.Image} source={Img.image} />
            
          </View>
        );
      }

      render(){
      return (
               <ScrollView showsHorizontalScrollIndicator={false} style={{flex:1,backgroundColor:"#fff"}}>
                   <View style={{alignItems:'center'}}>
                      <Text style={styles.Titulo}>Plantas Ornamentales</Text>
                   </View>
                <View style={{alignContent:'center'}}>
                    <Text style={styles.Texto}>
                    Una planta ornamental es aquella que se cultiva y se comercializa
                     con la finalidad de mostrar su belleza. En este sentido, hay que destacar la 
                     existencia de numerosas plantas que poseen un doble uso, alimentario y ornamental,
                      ejemplo el olivo y el naranjo. En áreas como la agricultura, las plantas ornamentales
                       normalmente son cultivadas al aire libre,
                     en viveros o en un invernadero con calefacción y temperatura controlada.
                    </Text>
                </View>

                <FlatList 
                    
                    data={Img}
                    numColumns={2}
                    renderItem={({item})=>this.RenderImage(item)}
                    keyExtractor={item=>item.id}
                    showsVerticalScrollIndicator={false}
                    />


               </ScrollView>
        );
      }
      
}



const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor:'#fff',
  },
  Titulo:{
     color:'silver',
     fontSize:25,
     fontWeight:'500'

  },
  Texto:{
      fontSize:15,
      color:'gray',
    //  marginVertical:10,
      margin:10
  },
  Image:{
    width:150,
    height:160,
    borderRadius:8,
    margin:15
}
});
