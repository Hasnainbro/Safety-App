import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { CommunityScreen } from "./CommunityScreen";
import { RewardsScreen } from "./RewardsScreen";
import { ProfileScreen } from "./ProfileScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4a90e2",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Safety App" }}
            />
            <StackNavigator.Screen
                name="Community"
                component={CommunityScreen}
                options={{ title: "Community" }}
            />
            <StackNavigator.Screen
                name="Rewards"
                component={RewardsScreen}
                options={{ title: "Rewards" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profile" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);