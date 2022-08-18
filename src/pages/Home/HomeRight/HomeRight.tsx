import styles from './HomeRight.module.less';
import Echarts1 from '@/pages/Home/HomeRight/Echarts1/Echarts1';
import Echarts2 from '@/pages/Home/HomeRight/Echarts2/Echarts2';
import Echarts3 from '@/pages/Home/HomeRight/Echarts3/Echarts3';
import BigscreenCard from '@/components/BigscreenCard/BigscreenCard';
import useCssZoom from '@/hooks/useCssZoom';

const HomeRight = () => {
  const domStyle = useCssZoom();
  return (
    <div className={styles.HomeRight} style={domStyle}>
      <BigscreenCard title="详情一">
        <Echarts1 />
      </BigscreenCard>
      <BigscreenCard title="详情二" style={{ marginTop: 10 }}>
        <Echarts2 />
      </BigscreenCard>
      <BigscreenCard title="详情三" style={{ marginTop: 10 }}>
        <Echarts3 />
      </BigscreenCard>
    </div>
  );
};

export default HomeRight;
