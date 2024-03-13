import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppImageInput from "./AppImageInput";

function AppImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollPosition = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollPosition}
        horizontal
        onContentSizeChange={() => scrollPosition.current.scrollToEnd()}
      >
        <View style={styles.contianer}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <AppImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default AppImageInputList;
