import { View, StyleSheet } from 'react-native';
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
  