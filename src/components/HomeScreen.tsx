import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <button className="bg-blue-500 text-white p-4 rounded-full pulse" onTap={() => console.log("Share location")}>
                    Share Location
                </button>
                <button className="bg-red-500 text-white p-4 rounded-full" onTap={() => console.log("Emergency Call")}>
                    Emergency Call
                </button>
                <button className="bg-yellow-500 text-white p-4 rounded-full" onTap={() => console.log("Report Unsafe Area")}>
                    Report Unsafe Area
                </button>
                <button className="bg-green-500 text-white p-4 rounded-full" onTap={() => navigation.navigate("Community")}>
                    Community
                </button>
                <button className="bg-purple-500 text-white p-4 rounded-full" onTap={() => navigation.navigate("Rewards")}>
                    Rewards
                </button>
                <label className="text-lg font-bold mt-4">Daily Safety Tip</label>
                <label className="text-base">Always be aware of your surroundings and trust your instincts.</label>
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
    button: {
        fontSize: 18,
        color: "#ffffff",
        margin: 10,
        padding: 10,
        borderRadius: 20,
    },
});