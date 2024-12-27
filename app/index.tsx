import { View ,Text,Image} from "react-native"
import { router } from "expo-router"
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Task} from "@/components/Task/Task";



export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Image source={require("../assets/Logo.png")} height={400} width={400} />
            <Input />
            <Input />
            <Button />
            <AntDesign name="eyeo" size={24} color="black" />
            <Task />
        </View>
    )
}
