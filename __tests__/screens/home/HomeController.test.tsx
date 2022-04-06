import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeController } from '../../../src/screens';

describe('HomeController => Snapshots => ', () => {
    test('should render properly', () => {
        const tree = renderer.create(<HomeController />).toJSON();
        expect(tree).toMatchSnapshot();
        expect.assertions(1);
    });
});
