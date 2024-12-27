import { View ,Text,Image} from "react-native"
import { router } from "expo-router"
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Task} from "@/components/Task/Task";



export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40, alignItems:  'center',justifyContent: 'center' }}>
            <Image source={require("../assets/Logo.png")} height={400} width={400} />
            <Input title={'Username'} />
            <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8 }}>
                <View style={{flex: 5}}>
                    <Input title={'Password'} />
                </View>
                <View style={{flex: 1}}>
                    <Button onPress={() => router.push("/home")}>
                        <Button.Icon name="eyeo" />
                    </Button>
                </View>
            </View>
            <Button onPress={() => router.push("/home")}>
                <Button.Title>Entrar</Button.Title>
            </Button>

        </View>
    )
}
