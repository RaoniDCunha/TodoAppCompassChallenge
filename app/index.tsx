import { View ,Text,Image} from "react-native"
import { router } from "expo-router"
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import {Task} from "@/components/Task/Task";
import React from "react";
import {useAuth} from "@/context/AuthContext";
import {ErrorMessage} from "@/components/ErrorMessage/ErrorMessage";



export default function Index() {

    const [passwordHide, setPasswordHide] = React.useState(false);
    const [usernameText, setUsernameText] = React.useState<string>();
    const [passwordText, setPasswordText] = React.useState<string>();
    const [loginErrorMessage, setLoginErrorMessage] = React.useState(false);
    const { login } = useAuth();


    const handleLogin = () => {

        if (usernameText === "admin" && passwordText === "admin") {

            const userData = { id: 1, username: "admin" };
            login(userData);
            router.replace("/home");
        } else {
            setLoginErrorMessage(true)
            alert("Usuário ou senha incorretos!"+usernameText)
        }
    };

    return (
        <View style={{ flex: 1, padding: 40, gap: 10, alignItems:  'center',justifyContent: 'center' }}>
            <Image source={require("../assets/Logo.png")} height={400} width={400} style={{marginBottom: 60}} />
            <Input title={'Username'} onChangeText={(text) => setUsernameText(text)} error={loginErrorMessage} />
            { loginErrorMessage && <ErrorMessage text={'Username Inválido'} /> }

            <View style={{  alignItems:  'center',justifyContent: 'center',flexDirection: 'row', gap: 8 }}>
                <View style={{flex: 5}}>
                    <Input title={'Password'} visible={passwordHide} onChangeText={(text) => setPasswordText(text)} error={loginErrorMessage} />
                </View>
                <View style={{flex: 1}}>
                    { passwordHide == true ?
                        (
                            <Button onPress={() => setPasswordHide(false)}>
                                <Button.Icon name="eye" />
                            </Button>
                        )
                        :
                        (
                            <Button onPress={() => setPasswordHide(true)}>
                                <Button.Icon name="eye-off" />
                            </Button>
                        )
                    }

                </View>
            </View>
            { loginErrorMessage && <ErrorMessage text={'Senha Inválida'} /> }
            <Button onPress={ handleLogin}>
                <Button.Title>Login</Button.Title>
            </Button>

        </View>
    )
}
