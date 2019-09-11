import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('App Component', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    })

    it('initialize the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('when clicking the `add-gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({ gifts: [] });
        })

        it('adds a new gift to `state`', () => {
            // because the key and value is the same ES6 will allow this
            // expect(app.state().gifts).toEqual([{ id }]);
            expect(app.state().gifts).toEqual([{ id: id }]);
        })

        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        })
    })

});