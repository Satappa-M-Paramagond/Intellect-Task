import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FormHeader, PrimaryButton } from '../../components';
import { Colors, Constants, Scale, Strings } from '../../constants';
import RangeSlider from '@react-native-community/slider';

const TOTAL_PHASES = 5;
const TOTAL_LEVELS = 5;

export const HomeController: React.FC = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [angerLevel, setAngerLevel] = useState(0);

    const handleItemPress = useCallback(index => {
        setActivePhase(index);
    }, []);

    const handleNextPress = useCallback(() => {
        setActivePhase(activePhase + 1);
    }, [activePhase]);

    const handleSliderValueChange = useCallback(level => {
        setAngerLevel(level);
    }, []);

    const getBarStyle = (index: number) => {
        switch (index) {
            case 1:
                return styles.firstBar;
            case 2:
                return styles.secondBar;
            case 3:
                return styles.thirdBar;
            case 4:
                return styles.fourthbar;
            default:
                return styles.fifthBar;
        }
    };

    const renderLevel = (index: number, style = {}) => {
        return (
            <View key={index}>
                <TouchableOpacity
                    style={[
                        styles.bar,
                        getBarStyle(index),
                        angerLevel >= index && styles.activeBar,
                        style
                    ]}
                    onPress={() => handleSliderValueChange(index)}
                />

                <View style={[styles.overlay, styles.rightOverlay]} />
                <View style={[styles.overlay, styles.leftOverlay]} />
            </View>
        );
    };

    const renderPhaseTwo = () => {
        return (
            <View style={[styles.subContainer, styles.barsContainer]}>
                {Array(TOTAL_LEVELS)
                    .fill(0)
                    .map((bar, index) => renderLevel(index + 1))}
            </View>
        );
    };

    const renderPhaseOne = () => {
        return (
            <View style={styles.subContainer}>
                <View style={styles.outerCircle}>
                    <View style={styles.borderedCircle} />
                    <View style={styles.mediumCircle}>
                        <View style={styles.innerCircle}>
                            <Text style={styles.levelText}>{angerLevel}</Text>
                        </View>
                    </View>
                </View>

                <RangeSlider
                    style={styles.slider}
                    value={angerLevel}
                    minimumValue={0}
                    maximumValue={5}
                    step={1}
                    thumbTintColor={Colors.cyan}
                    minimumTrackTintColor={Colors.cyan}
                    maximumTrackTintColor={Colors.white}
                    onValueChange={handleSliderValueChange}
                />
            </View>
        );
    };

    const renderContent = () => {
        switch (activePhase) {
            case 0:
                return renderPhaseOne();
            case 1:
                return renderPhaseTwo();
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <FormHeader
                    noOfPhases={TOTAL_PHASES}
                    activePhase={activePhase}
                    onPress={handleItemPress}
                />

                <Text style={styles.headerTitle}>{Strings.pickAngerLevel}</Text>
            </View>

            {renderContent()}

            {/* Show High, Medium and Low status based on selected anger level */}
            {activePhase === 1 && (
                <Text style={styles.levelStatusText}>
                    {Constants.angerLevelStatus[angerLevel]}
                </Text>
            )}

            <PrimaryButton text={Strings.next} onPress={handleNextPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: Scale(15),
        height: '100%',
        justifyContent: 'space-between'
    },
    headerTitle: {
        marginTop: Scale(30),
        color: Colors.white,
        fontSize: Scale(16),
        lineHeight: Scale(24),
        fontWeight: '700',
        textAlign: 'left'
    },
    subContainer: {
        marginTop: Scale(-80),
        alignItems: 'center'
    },
    barsContainer: {
        flexDirection: 'column-reverse'
    },
    outerCircle: {
        height: Scale(280),
        width: Scale(280),
        borderRadius: Scale(140),
        borderStyle: 'dashed',
        borderColor: Colors.darkGrey,
        borderWidth: Scale(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderedCircle: {
        height: Scale(230),
        width: Scale(115),
        position: 'absolute',
        overflow: 'hidden',
        right: Scale(20),
        borderTopEndRadius: Scale(150),
        borderBottomEndRadius: Scale(150),
        backgroundColor: Colors.white
    },
    mediumCircle: {
        height: Scale(220),
        width: Scale(220),
        backgroundColor: Colors.lighterCyan,
        borderRadius: Scale(110),
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        height: Scale(150),
        width: Scale(150),
        backgroundColor: Colors.cyan,
        borderRadius: Scale(75),
        justifyContent: 'center',
        alignItems: 'center'
    },
    levelText: {
        color: Colors.white,
        fontSize: Scale(44),
        fontWeight: 'bold'
    },
    slider: {
        marginTop: Scale(50),
        width: '90%',
        height: Scale(50)
    },
    levelStatusText: {
        color: Colors.white,
        fontSize: Scale(18),
        lineHeight: Scale(24),
        fontWeight: '700',
        textAlign: 'center'
    },
    bar: {
        marginTop: Scale(15),
        height: Scale(44),
        backgroundColor: Colors.darkGrey,
        borderRadius: 10
    },
    firstBar: {
        height: Scale(38),
        width: Scale(35)
    },
    secondBar: {
        width: Scale(80)
    },
    thirdBar: {
        width: Scale(130)
    },
    fourthbar: {
        width: Scale(180)
    },
    fifthBar: {
        width: Scale(230)
    },
    activeBar: {
        backgroundColor: Colors.white
    },
    overlay: {
        position: 'absolute',
        bottom: -2,
        width: 0,
        height: 0,
        backgroundColor: Colors.transparent,
        borderStyle: 'solid',
        borderLeftWidth: Scale(10),
        borderRightWidth: Scale(15),
        borderTopWidth: Scale(30),
        borderLeftColor: Colors.transparent,
        borderRightColor: Colors.darkCyan,
        borderTopColor: Colors.transparent
    },
    leftOverlay: {
        left: 0,
        transform: [{ rotateY: '180deg' }]
    },
    rightOverlay: {
        right: 0
    }
});
