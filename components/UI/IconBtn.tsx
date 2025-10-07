import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';

type Props = {
    icon: React.ComponentProps<typeof Ionicons>['name'];
    onPress: () => void;
};

const IconBtn: React.FC<Props> = ({ icon, onPress }) => {
    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} width={24} height={24} color={COLORS.text} />
        </Pressable>
    );
};

export default IconBtn;

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    icon: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
