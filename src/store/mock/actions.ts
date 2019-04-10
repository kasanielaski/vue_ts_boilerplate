import { ActionTree } from 'vuex';

import { IRootState, IMockState } from '@/types';

export const actions: ActionTree<IMockState, IRootState> = {
    mockAction({ commit }, payload) {
        commit('mockAction', payload);
    }
};
