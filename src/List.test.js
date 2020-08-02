import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders the UI as expected', () => {
//   const tree = renderer
//     .create(<List
//       key={}
//       header={}
//       cards={}
//     />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
