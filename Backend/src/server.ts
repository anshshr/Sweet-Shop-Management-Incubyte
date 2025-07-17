import express, { urlencoded } from "express";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }))

//add the sweet
app.post("/api/sweets/add", (req, res) => {

})

// delete the sweets
app.delete("/api/sweets/delete", (req, res) => {

})

// view all the sweetss
app.get("/api/sweets/all", (req, res) => {

})

//search by name
app.post("/api/sweets/search", (req, res) => [

])

//search by category
app.post("/api/sweets/category", (req, res) => [

])

//search by price range
app.post("/api/sweets/price", (req, res) => [

])


//purchase a sweets
app.post("/api/sweets/purchase", (req, res) => {

})

// restock the sweets
app.post("/api/sweets/restock", () => {

})

app.listen(PORT ,()=>{
    console.log('Server is running on the port 3000' );
});
