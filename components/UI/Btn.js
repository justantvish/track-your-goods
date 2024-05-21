import {Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';


const Btn = (icon) => {
    const handlePress = () => {
        console.log('pressed')
    };

    return (
        <Pressable style={styles.btn} onPress={handlePress}>
            <Ionicons style={styles.icon} name={icon} width={18} height={18} color={COLORS.text}/>
        </Pressable>
    );
};

export default Btn;

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        fontSize: 18,
    }
});
