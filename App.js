import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import { NavigationContainer } from '@react-navigation/native';
import ListsScreen from './screens/ListsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/colors';
import { useFonts as useOswald, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { useFonts as useRubik, Rubik_400Regular } from '@expo-google-fonts/rubik';
import IconBtn from './components/UI/IconBtn';
import Dropdown from './components/UI/Dropdown';
import { Text } from 'react-native';

const Tabs = createBottomTabNavigator();

export default function App() {
    let [oswaldLoaded, oswaldfontError] = useOswald({
        Oswald_700Bold,
    });

    let [rubikLoaded, rubikError] = useRubik({
        Rubik_400Regular,
    });
    
    if (!oswaldLoaded && !oswaldfontError) {
        return null;
    }

    if (!rubikLoaded && !rubikError) {
        return null;
    }

    NavigationBar.setBackgroundColorAsync('#ffffff00');
    NavigationBar.setBehaviorAsync('inset-swipe');
    NavigationBar.setPositionAsync('absolute');

    return (
        <>
            <StatusBar style="dark" backgroundColor={COLORS.add} />
            <NavigationContainer>
                <Tabs.Navigator
                    screenOptions={{
                        headerTitleStyle: {
                            fontSize: 28,
                            fontFamily: 'Oswald_700Bold',
                            letterSpacing: .5,
                        },
                        headerStyle: {
                            backgroundColor: COLORS.add,
                            // borderBottomWidth: 2,
                            // borderBottomColor: COLORS.text,
                            shadowColor: COLORS.text,
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                        },
                        tabBarStyle: {
                            backgroundColor: COLORS.add,
                            shadowColor: COLORS.text,
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
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
                            tabBarIcon: ({color}) => <Ionicons name="list" color={color} size={32} />,
                            headerRight: () => (
                                <Dropdown text={null} icon='menu'><Text>asdfasdf</Text></Dropdown>
                            ),
                        }}
                    />

                    <Tabs.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: ({color}) => <Ionicons name="person-outline" color={color} size={24} />
                        }}
                    />
                </Tabs.Navigator>
            </NavigationContainer>
        </>
    );
}