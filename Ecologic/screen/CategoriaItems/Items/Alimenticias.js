import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,Image,FlatList } from 'react-native';

const Img=[
    {
        id:1,
        name:'Cereales o gramíneas',
        image:require("../../../image/ali1.jpg")
    },
    {
        id:2,
        name:'Leguminosas o legumbres',
        image:require("../../../image/ali2.jpg")
    },
    {
        id:3,
        name:'Frutas',
        image:require("../../../image/ali3.jpg")
    }
    ,
    {
        id:4,
        name:'Hortalizas o verduras',
        image:require("../../../image/ali4.jpg")
    }
]

export default class AlimenticiasScreen extends Component {

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
                      <Text style={styles.Titulo}>Plantas Alimenticias</Text>
                   </View>
                <View style={{alignContent:'center'}}>
                    <Text style={styles.Texto}>
                    Estas plantas son aquellas que el hombre cultiva y explota para 
                    su alimentación o nutrición. El 95% de las plantas alimenticias son 
                    catalogadas como angiospermas y los alimentos derivados de las mismas son muy variados
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
