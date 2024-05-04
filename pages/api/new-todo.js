import { MongoClient } from "mongodb";

async function Handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const { todos, status } = data;

        const client = await MongoClient.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/Todos?retryWrites=true&w=majority`)
        const db = client.db();

        const todoCollections = db.collection('todos');
        const result = await todoCollections.insertOne({todos, status});
        client.close();

        res.status(201).json({message: 'Todo inserted successfully'});        
    }
}

export default Handler;