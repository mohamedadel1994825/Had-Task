import { Header, Loading, ModelList } from "@components";
import { useMovies, useOnfocusedHomeStatusBar } from "@hooks";
import { translate } from "@language";
import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";

const MoviesScreen: React.FC = () => {
  useOnfocusedHomeStatusBar();
  const noDataText = translate("There are no data right Now!");

  const [refresh, setrefresh] = useState(false);
  const {
    movies,
    fetchNextPage,
    refetch,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useMovies();

  const onPullToRefresh = async () => {
    setrefresh(true);
    await refetch();
    setrefresh(false);
  };
  return (
    <View style={styles.container}>
      <Header title="Genres" />
      {isLoading || refresh ? (
        <Loading />
      ) : (
        <ModelList
          models={movies?.pages}
          {...{
            fetchNextPage,
            hasNextPage,
            onPullToRefresh,
            isFetchingNextPage,
            noDataText,
          }}
        />
      )}
    </View>
  );
};

export { MoviesScreen };
