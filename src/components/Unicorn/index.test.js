/* eslint-disable import/no-named-as-default */
import React from 'react';
import { shallow } from 'enzyme';
import Unicorn from '.';

describe('Unicorn', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Unicorn />);

    expect(wrapper).toMatchSnapshot();
  });
});

