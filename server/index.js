import express from 'express';
import cors from 'cors';

const app = express();

app.get('/',(req,res)=>{
    res.send("test req");
    console.table({req})
});

app.listen(3000,()=>{
    console.log('Server on port 3000');
})