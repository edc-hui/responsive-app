import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styles from './YjEcharts.module.less';
import classNames from 'classnames';
import * as echarts from 'echarts';
import store from '@/store';
import { useDeepCompareEffect } from 'ahooks';
import theme from './theme';

interface YjEchartsProps {
  className?: string;
  style?: React.CSSProperties;
  options: any; // echarts 参数
  onClick?: (e: any) => any; // 鼠标点击事件
  onMouseover?: (e: any) => any; // 鼠标hove事件
  onFinish?: (e: any) => any; // echarts渲染完成事件
  ref?: any;
}

const YjEcharts: React.FC<YjEchartsProps> = React.forwardRef((props, ref) => {
  const { className, style, options, onClick, onMouseover, onFinish } = props;
  const chartsInstance = useRef<any>(); // 储存echarts的实例
  const chartDom = useRef<any>(); // 储存echarts 的DOM
  const [commonState] = store.useModel('commonModel');
  const [echartsRendered, setEchartsRendered] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    getEchartsInstance,
  }));

  /**
   * 获取echarts的实例方法，暴露给父组件用
   */
  const getEchartsInstance = () => {
    return chartsInstance.current;
  };

  useEffect(() => {
    if (commonState.responsiveMethod === 'zoom') {
      if (chartDom.current && echartsRendered) {
        chartDom.current.style.zoom = 1 / commonState.cssZoom;
        chartDom.current.style.transform = `scale(${commonState.cssZoom})`;
      }
    }
    if (commonState.responsiveMethod === 'scale') {
      if (chartDom.current && echartsRendered) {
        chartDom.current.style.zoom = 'unset';
        // chartDom.current.style.transform = `scale(${commonState.cssZoom})`;
      }
    }
  }, [commonState.cssZoom, echartsRendered, commonState.responsiveMethod]);

  useDeepCompareEffect(() => {
    if (!chartsInstance.current) {
      echarts.registerTheme('bigscreenTheme', theme);
      // 初次没有进行echarts的初始化的话
      chartsInstance.current = echarts.init(chartDom.current, 'bigscreenTheme');
    }

    chartsInstance.current.setOption(options);

    registerAllEventListener();
    return () => {
      removeAllEventListener();
    };
  }, [options, echartsRendered]);

  useEffect(() => {
    return () => {
      // 组件卸载时，销毁echarts实例
      if (chartsInstance.current) {
        chartsInstance.current.dispose();
        chartsInstance.current = null;
      }
    };
  }, []);

  /**
   * 注册所有的监听事件
   */
  const registerAllEventListener = () => {
    // 给echarts绑定事件
    chartsInstance.current.on('click', echartsClick);
    chartsInstance.current.on('mouseover', echartsMouseover);
    chartsInstance.current.on('finished', echartsFinished);
  };

  /**
   * 移除所有的监听事件
   */
  const removeAllEventListener = () => {
    // 组件卸载时解除echarts的事件绑定，或者options变化时，先解除echarts的事件绑定，然后再重新进行事件的绑定
    chartsInstance.current?.off('click', echartsClick);
    chartsInstance.current?.off('mouseover', echartsMouseover);
    chartsInstance.current?.off('finished', echartsFinished);
  };

  /**
   * echarts 加载完成事件
   */
  const echartsFinished = (e: any) => {
    if (!echartsRendered) {
      setEchartsRendered(true);
      onFinish && onFinish(e);
    }
  };

  /**
   * echarts的点击事件
   */
  const echartsClick = (e: any) => {
    onClick && onClick(e);
  };

  /**
   * echarts的mouseover事件
   */
  const echartsMouseover = (e: any) => {
    onMouseover && onMouseover(e);
  };

  const domStyle = useMemo(() => {
    if (commonState.responsiveMethod === 'zoom') {
      return {
        ...style,
        transformOrigin: 'left top',
      };
    }
    return {
      ...style,
    };
  }, [commonState.responsiveMethod]);

  return <div className={classNames(styles.YjEcharts, className)} style={domStyle} ref={chartDom} />;
});

export default YjEcharts;
