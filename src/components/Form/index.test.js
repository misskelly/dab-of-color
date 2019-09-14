import React from 'react';
import { shallow } from 'enzyme';
import UniForm from '.';

describe('UniForm', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<UniForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
