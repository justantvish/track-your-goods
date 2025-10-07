import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import { useState } from 'react';

type Props = {
    icon: React.ComponentProps<typeof Ionicons>['name'];
    text: string;
    children: React.ReactNode | Iterable<React.ReactNode>;
};

const Dropdown: React.FC<Props> = ({ icon, text, children }) => {
    const [dropOpened, setDropOpened] = useState(false);

    const handleDropdown = () => {
        setDropOpened((curState) => (curState = !curState));
    };

    return (
        <View style={styles.dropdown}>
            <Pressable style={styles.btn} onPress={handleDropdown}>
                {text && <Text style={styles.text}>{text}</Text>}
                {icon && <Ionicons name={icon} width={24} height={24} />}
            </Pressable>
            <View style={[styles.drop, dropOpened && styles.dropOpened]}>{children}</View>
        </View>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        position: 'relative',
    },
    drop: {
        position: 'absolute',
        top: '100%',
        right: 0,
        borderWidth: 1,
        borderColor: COLORS.text,
        backgroundColor: COLORS.bgAlt,
        padding: 8,
        borderRadius: 8,
        opacity: 0,
    },
    dropOpened: {
        opacity: 1,
    },
    btn: {
        width: 24,
        height: 24,
        backgroundColor: COLORS.text,
    },
    text: {},
    icon: {},
});
