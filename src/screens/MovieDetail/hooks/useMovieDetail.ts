import {useEffect, useState} from 'react';
import {getMovieDetail, getSimilarMovies} from '@/services/movies.ts';
import get from 'lodash/get';
import {useSelector} from 'react-redux';
import {getDateFromString} from '@/utils/dateUtil.ts';
import {MovieCardData, MovieDetailData} from '@/types/data.ts';
import {formatMovieCardDataList} from '@/utils/movieUtil.ts';

const useMovieDetail = ({movieId}: {movieId: number}) => {
  const config = useSelector(state =>
    get(state, ['appConfiguration', 'imageConfig', 'mobile'], null),
  );
  const [movie, setMovie] = useState<MovieDetailData>();
  const [similarMovies, setSimilarMovies] = useState<MovieCardData[]>([]);

  const formatMovie = (data: any) => {
    const backdropUrl = get(config, 'backdropUrl', '');
    const posterUrl = get(config, 'posterUrl', '');
    const backdropPath = get(data, 'backdrop_path', '');
    const posterPath = get(data, 'poster_path', '');
    const title = get(data, 'title', '');
    const rating = get(data, 'vote_average', 0);
    const runtime = get(data, 'runtime', 0);
    const tagline = get(data, 'tagline', 0);
    const releaseDate = get(data, 'release_date', '');
    const overview = get(data, 'overview', '');

    return {
      backdropImage: `${backdropUrl}${backdropPath}`,
      posterImage: `${posterUrl}${posterPath}`,
      title: title,
      rating: rating,
      runtime: runtime,
      tagline: tagline,
      releaseYear: getDateFromString(releaseDate).year,
      overview: overview,
    };
  };

  const getData = () => {
    getMovieDetail(movieId)
      .then(response => {
        const dataMovie = get(response, 'data', null);
        console.log('Getting detail of movie id', movieId);
        setMovie(formatMovie(dataMovie));
      })
      .catch(error => {
        console.log('error', JSON.stringify(error));
      })
      .finally(() => {});
  };

  const getRelatedMovies = () => {
    getSimilarMovies(movieId)
      .then(response => {
        const dataMovie = get(response, 'data.results', null);
        setSimilarMovies(formatMovieCardDataList(dataMovie, config));
      })
      .finally(() => {});
  };

  useEffect(() => {
    getData();
    getRelatedMovies();
  }, [movieId]);

  return {movie, similarMovies};
};

export default useMovieDetail;
