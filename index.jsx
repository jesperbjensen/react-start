import * as React from 'react';
import {render} from 'react-dom';

class TestComponent extends React.Component {

  render() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }

}

render(<TestComponent />, document.getElementById('container'));
