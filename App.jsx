import {StyleSheet, View} from 'react-native';
import MainPage from "./components/MainPage";
import Feed from "./components/Feed";
import Content from "./components/Content";
import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./navigation/BottomTab";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff"
    }
}

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Content" component={Content}/>
                <Tab.Screen name="LoginPage" component={LoginPage}/>
                <Tab.Screen name="SingUpPage" component={SingUpPage}/>
                {/*<Tab.Screen name="Feed" component={Feed}/>*/}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#bfbfbf",
    },
});

export default App;