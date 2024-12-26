import { View ,Text,Image} from "react-native"
import { router } from "expo-router"
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";


export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Image source={require("../assets/Logo.png")} height={400} width={400} />
            <Input />
            <Input />
            <Button />
        </View>
    )
}
