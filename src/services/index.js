import express from 'express'
import blogPostSchema from  '../services/schema.js'


const blogsRouter = express.Router()


blogsRouter.get("/", async(req, res , next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.get("/:blogId", async(req, res , next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.post("/", async(req, res , next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.put("/blogId", async(req, res , next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.delete("/blogId", async(req, res , next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
})

export default blogsRouter

