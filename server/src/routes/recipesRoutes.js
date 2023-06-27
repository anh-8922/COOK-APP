import express from 'express'
import {handleListRecipes,
        handleAddRecipe,
        handleEditRecipe,
        handeleDeleteRecipe,
        } from '../controllers/recipeController.js'

const recipesrouter = express.Router()

recipesrouter.get('/list', handleListRecipes)
//recipesrouter.get('/search', handleSearchRecipes)
recipesrouter.post('/add',  handleAddRecipe)
recipesrouter.put('/edit', handleEditRecipe)
recipesrouter.delete('/delete/:id', handeleDeleteRecipe)

export default recipesrouter

//upload.single('image'),
//upload.single('image'),