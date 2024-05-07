import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import ListsScreen from './screens/ListsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/colors';

const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Tabs.Navigator>
                    <Tabs.Screen
                        name="Lists"
                        component={ListsScreen}
                        options={{
                            tabBarInactiveTintColor: COLORS.main,
                            tabBarIcon: ({focused}) => <Ionicons name="home" color={focused ? COLORS.main : COLORS.add} size={24} />
                        }}
                    />

                    <Tabs.Screen
                        name="Profile"
                        component={ProfileScreen}
                    />
                </Tabs.Navigator>
            </NavigationContainer>
        </>
    );
}