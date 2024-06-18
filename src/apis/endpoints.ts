import {API_VERSION} from '@env';

const getVersion = (path: string) => `${API_VERSION}/${path}`;

const ENDPOINTS = {
  CONFIGURATION: {
    IMAGE: getVersion('configuration'),
  },
  MOVIES: {
    RECOMMENDATION: {
      GET_POPULAR: getVersion('movie/popular'),
    },
  },
};

export default ENDPOINTS;
