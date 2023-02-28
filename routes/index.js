const router = require("express").Router()
const Todo = require("../models/Todo");

// routes will be here....
router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.render("index", {todo: allTodo})
    //res.send("welcome to home page")
})


module.exports = router;