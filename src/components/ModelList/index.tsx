import { appColors } from "@common";
import { CustomList } from "@components";
import { Model } from "@interfaces";
import React, { memo, useCallback, useMemo } from "react";
import { ActivityIndicator, FlatListProps } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { RenderModelItem } from "../../components";
import { styles } from "./styles";
import { EmptyComponent } from "@components";

interface ModelListProps extends FlatListProps<any> {
  models: any[];
  refresh?: boolean;
  onPullToRefresh?: () => void;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  noDataText?: string;
}

const ModelList: React.FC<ModelListProps> = memo(
  ({
    models,
    refresh = false,
    onPullToRefresh,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    noDataText,
    ...rest
  }) => {
    // Memoize the key extractor function to prevent unnecessary re-renders
    const keyExtractor = useMemo(
      () => (item: Model, index: number) => index.toString(),
      []
    );
    const onEndReached = () => {
      console.log('onEndReached',hasNextPage)
      if (hasNextPage) {
        fetchNextPage?.();
      }
    };
    const renderLoader = useCallback(
      () =>
        hasNextPage ? (
          <ActivityIndicator
            size="small"
            animating={isFetchingNextPage}
            color={appColors.appColor}
            style={{ marginBottom: 15 }}
          />
        ) : null,
      [isFetchingNextPage]
    );
    return (
      <>
        <CustomList
          {...rest}
          testID="custom-list"
          style={styles.listStyle}
          contentContainerStyle={styles.modelListContainer}
          data={models}
          renderItem={({ item }) => <RenderModelItem item={item} />}
          keyExtractor={keyExtractor}
          initialNumToRender={7}
          onEndReachedThreshold={0.3}
          refreshControl={
            <RefreshControl
              tintColor={appColors.black}
              colors={[appColors.black]}
              refreshing={refresh}
              onRefresh={onPullToRefresh}
            />
          }
          maxToRenderPerBatch={5}
          onEndReached={onEndReached}
          ListFooterComponent={renderLoader}
          ListEmptyComponent={<EmptyComponent noDataText={noDataText} />}
        />
      </>
    );
  }
);
export { ModelList };
