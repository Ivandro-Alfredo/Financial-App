import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './../screens/splash/splash';
import DrawerNavigator from './drawerNav';
import Home from './../screens/home/home';
import Receita from './../screens/adicionar/addReceita';
import Despesa from './../screens/adicionar/addDespesa';
import CategoriaReceita from '../screens/categoria/catReceita';
import CategoriaDespesa from '../screens/categoria/categoria';
import Balanco from '../screens/balanco/balanco';
import routes from '../Components/routes/routes';
import Formulario_Desp from '../screens/descricacao/formDespesa';

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={routes.SPLASH}
        >
            <Stack.Screen
                name={routes.SPLASH}
                component={Splash}
            />
            <Stack.Screen
                name={routes.HOME}
                component={Home}
            />

            <Stack.Screen
                name={routes.RECEITA}
                component={Receita}
            />

            <Stack.Screen
                name={routes.DESPESA}
                component={Despesa}
            />

            <Stack.Screen
                name={routes.CATEGORIARECEITA}
                component={CategoriaReceita}
            />

            <Stack.Screen
                name={routes.CATEGORIA}
                component={CategoriaDespesa}
            />

            <Stack.Screen
                name={routes.BALANCO}
                component={Balanco}
            />

            <Stack.Screen
                name={routes.FORMDESPESA}
                component={Formulario_Desp}
            />

            <Stack.Screen
                name={routes.DRAWER}
                component={DrawerNavigator}
                screenOptions={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
