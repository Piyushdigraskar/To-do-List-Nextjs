import { Fragment } from "react";
import CompletedTodoList from "../../components/Todos/CompletedTodoList"
import { MongoClient } from "mongodb"

const CompletedList = (props)=>{
    return <Fragment>
        <CompletedTodoList todos={props.todos} />
    </Fragment>
}

export async function getStaticProps(){
    const client = await MongoClient.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/Todos?retryWrites=true&w=majority`)
    const db = client.db();

    const todoCollections = db.collection('todos');

    const todos = await todoCollections.find({ status: true }).toArray();
    client.close();

    return{
        props:{
            todos: todos.map(todo =>({
                todos: todo.todos,
                status:todo.status,
                id: todo._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default CompletedList;