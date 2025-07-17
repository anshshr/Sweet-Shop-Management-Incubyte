import express from "express";
import sweetRoute from './routes/sweetRoutes'
import cors from "cors";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/sweets", sweetRoute)


app.listen(PORT, () => {
    console.log('Server is running on the port 3000');
});
