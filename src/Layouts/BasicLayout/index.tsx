import L7Map from '@/Layouts/BasicLayout/L7Map/L7Map';
import Header from '@/Layouts/BasicLayout/Header/Header';
import store from '@/store';
import { useEffect, useMemo, useRef } from 'react';

export default function BasicLayout({ children }) {
  const [commonState, commonDispatchers] = store.useModel('commonModel');
  const domRef = useRef<any>();
  useEffect(() => {
    if (commonState.responsiveMethod === 'zoom') {
      // 消除scale的配置
      const wrapperDOM: HTMLDivElement = document.querySelector('#ice-container')!;
      wrapperDOM.style.transform = 'unset';
      wrapperDOM.style.transformOrigin = 'unset';
      wrapperDOM.style.margin = 'unset';
      wrapperDOM.style.width = '100%';
      wrapperDOM.style.height = '100%';
      calculateCssZoom();
      window.addEventListener('resize', calculateCssZoom);
    }
    if (commonState.responsiveMethod === 'scale') {
      calculateCssScale();
      window.addEventListener('resize', calculateCssScale);
    }
    return () => {
      window.removeEventListener('resize', calculateCssZoom);
      window.removeEventListener('resize', calculateCssScale);
    };
  }, [commonState.responsiveMethod]);

  /**
   * 计算CSS zoom
   */
  const calculateCssZoom = () => {
    const viewportHeight: number = document.documentElement.clientHeight || document.body.clientHeight; // 实际浏览器视口的高度
    const viewportWidth: number = document.documentElement.clientWidth || document.body.clientWidth; // 实际浏览器视口的宽度
    const designHeight: number = 1080; // 设计稿的高度
    const designWidth: number = 1920; // 设计稿的宽度
    const zoomValueHeight = viewportHeight / designHeight; // 高度计算出来的zoom值
    const zoomValueWidth = viewportWidth / designWidth; // 宽度计算出来的zoom值
    const targetZoom = zoomValueWidth > zoomValueHeight ? zoomValueHeight : zoomValueWidth; // 比较大小选择最终实际需要的zoom值
    // 拿到最终的zoom值之后，可以选择直接应用到body标签身上，或者将zoom值储存在store里面，分发到需要被适配的组件里面使用，笔者这里采用的是储存store向下分发的方案。（根据实际情况选择）
    commonDispatchers.setState({
      cssZoom: targetZoom,
    });
  };

  /**
   * 计算CSS scale
   */
  const calculateCssScale = () => {
    const uiWidth = 1920;
    const uiHeight = 1080;
    const wrapperDOM: HTMLDivElement = document.querySelector('#ice-container')!;
    wrapperDOM.style.width = `${uiWidth}px`;
    wrapperDOM.style.height = `${uiHeight}px`;
    const viewportHeight: number = document.documentElement.clientHeight || document.body.clientHeight; // 实际浏览器视口的高度
    const viewportWidth: number = document.documentElement.clientWidth || document.body.clientWidth; // 实际浏览器视口的宽度
    const scale =
      viewportWidth / viewportHeight < uiWidth / uiHeight ? viewportWidth / uiWidth : viewportHeight / uiHeight;
    wrapperDOM.style.transform = `scale(${scale})`;
    wrapperDOM.style.transformOrigin = 'left top';
    if (viewportWidth / viewportHeight < uiWidth / uiHeight) {
      const margin = viewportHeight - wrapperDOM.getBoundingClientRect().height;
      wrapperDOM.style.margin = `${margin / 2}px 0`;
    } else {
      const margin = viewportWidth - wrapperDOM.getBoundingClientRect().width;
      wrapperDOM.style.margin = `0 ${margin / 2}px`;
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
      className="BasicLayout"
    >
      <L7Map />
      <Header />
      {children}
    </div>
  );
}
