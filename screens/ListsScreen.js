import { View, Text, StyleSheet } from 'react-native';
import { useFonts as useRubik, Rubik_400Regular } from '@expo-google-fonts/rubik';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { COLORS } from '../constants/colors';

const ListsScreen = () => {
    let [rubikLoaded, rubikError] = useRubik({
        Rubik_400Regular,
    });

    let [fontsLoaded, fontError] = useFonts({
        Oswald_700Bold,
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    
    if (!rubikLoaded && !rubikError) {
        return null;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Testing app props</Text>
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
  