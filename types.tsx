/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Primium: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumTypes = {
  id: String;
  imageUri: String;
  artistsHeadline: String;
};

export type AlbumDetail = {
  id: String;
  name: String;
  creator: String;
  numberOfLikes: Number;
  imageUri: String;
  artistsHeadline: String;
  songs: undefined;
};

export type song = {
  id: String;
  imageUri: String;
  artist: String;
  title: String;
};
