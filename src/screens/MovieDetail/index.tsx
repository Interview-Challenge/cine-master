import React, {useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '@/navigation/types.ts';
import SCREEN_NAMES from '@/navigation/screens.ts';
import useMovieDetail from '@/screens/MovieDetail/hooks/useMovieDetail.ts';
import get from 'lodash/get';
import CFlex from '@/components/layout/CFlex.tsx';
import CSpacing from '@/assets/styles/spacing.ts';
import CRadius from '@/assets/styles/radius.ts';
import CText from '@/components/common/CText';
import * as SolidIcons from 'react-native-heroicons/solid';
import Colors from '@/assets/colors.ts';
import Localization from '@/utils/localization.ts';
import LinearGradient from 'react-native-linear-gradient';
import HomeMovieBlock from '@/screens/Home/components/Home.MovieBlock.tsx';
import MovieDetailHeader from '@/screens/MovieDetail/components/MovieDetail.Header.tsx';

const MovieDetail = () => {
  const {width} = useWindowDimensions();
  const {
    params: {movieId},
  } = useRoute<RouteProp<RootStackParamList, SCREEN_NAMES.MOVIE_DETAIL>>();

  const {movie, similarMovies} = useMovieDetail({movieId: movieId});

  const scrollY = useRef(new Animated.Value(0)).current;

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['transparent', Colors.primaryBackgroundColor],
    extrapolate: 'clamp',
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false}, // because backgroundColor cannot be animated natively
  );
  return movie ? (
    <>
      <ImageBackground
        source={{uri: get(movie, 'backdropImage', '')}}
        imageStyle={{
          width: width,
          minHeight: (width * 9) / 16,
          resizeMode: 'contain',
        }}
      />
      <LinearGradient
        locations={[0.1, 0.35]}
        colors={['transparent', Colors.primaryBackgroundColor]}
        style={{flex: 1}}>
        <MovieDetailHeader
          title={get(movie, 'title', '')}
          backgroundColor={backgroundColor}
          titleOpacity={titleOpacity}
        />
        <CFlex scrollable onScroll={onScroll}>
          <View style={{flexDirection: 'row', paddingHorizontal: CSpacing.m}}>
            <Image
              source={{uri: get(movie, 'posterImage', '')}}
              style={{
                overflow: 'hidden',
                width: 120,
                height: 160,
                resizeMode: 'cover',
                borderRadius: CRadius.l,
              }}
            />
            <View style={{flex: 1, paddingLeft: CSpacing.m}}>
              <CText.H5>
                {get(movie, 'title', '')} ({get(movie, 'releaseYear', '')})
              </CText.H5>
              <CText.SupportRegular color={Colors.neutral_4}>
                {get(movie, 'tagline', '')}
              </CText.SupportRegular>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.rating}>
                  <SolidIcons.StarIcon color={Colors.warning_4} size={12} />
                  <CText.SupportRegular>
                    {get(movie, 'rating', '')}
                  </CText.SupportRegular>
                </View>
              </View>
              <CText.SupportMedium color={Colors.neutral_5}>
                {Localization.t('MOVIE.RUNTIME', {
                  time: get(movie, 'runtime', ''),
                })}
              </CText.SupportMedium>
            </View>
          </View>
          <View
            style={{
              paddingTop: CSpacing.m,
              paddingHorizontal: CSpacing.m,
              backgroundColor: Colors.primaryBackgroundColor,
            }}>
            <View
              style={{
                borderLeftWidth: 2,
                borderColor: Colors.primaryIconColor,
                paddingLeft: CSpacing.s,
              }}>
              <CText.BodyMedium>
                {Localization.t('MOVIE.OVERVIEW')}
              </CText.BodyMedium>
            </View>
            <View style={{marginTop: CSpacing.m}}>
              <CText.BodyRegular color={Colors.neutral_5}>
                {get(movie, 'overview', '')}
              </CText.BodyRegular>
            </View>
          </View>
          <View
            style={{
              paddingVertical: CSpacing.m,
              backgroundColor: Colors.primaryBackgroundColor,
            }}>
            <HomeMovieBlock
              title={Localization.t('MOVIE.SIMILAR_LIST_TITLE')}
              blockData={similarMovies}
            />
          </View>
        </CFlex>
      </LinearGradient>
    </>
  ) : null;
};

const styles = StyleSheet.create({
  rating: {flexDirection: 'row', alignItems: 'center'},
});

export default MovieDetail;
