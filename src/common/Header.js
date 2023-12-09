import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onclickLeftIcon,
  onclickRightIcon,
}) => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity style={styles.btn}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={[styles.icon, { width: 40, height: 40 }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  Header: {
    width: width,
    height: 70,
    backgroundColor: "#0786DAFD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
