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

    it('adds a new gift to `state` when clicking the `add gift` button', () => {
        app.find('.btn-add').simulate('click');

        expect(app.state().gifts).toEqual([{ id: 1 }]);
    })

});