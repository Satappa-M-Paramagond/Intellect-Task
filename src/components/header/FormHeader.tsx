import React from 'react';
import {
    StyleSheet,
    TextStyle,
    View,
    Text,
    ViewStyle,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Colors, Scale, Strings, TestIDs } from '../../constants';
import IonIcons from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('screen');

type Props = {
    noOfPhases?: number;
    activePhase?: number;
    onPress?: (index: number) => void;
};

export const FormHeader: React.FC<Props> = props => {
    const { noOfPhases = 5, activePhase = 0, onPress = () => {} } = props;
    const barWidth = width / noOfPhases - Scale(20);

    const renderBar = (index: number) => {
        return (
            <TouchableOpacity
                key={index}
                style={[
                    styles.bar,
                    { width: barWidth },
                    activePhase >= index && styles.activeBar
                ]}
                testID={`bar${index + 1}`}
                accessibilityLabel={`bar${index + 1}`}
                onPress={() => onPress(index)}
            />
        );
    };

    return (
        <>
            <View style={styles.barContainer}>
                {Array(noOfPhases)
                    .fill(0)
                    .map((bar, index) => renderBar(index))}
            </View>

            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{Strings.rescureSession}</Text>
                <IonIcons name="close" size={Scale(20)} color={Colors.white} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bar: {
        height: Scale(4),
        width: width / 5 - Scale(15),
        backgroundColor: Colors.darkGrey,
        borderRadius: Scale(2)
    },
    activeBar: {
        backgroundColor: Colors.white
    },
    headerTitleContainer: {
        marginTop: Scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: Colors.white,
        fontSize: Scale(13),
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});
