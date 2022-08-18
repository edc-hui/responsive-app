import styles from './Echarts2.module.less';
import YjEcharts from '@/components/YjEcharts/YjEcharts';
import { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';

const Echarts2 = () => {
  const [options, setOptions] = useState<EChartsOption>({});

  useEffect(() => {
    setOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    });
  }, []);

  return (
    <div className={styles.Echarts1}>
      <YjEcharts options={options} />
    </div>
  );
};

export default Echarts2;
