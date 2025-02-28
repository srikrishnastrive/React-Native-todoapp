import { Stack } from "expo-router";
import MaterialIcon from "@expo/vector-icons/MaterialIcons"


export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Todo List'}}/>
            <Stack.Screen name="sample" options={{title:'Sample',animation:"slide_from_bottom"}} 
            />
            <Stack.Screen name="counter" options={{title:'counter',animation:"fade_from_bottom"}}/>
        </Stack>
    )    
}
