import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../common/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Wishlist from "./tabs/Wishlist";
import Notification from "./tabs/Notification";
import User from "./tabs/User";
const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require("../images/menu1.png")}
        rightIcon={require("../images/cart.png")}
        title={"Groceru App"}
        onclickLeftIcon={() => {
          navigation.openDrawer();
        }}
      /> */}
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Wishlist />
      ) : selectedTab === 3 ? (
        <Notification />
      ) : (
        <User />
      )}

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={
              selectedTab === 0
                ? require("../images/homeFill.png")
                : require("../images/home.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={
              selectedTab === 1
                ? require("../images/searchFill.png")
                : require("../images/search.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(2)}
        >
          <Image
            source={
              selectedTab === 2
                ? require("../images/loveFill.png")
                : require("../images/love.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={
              selectedTab === 3
                ? require("../images/notificationFill.png")
                : require("../images/notification.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={
              selectedTab === 4
                ? require("../images/userFill.png")
                : require("../images/user.png")
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
