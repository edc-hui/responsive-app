import { RootDispatch, RootState } from '@/store';

const commonModel = {
  state: {
    cssZoom: 1, // 存储css zoom的值
    cssScale: 1, // 存储css scale的值
    responsiveMethod: 'zoom', // 自适应方式
    scaleHeight: 0,
    scaleWidth: 0,
  },
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  effects: (dispatch: RootDispatch) => ({
    setState(payload, rootState: RootState): void {
      // rootState对象身上可以拿到其他model中的state数据
      // console.log(rootState, '全局的state');
      dispatch.commonModel.update(payload);
    },
  }),
};

export default commonModel;
