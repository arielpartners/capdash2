import { InfoActions } from './info.actions';
import { IPayloadAction } from '../../core/utils/payload-action.types';

export function infoReducer(state = [], action: IPayloadAction<IInfo[], any>) {
    switch (action.type) {
        case InfoActions.LOAD_SUCCEEDED:
            return action.payload;
        case InfoActions.LOAD_FAILED:
            return action.error;
    }

    return state;
}