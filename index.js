const { query } = require("express");
const express = require("express");

const PORT = 6000;

const app = express();
app.use(express.json());
const errorLogger =(err,res,req,next)=>{
    console.log(err)
    (err);
};
const errorHandler = (err,req,res,next)=>{
    res.status(400).json({
        message: err.message
})

}
const personas = [
    {
        id:1,
      name: "david",
      edad: 26,
      quantity: 2,
    },
    {
        id:2,
      name: "andres",
      edad: 19,
      quantity: 3,
    },
    {
        id:3,
      name: "tomas",
      edad: 22,
      quantity: 3,
    },
  ];

app.get("/",(req,res)=>{
    console.log(req,query);
    res.send("esta es mi primera app")
    
});
 
app.get("/api/v1/products/:productId",(req,res,next) => {
    console.log("hola")

},


(req,res)=>{
    res.json(personas);
});

app.get("/api/v1/products/:product",(req,res)=>{
    const {personasId} = req.params;
    const personasIdINT = parseInt(personasId);
    const personas = personas.find((personas)=> personas.id === personasIdINT);
    console.log(req.params);
    if (!personas){
        throw new Error('no se encuentra la persona ');
    }
    console.log(req.params)
    res.json({})
});

app.post("/api/v1/products",(req,res)=>{
    const Personas =req.body;
    personas.push(personas);
    res.json(personas);

});
app.use(errorLogger);
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log`escuhando en http://localhost:${PORT}`
});


