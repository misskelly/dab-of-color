import React from 'react';
import { shallow } from 'enzyme';
import { Project } from '.';

describe('Project', () => {
  let wrapper;
  const mockPalettes = [
    {
      name: 'White',
      color_1: '#FFFFFF',
      color_2: '#FFFFFF',
      color_3: '#FFFFFF',
      color_4: '#FFFFFF',
      color_5: '#FFFFFF'
    }
  ];

  it('should match the snapshot', () => {
    wrapper = shallow(
      <Project key="123" name="Hank" id="4" palettes={mockPalettes} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
