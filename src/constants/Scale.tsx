import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

// Sample device width to calculate scaling
const guidelineBaseWidth = 375;

export const Scale = (size: number) =>
    size + ((width / guidelineBaseWidth) * size - size) * 0.5;
