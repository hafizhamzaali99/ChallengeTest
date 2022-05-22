import { StyleSheet, Text, View,FlatList, Image} from "react-native";
import { React, useState, useEffect } from "react";
import Menu from "../Components/Menu";


const Home = () => {
  const [myData, setMyData] = useState([]);

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
      </View>
    );
  };


  return (
    <View >
      <Menu />
      <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>Image Collections</Text>
        <FlatList
          // keyExtractor={(e) => e.item.id} 
          data={myData}
          renderItem={showData}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  imageStyle:{
    height:250,
    width:undefined,
    aspectRatio:1
  },
  mainContainer:{
    marginVertical:20,
    marginHorizontal:20
  },
  imageContainer:{
    marginVertical:20
  },
  textStyle:{
    textAlign:"center",
    fontSize:20
  }
  
});

export default Home;
