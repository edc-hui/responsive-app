const theme = {
  color: ['#0075ff', '#46bc15', '#f5a623', '#ff772b', '#67c36b', '#9923f5'],
  backgroundColor: 'rgba(0,0,0,0)',
  textStyle: {},
  title: {
    textStyle: {
      color: '#b0babf',
    },
    subtextStyle: {
      color: '#b0babf',
    },
  },
  line: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
  },
  radar: {
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
  },
  bar: {
    itemStyle: {
      barBorderWidth: '0',
      barBorderColor: 'rgba(43,255,230,0.1)',
    },
  },
  pie: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  scatter: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  boxplot: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  parallel: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  sankey: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  funnel: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  gauge: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
  },
  candlestick: {
    itemStyle: {
      color: '#eb5454',
      color0: '#47b262',
      borderColor: '#eb5454',
      borderColor0: '#47b262',
      borderWidth: 1,
    },
  },
  graph: {
    itemStyle: {
      borderWidth: '0',
      borderColor: 'rgba(43,255,230,0.1)',
    },
    lineStyle: {
      width: 1,
      color: '#aaa',
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
    color: ['#0075ff', '#46bc15', '#f5a623', '#ff772b', '#67c36b', '#9923f5'],
    label: {
      color: '#ffffff',
    },
  },
  map: {
    itemStyle: {
      areaColor: '#eee',
      borderColor: '#444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  geo: {
    itemStyle: {
      areaColor: '#eee',
      borderColor: '#444',
      borderWidth: 0.5,
    },
    label: {
      color: '#000',
    },
    emphasis: {
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)',
        borderColor: '#444',
        borderWidth: 1,
      },
      label: {
        color: 'rgb(100,0,0)',
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(43,255,230,0.5)',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#b0babf',
      },
    },
    axisLabel: {
      show: true,
      color: '#b0babb',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#E0E6F1'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisLabel: {
      show: true,
      color: '#b0babb',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['rgba(43,255,230,0.2)'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisLabel: {
      show: true,
      color: '#6E7079',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#E0E6F1'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#6E7079',
      },
    },
    axisLabel: {
      show: true,
      color: '#6E7079',
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: ['#E0E6F1'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      borderColor: '#999',
    },
    emphasis: {
      iconStyle: {
        borderColor: '#f21111',
      },
    },
  },
  legend: {
    textStyle: {
      color: '#ffffff',
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: 'rgba(43,255,230,0.5)',
        width: '1',
      },
      crossStyle: {
        color: 'rgba(43,255,230,0.5)',
        width: '1',
      },
    },
  },
  timeline: {
    lineStyle: {
      color: '#DAE1F5',
      width: 2,
    },
    itemStyle: {
      color: '#A4B1D7',
      borderWidth: 1,
    },
    controlStyle: {
      color: '#A4B1D7',
      borderColor: '#A4B1D7',
      borderWidth: 1,
    },
    checkpointStyle: {
      color: '#316bf3',
      borderColor: 'fff',
    },
    label: {
      color: '#A4B1D7',
    },
    emphasis: {
      itemStyle: {
        color: '#FFF',
      },
      controlStyle: {
        color: '#A4B1D7',
        borderColor: '#A4B1D7',
        borderWidth: 1,
      },
      label: {
        color: '#A4B1D7',
      },
    },
  },
  visualMap: {
    color: ['#bf444c', '#d88273', '#f6efa6'],
  },
  dataZoom: {
    handleSize: 'undefined%',
    textStyle: {},
  },
  markPoint: {
    label: {
      color: '#ffffff',
    },
    emphasis: {
      label: {
        color: '#ffffff',
      },
    },
  },
};

export default theme;
