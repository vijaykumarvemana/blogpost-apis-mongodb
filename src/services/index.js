import express from 'express'
import createHttpError from 'http-errors'
import BlogPostModel from  '../services/schema.js'


const blogsRouter = express.Router()


blogsRouter.get("/", async(req, res , next) => {
    try {
        const blogPosts = await BlogPostModel.find()
        res.send(blogPosts)
    } catch (error) {
      next(error)  
    }
})

blogsRouter.get("/:blogID", async(req, res , next) => {
    try {
        const blogId = req.params.blogID
        const blogPost = await BlogPostModel.findById(blogId)
        if(blogPost){
            res.send(blogPost)
        }else{
            next(createHttpError(404, `blogpost with ${blogId} not found!`))
        }
    } catch (error) {
      next(error)  
    }
})

blogsRouter.post("/", async(req, res , next) => {
    try {
        const blogPost = new BlogPostModel(req.body)
        const {_id} = await blogPost.save()
        res.send({_id})
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.put("/:blogID", async(req, res , next) => {
    try {
        const blogId = req.params.blogID
        const modifiedBlogPost = await BlogPostModel.findByIdAndUpdate(blogId, req.body, {
            new:true,
        })

        if(modifiedBlogPost){
            res.send(modifiedBlogPost)
        }else{
            next(createHttpError(404,`blogpost with id ${blogId} not found!`))
        }
        
    } catch (error) {
      next(error)  
    }
})

blogsRouter.delete("/:blogID", async(req, res , next) => {
    try {
        const blogId = req.params.blogID
        const deletedBlog = await BlogPostModel.findByIdAndDelete(blogId)
        
        if(deletedBlog){
          res.status.apply(204).send()
        }else{
            next(createHttpError(404, `blodpost with id ${blogId} not found!`))
        }
    } catch (error) {
      next(error)  
    }
})

export default blogsRouter

