import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,Image,FlatList } from 'react-native';

const Img=[
    {
        id:1,
        name:'Manzanilla',
        image:require("../../../image/med1.jpg")
    },
    {
        id:2,
        name:'Menta',
        image:require("../../../image/post1.jpg")
    },
    {
        id:3,
        name:'Zabila',
        image:require("../../../image/post3.jpg")
    },
    {
        id:4,
        name:'Zacate de Limon',
        image:require("../../../image/post5.jpg")
    },
    {
        id:5,
        name:'Eucalipto',
        image:require("../../../image/post7.jpg")
    }
]

export default class MedicinalesScreen extends Component {

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
                      <Text style={styles.Titulo}>Plantas Medicinales</Text>
                   </View>
                <View style={{alignContent:'center'}}>
                    <Text style={styles.Texto}>
                                
                    La planta medicinal es un recurso cuya parte o extractos son 
                    empleados como drogas o remedios en el tratamiento a curación de alguna afección. 
                    La parte de la planta que es utilizada como medicina se conoce con la denominación de 
                    “droga vegetal” y puede ser suministrada de diversas formas, 
                    ejemplo, cápsulas, comprimidos, cremas, infusiones, jarabes, tinturas, ungüento, etc.
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
