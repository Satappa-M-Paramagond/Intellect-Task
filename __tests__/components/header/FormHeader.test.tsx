import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { FormHeader } from '../../../src/components';
import { mount } from 'enzyme';
import { TestIDs } from '../../../src/constants';

describe('FormHeader => Snapshots => ', () => {
    test('should render properly without props', () => {
        const tree = renderer.create(<FormHeader />).toJSON();
        expect(tree).toMatchSnapshot();
        expect.assertions(1);
    });

    test('should render properly with props', () => {
        const tree = renderer
            .create(<FormHeader activePhase={1} noOfPhases={5} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
        expect.assertions(1);
    });
});

describe('FormHeader => Enzyme => ', () => {
    test.each`
        testID          | expectedIndex
        ${TestIDs.bar1} | ${0}
        ${TestIDs.bar2} | ${1}
        ${TestIDs.bar3} | ${2}
        ${TestIDs.bar4} | ${3}
        ${TestIDs.bar5} | ${4}
    `(
        'should call onPress of prop with index when item is pressed',
        ({ testID, expectedIndex }) => {
            const props = {
                noOfPhases: 5,
                activePhase: 1,
                onPress: jest.fn()
            };

            const wrapper = mount(<FormHeader {...props} />);
            const spy = jest.spyOn(props, 'onPress');

            wrapper
                .findWhere(n => n.prop('testID') === testID)
                .first()
                .props()
                .onPress();

            expect(spy).toHaveBeenCalledWith(expectedIndex);
            expect.assertions(1);
        }
    );
});
