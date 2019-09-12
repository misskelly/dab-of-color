import React from 'react';
import { shallow } from 'enzyme';
import Rainbow from '.';

describe('Rainbow', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Rainbow />);

    expect(wrapper).toMatchSnapshot();
  });
});
