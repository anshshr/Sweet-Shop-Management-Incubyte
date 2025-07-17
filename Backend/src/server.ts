import express, { urlencoded } from "express";
import { SweetShop } from "./app";
import { Sweet } from "./types/Sweet";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }))

const sweetShop: SweetShop = new SweetShop();

//add the sweet
app.post("/api/sweets/add", (req, res) => {
    try {
        const { name, category, price, quantity } = req.body;
        const sweet: Sweet = {
            name: name,
            category: category,
            price: price,
            quantity: quantity
        }

        sweetShop.addSweet(sweet);
        res.status(200).json({
            "message": "Sweet Succesfully Addded"
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})

// delete the sweets
app.delete("/api/sweets/delete", (req, res) => {
    try {
        const { name } = req.body;
        sweetShop.deleteSweet(name);
        res.status(200).json({
            "message": "Sweet Succesfully Deleted"
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})

// view all the sweetss
app.get("/api/sweets/all", (req, res) => {
    try {
        const allSweets = sweetShop.viewSweets()
        res.status(200).json({
            allSweets
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})

//search by name
app.post("/api/sweets/search", (req, res) => {
    try {
        const { name } = req.body;
        const sweet = sweetShop.searchByName(name);
        console.log(sweet);
    
        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})

//search by category
app.post("/api/sweets/category", (req, res) => {
    try {
        const { category } = req.body;

        const sweet = sweetShop.searchByCategory(category);

        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})

//search by price range
app.post("/api/sweets/price", (req, res) => {
    try {
        const { minPrice, maxPrice } = req.body;

        const sweet = sweetShop.searchByPriceRange(minPrice, maxPrice);
        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
})


//purchase a sweets
app.post("/api/sweets/purchase", (req, res) => {
    try {
        const { name, quantity } = req.body;

        const resposne = sweetShop.purchaseSweet(name, quantity);

        if (resposne) {
            res.status(200).json({
                "message": "Sweet Purchased Succesfully"
            })
        }
        else {
            res.status(200).json({
                "message": "Sweet do not exist"
            })
        }
    } catch (error) {
        res.status(401).json({
            error
        })
    }


})

// restock the sweets
app.post("/api/sweets/restock", (req, res) => {
    try {
        const { name, quantity } = req.body;

        const resposne = sweetShop.restockSweet(name, quantity);

        if (resposne) {
            res.status(200).json({
                "message": "Sweet Restocked Succesfully"
            })
        }
        else {
            res.status(200).json({
                "message": "Sweet do not exist"
            })
        }
    } catch (error) {
        res.status(401).json({
            error
        })
    }

})

app.listen(PORT, () => {
    console.log('Server is running on the port 3000');
});
