import { loadGenres, loadMovies } from "@services";
import { useInfiniteQuery, useQuery } from "react-query";
import reactotron from "reactotron-react-native";

const useMovies = () => {
    const {
        data,
        fetchNextPage,
        refetch,
        isFetched,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isFetching,

    } = useInfiniteQuery(
        `movies`,
        ({ pageParam = 1 }) => loadMovies(pageParam, 7),
        {
            getNextPageParam: (lastPage, pages) => {
                console.log('lastPage movies===',lastPage.data)
                const { page, total_pages } = lastPage.data;
                // reactotron.log('lastPage?.pageInfo?.page', lastPage.data.data);
                if (page < total_pages) {
                    // reactotron.log(
                    //   "lastPage?.pageInfo?.page + 1",
                    //   lastPage.data.pageInfo.page + 1
                    // );
                    return page + 1;
                }
                return undefined;
            },
            select: (data) => ({
                ...data,
                pages: data.pages.flatMap((page) => {
                    reactotron.log('page1===', page.data.results)
                    return page.data.results
                }),
            }),
            cacheTime: 0,
            // staleTime: 0,
        }
    );
    return {
        movies: data,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        refetch,
        isFetched,
        isLoading,
        isFetching
    };
};
const useGenres = () => {
    const {
        data,
        refetch,
        isFetched,
        isLoading,
        isFetching,
    } = useQuery(
        `genres`,
        () => loadGenres()
    );
    return {
        genres: data,
        refetch,
        isFetched,
        isLoading,
        isFetching
    };
};
export { useGenres, useMovies };

