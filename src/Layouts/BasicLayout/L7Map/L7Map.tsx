import styles from './L7Map.module.less';
import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { useEffect, useMemo, useRef } from 'react';
import store from '@/store';

const L7Map = () => {
  const scene = useRef<any>();
  const [commonState] = store.useModel('commonModel');

  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    scene.current = new Scene({
      id: 'gaode-map',
      map: new GaodeMap({
        pitch: 35.210526315789465,
        mapStyle: 'dark',
        center: [121.473667, 31.230525],
        zoom: 11,
        token: 'd8c01bf93476d153a0fa875206e2f71a',
      }),
      logoVisible: false,
    });

    scene.current.on('resize', () => {});
  };

  const domStyle = useMemo(() => {
    if (commonState.responsiveMethod === 'scale') {
      return {
        width: commonState.scaleWidth,
        height: commonState.scaleHeight,
        position: 'relative',
      };
    }
    return {};
  }, [commonState.responsiveMethod, commonState.scaleHeight, commonState.scaleWidth]);

  // const domStyle = useMemo(() => {
  //   if (commonState.responsiveMethod === 'scale') {
  //     return {
  //       transform: `scale(${1/commonState.cssScale})`
  //     };
  //   }
  //   return {};
  // }, [commonState.responsiveMethod, commonState.cssScale]);
  console.log(domStyle);

  // return <div style={domStyle} className={styles.L7Map} id="gaode-map" />;
  return <div className={styles.L7Map} id="gaode-map" />;
};

export default L7Map;
