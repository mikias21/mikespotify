import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

// types
import { AlbumTypes } from "../../types";

// styles
import styles from "./styles";

// define the type props
export type AlbumProps = {
  album: AlbumTypes;
};

const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const redirectAlbum = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={redirectAlbum}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
