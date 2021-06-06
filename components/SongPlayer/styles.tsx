import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 79,
    justifyContent: "space-between",
    backgroundColor: "#131313",
    borderBottomWidth: 2,
    borderColor: "black",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
  },
  artist: {
    color: "lightgray",
    fontSize: 16,
    margin: 5,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    margin: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    justifyContent: "space-around",
  },
  progress: {
    height: 2,
    backgroundColor: "#bcbcbc",
  },
  mainRow: {
    flexDirection: "row",
  },
});

export default styles;
