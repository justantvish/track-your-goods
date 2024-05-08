import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import { NavigationContainer } from '@react-navigation/native';
import ListsScreen from './screens/ListsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/colors';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';

const Tabs = createBottomTabNavigator();

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Oswald_700Bold,
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }

    NavigationBar.setBackgroundColorAsync('#ffffff00');
    NavigationBar.setBehaviorAsync('inset-swipe');
    NavigationBar.setPositionAsync('absolute');

    return (
        <>
            <StatusBar style="dark" backgroundColor={COLORS.bgAlt} />
            <NavigationContainer>
                <Tabs.Navigator
                    screenOptions={{
                        headerTitleStyle: {
                            fontSize: 28,
                            fontFamily: 'Oswald_700Bold',
                            letterSpacing: .5,
                        },
                        headerStyle: {
                            backgroundColor: COLORS.bgAlt,
                            // borderBottomWidth: 2,
                            // borderBottomColor: COLORS.text,
                            shadowColor: COLORS.text,
                            shadowOpacity: 0.5,
                            shadowRadius: 5
                        },
                        tabBarStyle: {
                            backgroundColor: COLORS.bgAlt,
                            shadowColor: COLORS.text,
                            shadowOpacity: 0.5,
                            shadowRadius: 5
                        },
                        headerTintColor: COLORS.text,
                        tabBarActiveTintColor: COLORS.main,
                        tabBarInactiveTintColor: COLORS.text,
                        tabBarLabelStyle: {
                            fontSize: 15,
                            letterSpacing: .09
                        }
                    }}
                >
                    <Tabs.Screen
                        name="Lists"
                        component={ListsScreen}
                        options={{
                            tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={24} />
                        }}
                    />

                    <Tabs.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({color}) => <Ionicons name="settings-outline" color={color} size={24} />
                        }}
                    />
                </Tabs.Navigator>
            </NavigationContainer>
        </>
    );
}