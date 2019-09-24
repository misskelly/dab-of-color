/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../utils/mockData';
import Rainbow from '.';

describe('Rainbow', () => {
  let wrapper;
  let mockPalette;
  beforeEach(() => {
    mockPalette = mock.palettes[0];
  });
  it('should match the snapshot', () => {
    wrapper = shallow(<Rainbow colors={mockPalette} key="123" />);

    expect(wrapper).toMatchSnapshot();
  });
});
