jest.unmock('../components/TestComponent');
import {TestComponent} from '../components/TestComponent';
import * as ReactTestUtils from 'react-addons-test-utils';
import * as React from 'react';

let rendere = ReactTestUtils.createRenderer();

var assert = require('assert');

it('Test Component should say hello', function() {
  let result = rendere.render(<TestComponent />);
  assert.equal(result.props.children, "Hello, world!")
});
