import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import {React,useEffect, useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


const All = () => {

  const [myData, setMyData] = useState()
  const navigation = useNavigation();


  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    let response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
    let result = await response.json()
    console.log(result)
    setMyData(result)
  }

  const showData = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          resizeMode='cover'
          style={styles.imageStyle} 
          source={{uri:item.url}}
        />
        <MaterialIcons
        onPress={()=>{
          console.log(item.id)
          navigation.navigate('Favorite',{item:item.url})
        }} 
        name="favorite-border" 
        size={24} color="black" 
        />
      </View>
    );
  };


  return (
    <View >
      <View style={styles.mainContainer}>
        <FlatList
          // keyExtractor={(e) => e.item.id} 
          data={myData}
          renderItem={showData}
        />
      </View>
    </View>
  )
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

export default All
