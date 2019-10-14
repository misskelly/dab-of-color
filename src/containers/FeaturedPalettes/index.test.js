import React from 'react';
import { shallow } from 'enzyme';
import { FeaturedPalettes } from '.';

describe('FeaturedPalettes', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<FeaturedPalettes />);

    expect(wrapper).toMatchSnapshot();
  });
});
