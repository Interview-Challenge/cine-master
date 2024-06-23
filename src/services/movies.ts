import axiosInstance from '@/apis/axiosInstance.ts';
import ENDPOINTS from '@/apis/endpoints.ts';

export const getMovieDetail = (movieId: number) =>
  axiosInstance.get(
    ENDPOINTS.MOVIES.DETAIL.GET_DETAIL.replace(
      '{movie_id}',
      movieId.toString(),
    ),
  );

export const getSimilarMovies = (movieId: number) =>
  axiosInstance.get(
    ENDPOINTS.MOVIES.DETAIL.GET_SIMILAR.replace(
      '{movie_id}',
      movieId.toString(),
    ),
  );
