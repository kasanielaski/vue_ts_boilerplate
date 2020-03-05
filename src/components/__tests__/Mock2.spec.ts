import { expect } from 'chai';
import { shallowMount, Wrapper } from '@vue/test-utils';

import Mock2 from '../Mock2.vue';

describe('Mock component', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
        wrapper = shallowMount(Mock2, { propsData: { text: 'test' } });
    });

    it('renders component correctly', () => {
        expect(wrapper.exists()).to.be.true;
    });
});
