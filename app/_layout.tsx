import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import {
    Inter_400Regular, Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
} from "@expo-google-fonts/inter"

export default function Layout() {
    
    const [fontsLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
        Inter_600SemiBold,
    })

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: 'white' },
                }}
            />
        </GestureHandlerRootView>
    )
}
