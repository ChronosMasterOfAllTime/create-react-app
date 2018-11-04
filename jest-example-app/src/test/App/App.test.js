import React from 'react';
import App from '../../main/App/App';
import { shallow } from 'enzyme';

describe('Jest Example App', () => {
  it('renders without crashing', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('.App').length).toBeGreaterThan(0);
  });
});
