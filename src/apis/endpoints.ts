import {API_VERSION} from '@env';

const getVersion = (path: string) => `${API_VERSION}/${path}`;

const ENDPOINTS = {
  AUTH: {
    GET_AUTHENTICATION: getVersion('authentication'),
  },
  CONFIGURATION: {
    IMAGE: getVersion('configuration'),
  },
  MOVIES: {
    RECOMMENDATION: {
      GET_POPULAR: getVersion('movie/popular'),
      GET_TOP_RATED: getVersion('movie/top_rated'),
    },
  },
};

export default ENDPOINTS;
