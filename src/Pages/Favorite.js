import { StyleSheet, Text, View,Image } from 'react-native'
import {React,useState} from 'react'
import {  } from 'react/cjs/react.production.min';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-web';


const Favorite = (props) => {
  const Route = useRoute()
  // const [data, setData] = useState(Route.params.item)
  let arr = [Route.params.item]
  const [myPic, setMyPic] = useState([arr])

  // setMyPic(combData)
  console.log(myPic)

  // setMyPic(arr1)
  return (
        <View style={styles.imageContainer}>
        
        <Image
          resizeMode='cover'
          style={styles.imageStyle} 
          source={{uri:Route.params.item}}
        />  
          {/* <MaterialIcons
          onPress={()=>{
            console.log(item.id)
            navigation.navigate('Favorite',item.id,item.url)
          }} 
          name="favorite-border" 
          size={24} color="black" 
          /> */}
        </View>
      );
}

const styles = StyleSheet.create({
  imageStyle:{
    height:250,
    width:undefined,
    aspectRatio:1
  },
  imageContainer:{
    marginVertical:10,
    marginHorizontal:10
  }
})

export default Favorite
