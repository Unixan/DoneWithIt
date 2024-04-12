import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {loading && <ActivityIndicator />}
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: defaultStyles.color.light,
  },
});

export default ListingsScreen;
