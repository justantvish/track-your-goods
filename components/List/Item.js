import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const Item = ({item}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.bgAlt,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        padding: 8,
        borderRadius: 4,
        marginBottom: 2,
        shadowOffset: 4,
        shadowColor: COLORS.text,
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    text: {
        fontSize: 21,
        color: COLORS.text,
        fontFamily: FONTS.main
    }
});
