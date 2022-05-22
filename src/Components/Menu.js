import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("All")}
      >
        <Text style={styles.textStyle}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("Favorite")}
      >
        <Text style={styles.textStyle}>Favorite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  iconStyle: {
    width: "30%",
    aspectRatio: 1,
  },
  textStyle:{
      fontSize:20
  }
});

export default Menu;
