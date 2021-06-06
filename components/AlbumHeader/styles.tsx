import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  creator: {
    flexDirection: "row",
    margin: 10,
  },
  creatorText: {
    color: "lightgray",
    fontSize: 15,
    margin: 5,
  },
  likes: {
    color: "lightgray",
    fontSize: 15,
    margin: 5,
  },
  button: {
    backgroundColor: "#1DD05D",
    height: 50,
    width: 180,
    borderRadius: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
});

export default styles;
