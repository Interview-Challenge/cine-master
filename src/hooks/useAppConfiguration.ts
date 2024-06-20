import {useEffect} from 'react';
import {getConfiguration} from '@/services/imageConfiguration.ts';
import get from 'lodash/get';
import {updateConfig} from '@/stores/appConfigurationSlice.ts';
import {useDispatch} from 'react-redux';

const useAppConfiguration = () => {
  const dispatch = useDispatch();
  const getConfig = () => {
    getConfiguration()
      .then(response => {
        const data = get(response, 'data', null);
        const imageConfig = get(data, 'images', null);
        dispatch(updateConfig({base_url: get(imageConfig, 'base_url', '')}));
      })
      .catch(() => {});
  };

  useEffect(() => {
    getConfig();
  }, []);
};

export default useAppConfiguration;
