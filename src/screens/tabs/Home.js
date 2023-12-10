import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Touchable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../common/Header";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
const Home = ({}) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <View style={StyleSheet.container}>
      <Header
        leftIcon={require("../../images/menu1.png")}
        rightIcon={require("../../images/cart.png")}
        title={"Groceru App"}
        onclickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
      <FlatList
        data={products}
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity
              style={styles.productItem}
              // activeOpacity={1}
              onPress={() => {
                navigation.navigate("ProductDetail", { data: item });
              }}
            >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View>
                <Text style={styles.name}>
                  {item?.title.length > 25
                    ? item?.title.substring(0, 25) + "..."
                    : item?.title}
                </Text>
                <Text style={styles.desc}>
                  {item?.description.length > 30
                    ? item?.description.substring(0, 30) + "..."
                    : item?.description}
                </Text>
                <Text style={styles.price}>{"$ " + item?.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get("window").width,
    height: 100,
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: "green",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 5,
  },
});
