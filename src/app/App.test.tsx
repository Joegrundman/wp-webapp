import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import App from './App';

it('renders an app component', () => {
  const component: ShallowWrapper = shallow(<App/>);
  expect(component).toMatchSnapshot();
});
