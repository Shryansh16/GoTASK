
import { Dimensions } from 'react-native';
import colors from '../utility/colors';

export const size = Dimensions.get('screen').width

export function boxShadow(
    color,
    offset = { height: 4, width: 4 },
    radius = 10,
    opacity = 1,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}

export function boxShadowLess(
    color,
    offset = { height: 1, width: 1 },
    radius = 3,
    opacity = 0.2,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}


export function boxShadowTwo(
    color = colors.appBlack,
    offset = { height: 1, width: 0 },
    radius = 2,
    opacity = 0.2,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}
export function boxShadowZero(
    color,
    offset = { height: 0, width: 0 },
    radius = 0,
    opacity = 0,
) {
    return {
        shadowColor: color,
        shadowOffset: offset,
        shadowOpacity: opacity,
        shadowRadius: radius,
        elevation: radius,
    };
}