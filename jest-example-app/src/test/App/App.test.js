import React from 'react';
import App from '../../main/App/App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Jest Example App', () => {
  it('renders without crashing', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('.App')).toBeGreaterThan(0);
  });
});
