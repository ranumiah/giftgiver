import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


/*
This is where I want to be however I don't know how to configure ESlint to understand the global config
 *
*/

// import React from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';;

// // React 16 Enzyme adapter
// Enzyme.configure({ adapter: new Adapter() });

// // Make Enzyme functions available in all test files without importing
// global.React = React;
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;