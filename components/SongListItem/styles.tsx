import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  artist: {
    color: "lightgray",
    fontSize: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 15,
  },
  more: {
    marginRight: 15,
    marginBottom: 10,
  },
});

export default styles;
