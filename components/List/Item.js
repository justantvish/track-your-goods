import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import IconBtn from '../UI/IconBtn';
import ModalDrop from '../UI/ModalDrop';

const Item = ({item}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            {/* <IconBtn icon="ellipsis-vertical"/> */}
            <ModalDrop/>
        </View>
    );
}

export default Item;

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.add,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        padding: 8,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: COLORS.text,
        marginBottom: 2,
        height: 50,
    },
    text: {
        fontSize: 21,
        color: COLORS.text,
        fontFamily: FONTS.main
    }
});
