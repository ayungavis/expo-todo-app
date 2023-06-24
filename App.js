import * as Font from "expo-font";
import { useEffect, useState } from "react";

import { Main } from "./src/Main";
import { fonts } from "./src/theme/fonts";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(fonts);
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return <Main />;
}
