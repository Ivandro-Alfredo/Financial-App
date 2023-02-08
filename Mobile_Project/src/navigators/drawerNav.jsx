import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import routes from '../Components/routes/routes';
import Navegacao from './tabNav';
import MenuBuger from '../Components/menu/menuBuer';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuBuger {...props} />}
            screenOptions={{
                headerTintColor: 'white',
                swipeEnabled: false,
                headerShown: false,
                drawerType: 'slide',
                defaultNavigationOptions: {
                    gestureEnabled: false,
                },
                //estilo dos itens dentro do menu
                drawerLabelStyle: {
                    marginLeft: 1,
                },
                //
                headerStyle: {
                    backgroundColor: 'black',
                },
                //drawerHideStatusBarOnOpen: true,
                overlayColor: '#7F7B77',
                drawerStyle: {
                    width: 270,
                },
            }}
        >
            <Drawer.Screen
                name={routes.TAB}
                component={Navegacao}
                options={{ title: ' ' }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
/**  */
