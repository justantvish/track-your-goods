import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts as useRubik, Rubik_400Regular } from '@expo-google-fonts/rubik';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

export default function App() {

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
            
            <StatusBar style="dark" />
        </View>
    );
}

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
