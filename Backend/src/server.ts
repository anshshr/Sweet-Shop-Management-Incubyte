import express, { urlencoded } from "express";
import sweetRoute from './routes/sweetRoutes'
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }))

app.use("/api/sweets" ,sweetRoute)


app.listen(PORT, () => {
    console.log('Server is running on the port 3000');
});
