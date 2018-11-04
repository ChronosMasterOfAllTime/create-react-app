import React from 'react';
import App from '../../main/App/App';
import { shallow } from 'enzyme';

describe('Jest Example App', () => {
  const SPIN_CLASS = 'App-logo--spin';

  it('renders without crashing', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('.App').length).toBeGreaterThan(0);
  });

  it('toggles image class when click handler invoked', () => {
    const renderedComponent = shallow(<App />);
    const selector = '.App-header img';

    renderedComponent.find(selector).simulate('click');

    expect(renderedComponent.find(selector).hasClass(SPIN_CLASS)).toBe(false);

    renderedComponent.find(selector).simulate('click');

    expect(renderedComponent.find(selector).hasClass(SPIN_CLASS)).toBe(true);
  });
});
