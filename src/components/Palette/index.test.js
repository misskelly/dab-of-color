import React from 'react';
import { shallow } from 'enzyme';
import Palette from '.';

describe('Palette', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Palette />);

    expect(wrapper).toMatchSnapshot();
  });
});
