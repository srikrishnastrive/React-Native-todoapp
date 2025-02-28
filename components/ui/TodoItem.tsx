import { Text, View,StyleSheet,TouchableOpacity, Alert,TextInput, } from "react-native"; // Use this for standard components
import { theme } from "../../constants/theme";



type TodoItemProps = {
    todoValue:string,
    isCompleted ?: boolean; //optional for question mark
    markComplete : () => void
}

export default function TodoItem({todoValue,isCompleted,markComplete}:TodoItemProps) {
    function handlePress(){
        Alert.alert(
            "Delete todo",`Are you sure You want to mark this ${isCompleted ? 'pending':'completed'} ?`,
            [
                {
                    text:'No',
                    onPress:()=>console.log("No pressed")
                },
                {
                    text:"Yes",
                    onPress:() => markComplete()
                }
            ]

        )
    }

  return (
       
        <View style={styles.todoContainer}>
          
        <Text style={[styles.todoText,isCompleted ? styles.textCompleted : undefined]}>{todoValue}</Text>
        <TouchableOpacity 
        style={[styles.button,isCompleted ? styles.buttonCompleted : undefined]} onPress={handlePress}>
            <Text style={styles.buttonText}> Delete todo</Text>
        </TouchableOpacity>
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
    },
    buttonCompleted : {
        backgroundColor:theme.lightGrey,
    },
    textCompleted : {
        color:theme.lightGrey,
        textDecorationLine:'line-through',
        borderBottomColor:theme.lightGrey
    }

})
