import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'ice';
import commonModel from '@/models/commonModel';

interface AppStoreModels extends IStoreModels {
  commonModel: typeof commonModel;
}

const appModels: AppStoreModels = {
  commonModel,
};

export default createStore(appModels);

export type RootDispatch = IStoreDispatch<typeof appModels>;
export type RootState = IStoreRootState<typeof appModels>;
