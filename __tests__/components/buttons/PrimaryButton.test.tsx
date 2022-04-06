import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { PrimaryButton } from '../../../src/components';
import { Strings, TestIDs } from '../../../src/constants';
import { mount } from 'enzyme';

describe('PrimaryButton => Snapshots => ', () => {
    test('should render properly without props', () => {
        const tree = renderer.create(<PrimaryButton />).toJSON();
        expect(tree).toMatchSnapshot();
        expect.assertions(1);
    });

    test('should render properly with props', () => {
        const tree = renderer
            .create(<PrimaryButton text={Strings.next} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
        expect.assertions(1);
    });
});

describe('PrimaryButton => Enzyme => ', () => {
    test('should call onPress of prop when item is pressed', () => {
        const props = {
            text: Strings.next,
            onPress: jest.fn()
        };

        const wrapper = mount(<PrimaryButton {...props} />);
        const spy = jest.spyOn(props, 'onPress');

        wrapper
            .findWhere(n => n.prop('testID') === TestIDs.primaryButton)
            .first()
            .props()
            .onPress();

        expect(spy).toHaveBeenCalled();
        expect.assertions(1);
    });
});
