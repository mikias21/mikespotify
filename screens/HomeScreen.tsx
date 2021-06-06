import * as React from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../src/graphql/queries";

// components
import AlbumCategory from "../components/AlbumCategory";

// data
import albumCategory from "../data/albumCategories";

export default function TabOneScreen() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchAlbumCatgories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumCatgories();
  }, []);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        keyExtractor={(item) => {
          item.id;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
