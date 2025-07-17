import express from "express";
import { SweetShop } from "../app";
import { Sweet } from "../types/Sweet";

const router = express.Router()

const sweetShop: SweetShop = new SweetShop();

//add the sweet
router.post("/add", (req, res) => {
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
            error: (error instanceof Error) ? error.message : String(error)
        })
    }
})

// delete the sweets
router.delete("/delete", (req, res) => {
    try {
        const { name } = req.body;
        const resposne = sweetShop.deleteSweet(name);
        if (resposne) {
            res.status(200).json({
                "message": "Sweet Deleted Succesfully"
            })
        }
        else {
            res.status(200).json({
                "message": "Sweet do not exist"
            })
        }
    } catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : String(error)
        })
    }
})

// view all the sweetss
router.get("/all", (req, res) => {
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
router.post("/search", (req, res) => {
    try {
        const { name } = req.body;
        const sweet = sweetShop.searchByName(name);
        console.log(sweet);

        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : String(error)
        })
    }
})

//search by category
router.post("/category", (req, res) => {
    try {
        const { category } = req.body;

        const sweet = sweetShop.searchByCategory(category);

        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : String(error)
        })
    }
})

//search by price range
router.post("/price", (req, res) => {
    try {
        const { minPrice, maxPrice } = req.body;

        const sweet = sweetShop.searchByPriceRange(minPrice, maxPrice);
        res.status(200).json({
            sweet
        })
    } catch (error) {
        res.status(401).json({
            error: (error instanceof Error) ? error.message : String(error)
        })
    }
})


//purchase a sweets
router.post("/purchase", (req, res) => {
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
            error: (error instanceof Error) ? error.message : String(error)
        })
    }


})

// restock the sweets
router.post("/restock", (req, res) => {
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
            error: (error instanceof Error) ? error.message : String(error)
        })
    }

})


export default router;