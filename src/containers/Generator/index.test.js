import React from 'react';
import { shallow } from 'enzyme';
import Generator from '.';

describe('Generator', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Generator />);

    expect(wrapper).toMatchSnapshot();
  });
});
