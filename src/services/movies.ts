import axiosInstance from './interciptors';
const loadMovies =
    (pageNumber: number, pageSize: number) =>
        axiosInstance.get(`${"/" + 3 + "/discover/movie?sort_by= cartoon.desc&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&page=" + pageNumber}`, {
        })
const loadGenres =
    () =>
        axiosInstance.get(`/3/genre/movie/list?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea`, {
        })
export { loadGenres, loadMovies };

