import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

async function Handler(req, res){
    if(req.method === 'PATCH'){
        const id = req.query.id;
        const client = await MongoClient.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/Todos?retryWrites=true&w=majority`)
        const db = client.db();

        const todoCollections = db.collection('todos');
        const result = await todoCollections.findOneAndUpdate(
            { _id: new ObjectId(id) }, // Query by ID
            { $set: { status: true } }, // Update status to true
            { returnOriginal: false} // Option to return the updated document
        );
        client.close();

        res.status(201).json(result, {message: "Status Updated Successfully"});        
    } else {
        res.status(405).send('Method Not Allowed');
    }
}

export default Handler;