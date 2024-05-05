import TodoList from "../components/Todos/TodoList";
import { useRouter } from "next/router";
import TodoForm from "../components/Todos/TodoForm";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

const Homepage = (props) => {
    const router = useRouter();
    async function addTodoHandler(enteredTodoData){
        const response = await fetch('/api/new-todo', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'content-type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        router.push('/');
    }

    async function CompletedHandler(id){
        console.log(id);
        const response = await fetch(`/api/completed/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: true })
        })
        const data = await response.json();
        console.log(data);
        
    }
    async function DeletedHandler(id){
        console.log(id);
        const response = await fetch(`/api/deleted/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        
    }

 
    return (
        <Fragment>
            <TodoList todos={props.todos} onCompTodo={CompletedHandler} onDeleted={DeletedHandler}/>
            <TodoForm onAddtodo={addTodoHandler}></TodoForm>
        </Fragment>
    );
}

export async function getStaticProps() {
    const client = await MongoClient.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/Todos?retryWrites=true&w=majority`)
    const db = client.db();

    const todoCollections = db.collection('todos');

    const todos = await todoCollections.find({status: false}).toArray();
    client.close();

    return {
        props: {
            todos: todos.map(todo =>({
                todos: todo.todos,
                status:todo.status,
                id: todo._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default Homepage;