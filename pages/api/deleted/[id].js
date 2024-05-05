import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

async function Handler(req, res){
    if(req.method === 'DELETE'){
        const id = req.query.id;
        const client = await MongoClient.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/Todos?retryWrites=true&w=majority`)
        const db = client.db();

        const todoCollections = db.collection('todos');
        const result = await todoCollections.findOneAndDelete(
            { _id: new ObjectId(id) } // Query by ID and delete the document
        );
        client.close();

        res.status(201).json(result, {message: "Deleted Successfully"});        
    } else {
        res.status(405).send('Method Not Allowed');
    }
}

export default Handler;