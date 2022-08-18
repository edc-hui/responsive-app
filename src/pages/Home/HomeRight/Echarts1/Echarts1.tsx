import styles from './Echarts1.module.less';
import YjEcharts from '@/components/YjEcharts/YjEcharts';
import { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';

const Echarts1 = () => {
  const [options, setOptions] = useState<EChartsOption>({});

  useEffect(() => {
    setOptions({
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          progress: {
            show: true
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}'
          },
          data: [
            {
              value: 50,
              name: 'SCORE'
            }
          ]
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

export default Echarts1;
