const { BookModel } = require("../model/bookmodel")
const { auth } = require("../middleware/auth.middleware")
const express = require('express');

const bookRouter = express.Router()

bookRouter.post("/post", auth, async (req, res) => {
    try {
        const book = new BookModel(req.body)
        await book.save()
        res.status(201).send({ "msg": "Book added", "Product": req.body })
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

bookRouter.get("/",  async (req, res) => {
    try {
        const book = await BookModel.find()
        res.status(200).send(book)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

bookRouter.get("/:id", auth,async (req, res) => {
    const { id } = req.params
    try {
        const book = await BookModel.find({ _id: id })
        res.status(200).send(book)
    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

// bookRouter.get("/:id", auth,async (req, res) => {
//     const { id } = req.params
//     try {
//         const book = await BookModel.find({ _id: id })
//         res.status(200).send(book)
//     } catch (err) {
//         res.status(400).send({ "error": err })

//     }
// })

bookRouter.patch("/update/:id", auth, async (req, res) => {
    const { id } = req.params
    try {

        await BookModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(204).send({ "msg": "Book updated" })

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

bookRouter.delete("/delete/:id",auth,  async (req, res) => {
    const { id } = req.params
    try {
        await BookModel.findByIdAndDelete({ _id: id })
        res.status(202).send({ "msg": "Book deleted" })

    } catch (err) {
        res.status(400).send({ "error": err })

    }
})

module.exports = {
    bookRouter
}

