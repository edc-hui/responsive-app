import styles from './Echarts3.module.less';
import YjEcharts from '@/components/YjEcharts/YjEcharts';
import { useEffect, useState } from 'react';
import { EChartsOption } from 'echarts';

const Echarts3 = () => {
  const [options, setOptions] = useState<EChartsOption>({});

  useEffect(() => {
    setOptions({
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 },
        ],
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget',
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending',
            },
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

export default Echarts3;
