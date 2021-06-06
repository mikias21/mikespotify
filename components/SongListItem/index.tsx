import React, { useContext } from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";

// styles
import styles from "./styles";

// types
import { song } from "../../types";

// icons
import { MaterialIcons } from "@expo/vector-icons";

// context
import { AppContext } from "../../AppContext";

export type songListItemProps = {
  song: song;
};

const SongListItem = (props: songListItemProps) => {
  const { song } = props;
  const { setSongId } = useContext(AppContext);

  const playSong = () => {
    setSongId(song.id);
  };

  return (
    <TouchableWithoutFeedback onPress={playSong}>
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Image source={{ uri: song.imageUri }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
        </View>
        <View style={styles.more}>
          <MaterialIcons name="more-vert" size={30} color="lightgray" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
