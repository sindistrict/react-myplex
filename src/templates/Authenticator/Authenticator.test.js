import React from 'react';
import ReactDOM from 'react-dom';
import Authenticator from './Authenticator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authenticator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
