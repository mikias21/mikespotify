import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

// component
import SongPlayer from "./components/SongPlayer";

// context
import { AppContext } from "./AppContext";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<String | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{ songId, setSongId: (id: String) => setSongId(id) }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <SongPlayer />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
