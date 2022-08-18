import styles from './HomeLeft.module.less';
import BigscreenCard from '@/components/BigscreenCard/BigscreenCard';
import Echarts1 from '@/pages/Home/HomeLeft/Echarts1/Echarts1';
import Echarts2 from '@/pages/Home/HomeLeft/Echarts2/Echarts2';
import Echarts3 from '@/pages/Home/HomeLeft/Echarts3/Echarts3';
import useCssZoom from '@/hooks/useCssZoom';

const HomeLeft = () => {
  const domStyle = useCssZoom();
  return (
    <div className={styles.HomeLeft} style={domStyle}>
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

export default HomeLeft;
