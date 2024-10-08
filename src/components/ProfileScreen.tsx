import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ProfileScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Profile">,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <image src="~/assets/profile-placeholder.png" className="w-32 h-32 rounded-full mx-auto" />
                <label className="text-2xl font-bold text-center">John Doe</label>
                <label className="text-lg text-center">Safety Level: Expert</label>
                <button className="bg-blue-500 text-white p-4 rounded-full" onTap={() => console.log("Edit Profile")}>
                    Edit Profile
                </button>
                <label className="text-2xl font-bold mt-4">Safety Achievements</label>
                <listView className="bg-white rounded-lg">
                    {/* Add list items for achievements */}
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