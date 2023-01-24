import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  carContainer: {
    height: "100%",
    width: "100%",
  },
  titles: {
    alignItems: "center",
    marginTop: "30%",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTile: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  buttonContainer:{
    position:'absolute',
    bottom:50,
    width:'100%'
  }
});
export default styles;