import { useEffect, useState } from 'react';
import store from '@/store';

const useCssZoom = () => {
  const [style, setStyle] = useState({});
  const [commonState] = store.useModel('commonModel');

  useEffect(() => {
    if (commonState.responsiveMethod === 'zoom') {
      setStyle({
        zoom: commonState.cssZoom,
      });
    }
    // else if (commonState.responsiveMethod === 'scale') {
    //   setStyle({
    //     transform: `scale(${commonState.cssScale})`,
    //     transformOrigin: 'left top',
    //   });
    // }
    else {
      setStyle({});
    }
  }, [commonState.responsiveMethod, commonState.cssZoom, commonState.cssScale]);

  return style;
};

export default useCssZoom;
