import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type RewardsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Rewards">,
};

export function RewardsScreen({ navigation }: RewardsScreenProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <label className="text-2xl font-bold">Your Points: 150</label>
                <progressBar value={75} maxValue={100} className="bg-blue-200 h-4 rounded-full">
                    <stackLayout className="bg-blue-500 h-4 rounded-full" />
                </progressBar>
                <label className="text-lg">Current Challenge Progress</label>
                <label className="text-2xl font-bold mt-4">Rewards Store</label>
                <listView className="bg-white rounded-lg">
                    {/* Add list items for rewards */}
                </listView>
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