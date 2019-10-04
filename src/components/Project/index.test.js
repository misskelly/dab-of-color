import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../utils/mockData';
import { Project } from '.';

describe('Project', () => {
  let wrapper;
  const mockPalettes = mock.palettes;
  it('should match the snapshot', () => {
    wrapper = shallow(
      <Project key="123" name="Hank" id="4" palettes={mockPalettes} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
