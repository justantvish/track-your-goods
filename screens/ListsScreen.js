import { View, Text, StyleSheet } from 'react-native';
import { useFonts as useRubik, Rubik_400Regular } from '@expo-google-fonts/rubik';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { COLORS } from '../constants/colors';
import List from '../components/List/List';

const ListsScreen = () => {

    return (
        <View style={styles.container}>
            <List />
        </View>
    );
};

export default ListsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.bg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: COLORS.text,
      fontSize: 24,
      fontFamily: 'Oswald_700Bold'
    }
});
  