import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import AppImageInput from "./app/components/AppImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <AppImageInput />
    // <Screen>
    //   <Button title="Select Image" onPress={selectImage} />
    //   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    // </Screen>
  );
}
