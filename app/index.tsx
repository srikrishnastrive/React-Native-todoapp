import { Text, View,StyleSheet,TouchableOpacity } from "react-native"; // Use this for standard components
import { theme } from "./theme";



export default function HomeScreen() {
    function handlePress(){
        
    }

  return (
   <View style={styles.parentContainer}>
         <View style={styles.todoContainer}>
        <Text style={styles.todoText}>Hello world</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Delete todo</Text>
        </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    parentContainer :{
        justifyContent:"center",
        backgroundColor:theme.colorWhite,
        flex:1 //this will make the full screen to the container
    },
    todoContainer : {
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:theme.lightBlue,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center'
        
    },
    todoText:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        borderRadius:5,
        padding:8,
        backgroundColor:theme.lightRed,
    },
    buttonText:{
        color:theme.colorWhite,
        textAlign:"center",
        fontWeight:"bold",
        letterSpacing:1.2,
        textTransform:"uppercase"
    }
})
