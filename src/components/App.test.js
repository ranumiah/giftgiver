import React from 'react';
import { shallow, } from 'enzyme';
import App from './App'

const app = shallow(<App />);

describe('App Commonent', () => {

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    })

    it('initialize the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

});