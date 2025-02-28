import {  View,StyleSheet,TextInput,ScrollView } from "react-native"; // Use this for standard components
import { theme } from "../constants/theme";
import TodoItem from "../components/ui/TodoItem";
import { useState } from "react";
import { Link,useRouter } from "expo-router";

type TodoItem = {
    todoValue : string,
    isCompleted?:boolean
}

export default function HomeScreen() {
    const [todo,setTodo] = useState('');
    const [todoList,setTodoList] = useState<TodoItem[]>([]);
    function handleChange(data:string){
       setTodo(data);
    }
    function handleSubmit(){
        console.log("submitted todo",todo);
        setTodoList([
            ...todoList,
            {
                todoValue:todo,
                isCompleted:false,
            }
        ]);
        setTodo('');
    }

    function handlTodoCompleted(todoIndex:number){
        const newTodoList = todoList.map((currentTodo,index)=>{
            if (index === todoIndex){
                return {
                    ...currentTodo,
                    isCompleted:!currentTodo.isCompleted
                }
            }
            return currentTodo;
        });
        setTodoList(newTodoList);
    }
    
  return (
    <>
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{paddingBottom:16,justifyContent:"center"}}
            stickyHeaderIndices={[0]}
        >
            <Link href={"/sample"} style={styles.link}>Go to Sample page</Link>
            <Link href={"/(custom)/counter"} style={styles.link}>Go to Counter page</Link>
            <View style={styles.container}>
                <TextInput 
                style={styles.textInput} placeholder="Enter new  todo"
                onChangeText={handleChange} returnKeyType="done" onSubmitEditing={handleSubmit} value={todo}/>
                {todoList.map((currentTodo,index)=>(
                    <TodoItem key={index} 
                    todoValue={currentTodo.todoValue}
                    isCompleted={currentTodo.isCompleted}
                    markComplete={()=> handlTodoCompleted(index)}
                    />
                ))}
            </View>
        </ScrollView>
       

    </>
  );
}

const styles = StyleSheet.create({
    container :{
        
        backgroundColor:theme.colorWhite,
        flex:1 //this will make the full screen to the container
    },
    textInput : {
        borderWidth:1,
        borderColor:theme.lightBlue,
        margin:10,
        padding:10,
        borderRadius:50,
        marginHorizontal:10,
        fontSize:20
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
