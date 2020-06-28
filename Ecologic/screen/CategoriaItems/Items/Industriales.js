import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,Image,FlatList } from 'react-native';

const Img=[
    {
        id:1,
        image:require("../../../image/ind1.jpg")
    },
    {
        id:2,
        image:require("../../../image/ind2.jpg")
    },
    {
        id:3,
        image:require("../../../image/ind3.jpeg")
    }
]

export default class IndustrialScreen extends Component {

    RenderImage=Img=>{
        return(
          <View > 
           
             <Image style={styles.Image} source={Img.image} />
            
          </View>
        );
      }

      render(){
      return (
               <ScrollView showsHorizontalScrollIndicator={false} style={{flex:1,backgroundColor:"#fff"}}>
                   <View style={{alignItems:'center'}}>
                      <Text style={styles.Titulo}>Plantas Industriales</Text>
                   </View>
                <View style={{alignContent:'center'}}>
                    <Text style={styles.Texto}>
                    Las plantas industriales son aquellas que proporcionan materia prima 
                    que es utilizada en la industria. Por ejemplo en el caso del coco y la gran variedad que
                     existen de palmeras, se llegan a obtener frutos, grasas y fibras. 
                     De igual manera, de la caña de azúcar se obtiene un jugo muy azucarado del
                     cual se obtiene el azúcar e incluso el etanol, tan demandado en la industria automotriz.
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
