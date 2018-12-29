import { shallow } from 'enzyme';
import React from 'react';
import Loader from './Loader';

describe('<Loader />', () => {
  
  it('should render as expected when active', () => {
    expect(shallow(<Loader active={true}/>)).toMatchSnapshot();
  });

  it('should render as expected when inactive', () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });

});
