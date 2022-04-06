import React from 'react';
import {
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    Text,
    ViewStyle
} from 'react-native';
import { Colors, Scale, TestIDs } from '../../constants';

type Props = {
    text: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    onPress?: () => void;
};

export const PrimaryButton: React.FC<Props> = props => {
    const { text = '', style, textStyle, onPress = () => {} } = props;

    return (
        <TouchableOpacity
            style={[styles.buttonContainer, style]}
            onPress={onPress}
            testID={TestIDs.primaryButton}
            accessibilityLabel={TestIDs.primaryButton}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.white,
        borderRadius: Scale(22),
        height: Scale(44),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.darkCyan,
        fontSize: Scale(15),
        fontWeight: 'bold'
    }
});
