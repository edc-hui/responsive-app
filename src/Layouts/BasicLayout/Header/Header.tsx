import styles from './Header.module.less';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import store from '@/store';
import { Select } from 'antd';
import useCssZoom from '@/hooks/useCssZoom';

const { Option } = Select;
const Header = () => {
  const [commonState, commonDispactcher] = store.useModel('commonModel');
  const [time, setTime] = useState('');
  const domRef = useRef<any>();
  const domStyle = useCssZoom();
  useEffect(() => {
    refreshTime();
    const timer = setInterval(() => {
      refreshTime();
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);
  const refreshTime = () => {
    setTime(moment().format('YYYY-MM-DD HH:mm:ss'));
  };

  const onChange = (value) => {
    commonDispactcher.setState({
      responsiveMethod: value,
    });
  };

  return (
    <div ref={domRef} className={styles.Header} style={domStyle}>
      <div className={styles.name}>自适应的大屏可视化DEMO</div>
      <div className={styles.time}>
        <Select value={commonState.responsiveMethod} onChange={onChange} getPopupContainer={() => domRef.current}>
        {/*<Select value={commonState.responsiveMethod} onChange={onChange}>*/}
          <Option value="zoom">zoom</Option>
          <Option value="scale">scale</Option>
        </Select>
        <span style={{ marginLeft: 10 }}>{time}</span>
      </div>
    </div>
  );
};

export default Header;
