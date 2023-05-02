import { Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { spacing } from './spacing';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
const moderateScaleVertical = (size, factor = 0.5) => size + (verticalScale(size) - size) * factor;
const textScale = percent => { return RFValue(percent) };

export { scale, verticalScale, textScale, moderateScale, moderateScaleVertical, width, height };