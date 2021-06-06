import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// styles
import styles from "./styles";

// types
import { AlbumDetail } from "../../types";

// props
export type AlbumHeaderProps = {
  album: AlbumDetail;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creator}>
        <Text style={styles.creatorText}>{album.creator}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
