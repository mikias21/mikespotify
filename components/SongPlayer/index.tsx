import React, { useEffect, useState, useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Sound } from "expo-av/build/Audio/Sound";
import { API, graphqlOperation } from "aws-amplify";

// import context
import { AppContext } from "../../AppContext";

// operation
import { getSong } from "../../src/graphql/queries";

// styles
import styles from "./styles";

// icons
import { AntDesign, FontAwesome } from "@expo/vector-icons";

// const song = {
//   imageUri:
//     "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
//   title: "Mikias Berhanu",
//   artist: "Mikias Berhanu",
//   uri: "https://songforspotify.s3.amazonaws.com/18+I+Feel+It+Coming+(feat.+Daft+Punk.mp3",
// };

const SongPlayer = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const [song, setSong] = useState(null);

  const { songId } = useContext(AppContext);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  // function to calcualte the song progress
  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  // play song
  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
      await sound.stopAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      {
        uri: song.uri,
      },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  // play music on load
  useEffect(() => {
    if (song) {
      playCurrentSong();
    }
  }, [song]);

  // play pause function
  const playPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  // fetch a song
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await API.graphql(
          graphqlOperation(getSong, { id: songId })
        );
        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    };

    fetchSong();
  }, [songId]);

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]}></View>
      <View style={styles.mainRow}>
        <Image source={{ uri: song?.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{song?.title}</Text>
            <Text style={styles.artist}>{song?.artist}</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="hearto" size={24} color="white" />
            <TouchableOpacity onPress={playPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongPlayer;
