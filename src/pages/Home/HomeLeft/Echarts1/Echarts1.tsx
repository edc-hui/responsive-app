import styles from './Echarts1.module.less';
import YjEcharts from '@/components/YjEcharts/YjEcharts';
import { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';

const Echarts1 = () => {
  const [options, setOptions] = useState<EChartsOption>({});

  useEffect(() => {
    setOptions({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              // fontSize: '40',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    });
  }, []);

  return (
    <div className={styles.Echarts1}>
      <YjEcharts options={options} />
    </div>
  );
};

export default Echarts1;
