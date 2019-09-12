import React from 'react';
import { shallow } from 'enzyme';
import Project from '.';

describe('Project', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Project />);

    expect(wrapper).toMatchSnapshot();
  });
});
