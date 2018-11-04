import React from 'react';
import App from '../../main/App/App';
import { shallow } from 'enzyme';

describe('Jest Example App', () => {
  const SPIN_CLASS = 'App-logo--spin';

  jest.mock('../../main/App/neko.gif', () => 'neko.gif');

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<App />);
  });

  afterEach(() => {
    renderedComponent = null;
  });

  it('renders without crashing', () => {
    expect(renderedComponent.find('.App').length).toBeGreaterThan(0);
  });

  it('toggles image class when click handler invoked', () => {
    const selector = '.App-header img';

    renderedComponent.find(selector).simulate('click');

    expect(renderedComponent.find(selector).hasClass(SPIN_CLASS)).toBe(false);

    renderedComponent.find(selector).simulate('click');

    expect(renderedComponent.find(selector).hasClass(SPIN_CLASS)).toBe(true);
  });

  it('changes image when click handler invoked', () => {
    const selector = '.App-header img';

    expect(renderedComponent.find(selector).prop('src').name).toBe('logo');

    renderedComponent.find(selector).simulate('click');

    expect(renderedComponent.find(selector).prop('src')).toBe('neko.gif');
  });
});
