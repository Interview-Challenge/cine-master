import axiosInstance from '@/apis/axiosInstance.ts';
import ENDPOINTS from '@/apis/endpoints.ts';

export const getPopularMovies = () =>
  axiosInstance.get(ENDPOINTS.MOVIES.RECOMMENDATION.GET_POPULAR, {
    params: {
      language: 'en-US',
      page: 1,
    },
  });
