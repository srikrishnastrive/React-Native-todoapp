import { useState } from "react";
import { Text, View,StyleSheet, Button } from "react-native";

export default function counter(){
    const [count,setCount] = useState<number>(0);

    return (
         <View style={styles.container}>
                    <Text style={styles.text}>This is a Counter component {count}</Text>
                    <Button title="Increment" onPress={()=> setCount(count+1)}/>
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
    }
})

