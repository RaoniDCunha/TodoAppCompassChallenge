import {Image, View,Text} from "react-native";
import {Task} from "@/components/Task/Task";
import {colors} from "@/styles/colors";
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import {router} from "expo-router";
import {TaskInformationButton} from "@/components/TaskInformationButton/TaskInformation";


export default function Home() {
    return (
        <View style={{ flex: 1  }}>
            <View style={{ flex: 1, alignItems:  'center',justifyContent: 'center',backgroundColor: colors.gray["200"],padding: 40 }}>
                <View style={{justifyContent: 'flex-end',width: 350}}>
                    <View style={{width: 32}}>
                        <Button onPress={() => router.push("/")}>
                            <Button.Icon name="search1" />
                        </Button>
                    </View>
                </View>
                <Image source={require("../assets/Logo.png")} height={400} width={400} />
                <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8, marginBottom: -100 }}>
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
            <View style={{ flex: 5, alignItems:  'center',justifyContent: 'flex-start',paddingHorizontal:20, paddingVertical: 40,gap: 10 }}>
                <View style={{ flexDirection: 'row',marginBottom: 10,paddingHorizontal: 40,justifyContent: 'space-around',gap: 50}}>
                    <TaskInformationButton number={8} title={'Tarefas criadas'} color={'purple'} />
                    <TaskInformationButton number={16} title={'Concluidas'} color={'green'} />
                </View>
                <Task />
                <Task />
                <Task />
                <Task />




            </View>
        </View>
    )
}
