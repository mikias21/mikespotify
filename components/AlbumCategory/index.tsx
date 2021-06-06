import React from "react";
import { Text, View, FlatList } from "react-native";

// types
import { AlbumTypes } from "../../types";

// styles
import styles from "./styles";

// components
import Album from "../Album";

export type AlbumCategoryProps = {
  title: String;
  albums: [AlbumTypes];
};

const AlbumCategory = (props: AlbumCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <Album album={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default AlbumCategory;
