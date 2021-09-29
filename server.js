const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const pool = require("./db");


const app=express();

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('',(req,res)=>{
    res.send('Hi there, Hello there');
});

app.get('/another',(req,res)=>{
    res.send('On another page');
});

app.get('/getProducts',async (req,res)=>{
    // res.send(JSON.stringify(products));
    try 
    {
        const allrecords=await pool.query("SELECT * FROM productstable");
        res.send(JSON.stringify(allrecords.rows));
    } 
    catch(err)
    {
        console.log(err.message);
    }
});

app.post('/insert',async (req,res)=>{
   
    try 
    {
        const data = req.body;;
        console.log(data);

        console.log(data.ID,data.title,data.price,data.quantity,data.imgLink);

        const newEntry = await pool.query("INSERT INTO productstable (id,title,price,quantity,imglink) VALUES($1,$2,$3,$4,$5)",[data.ID,data.title,data.price,data.quantity,data.imgLink]);

        // res.json(newEntry);
        console.log("ADDED SUCCESSFULLY");
    }
    catch(err)
    {
        console.log(err.message);
    }
    


    // var currentList=products;
    
    // var newProd={
    //     id:data.ID,
    //     title:data.name,
    //     price:data.price,
    //     imgLink:data.link,
    //     quantity:0
    // };

    // console.log(newProd);

    // currentList.push(newProd);

    // products=[...currentList];
});



app.listen(3001,()=>{
    console.log('SERVER UP AND RUNNING AT PORT 3001');
});


