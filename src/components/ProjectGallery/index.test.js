/* eslint-disable import/no-named-as-default */
import React from 'react';
import { shallow } from 'enzyme';
import ProjectGallery from '.';

describe('ProjectGallery', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<ProjectGallery />);

    expect(wrapper).toMatchSnapshot();
  });
});
