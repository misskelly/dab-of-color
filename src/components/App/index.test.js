import React from 'react';
import { shallow } from 'enzyme'
import App from '.';


describe('App', () => {
  let wrapper

  it('should match the snapshot', () => {
    wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})