import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type CommunityScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Community">,
};

export function CommunityScreen({ navigation }: CommunityScreenProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <label className="text-2xl font-bold">Community Alerts</label>
                <listView className="h-64 bg-white rounded-lg">
                    {/* Add list items for community alerts */}
                </listView>
                <label className="text-2xl font-bold mt-4">Safety Challenges</label>
                <listView className="h-64 bg-white rounded-lg">
                    {/* Add list items for safety challenges */}
                </listView>
                <button className="bg-blue-500 text-white p-4 rounded-full" onTap={() => console.log("Create Alert")}>
                    Create Alert
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#f0f0f0",
    },
});