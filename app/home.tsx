import {Image, View,Text} from "react-native";
import {Task} from "@/components/Task/Task";
import {colors} from "@/styles/colors";
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";


export default function Home() {
    return (
        <View style={{ flex: 1  }}>
            <View style={{ flex: 1, alignItems:  'center',justifyContent: 'center',backgroundColor: colors.gray["200"],padding: 40 }}>
                <View style={{justifyContent: 'flex-end'}}>

                </View>
                <Image source={require("../assets/Logo.png")} height={400} width={400} />
                <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8, marginBottom: -140 }}>
                    <View style={{flex: 5}}>
                        <Input title={'Pesquisar tarefa'} />
                    </View>
                    <View style={{flex: 1}}>
                        <Button onPress={() => router.push("/home")}>
                            <Button.Icon name="search1" />
                        </Button>
                    </View>
                </View>
            </View>
            <View style={{ flex: 5, alignItems:  'center',justifyContent: 'center',padding:20 }}>
                <Task />

            </View>
        </View>
    )
}
