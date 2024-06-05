const express = require('express');
const cors=require('cors');
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dwivedishreya0822:Fs1rZZvPPcYAgewy@cluster0.myuzzzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
  
});
async function run() {
    try {
    
      await client.connect();
      const userCollection=client.db('database').collection('users')     
      app.post('/register',async(req,res)=>{
          const user=req.body;
          const result=await userCollection.insertOne(user);
          res.send(result);
  
      })
    

      
    } catch(error) {
      console.log(error);
    }
  }
  run().catch(console.dir);
  
  
  app.get('/', (req, res) => {
    res.send('Hello World! shreya deivedi')
  })
  
  app.listen(port, () => {
    console.log(`Twitter app listening `)
  })