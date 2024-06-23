import {MovieCardData} from '@/types/data.ts';
import get from 'lodash/get';
import {getDateFromString} from '@/utils/dateUtil.ts';

export const formatMovieCardDataList = (
  list: any,
  config: any,
): MovieCardData[] => {
  return list.map((item: any) => ({
    title: get(item, 'title', ''),
    rating: get(item, 'vote_average', 0),
    thumbnail: `${get(config, 'posterUrl', '')}${get(item, 'poster_path', '')}`,
    year: getDateFromString(get(item, 'release_date', '')).year,
    id: get(item, 'id', 0),
  }));
};
