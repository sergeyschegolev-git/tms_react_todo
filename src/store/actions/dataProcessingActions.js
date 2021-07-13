import { createAction } from 'redux-actions';

const prefix = 'data_processing:';

export const toggleDataProcessing = createAction(`${prefix}toggle`);
