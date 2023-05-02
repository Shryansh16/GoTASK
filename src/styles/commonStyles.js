
import { StyleSheet } from "react-native";
import colors from "../utility/colors";
import { spacing } from "./spacing";

const commonStyle = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    seprator: {
        height: spacing.HEIGHT_2,
        backgroundColor: colors.grey200,
        marginVertical: spacing.MARGIN_16
    },
})

export default commonStyle