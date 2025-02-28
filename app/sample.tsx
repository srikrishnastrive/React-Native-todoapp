import { theme } from "@/constants/theme";
import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";


export default function sample(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is a sample component</Text>
             <Link href={"/custom/counter"} style={styles.link}>Go to Counter page</Link>
        </View>
    )
}


const styles = StyleSheet.create({
    text : {
        fontSize:20
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
     link:{
            color:theme.lightBlue,
            fontSize:20,
            textAlign:'center',
            padding:10,
            backgroundColor:theme.colorWhite,
            margin:10,
            borderRadius:50
    
        }
})
