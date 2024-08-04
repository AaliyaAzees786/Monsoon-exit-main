const express=require('express');
const cors=require('cors');
const BlogData=require('./connection')
const app= new express();
require('./connection');
const PORT=3001;
const BlogModel=require('./model');
app.use(express.json())
app.use(cors());

//POST
app.post('/add',async(req,res)=>{
    try {
        var item = req.body;
        const datasave = new BlogModel(item);
        const saveddata = await datasave.save();
        res.send('Post successful')
    } catch (error) {
        console.log(error)
    }
})

//GET
app.get('/blogs', async(req,res)=>{
    try {
        const data = await BlogModel.find();
        res.send(data);
    } catch (error) {
        res.send('Data not found');
    }
})

app.delete('/blogdelete/:id',async(req,res)=>{
  try {
      await BlogModel.findByIdAndDelete(req.params.id);
      res.send('Deleted Successfully');
  } catch (error) {
      console.log(error);
  }
})

app.put('/blogedit/:id',async(req,res)=>{
  try {
      const data = await BlogModel.findByIdAndUpdate(req.params.id,req.body);
      res.send('Updated Successfully')
  } catch (error) {
      console.log(error);
  }
})


app.listen(PORT,()=>{
    console.log('Server is running on PORT 3001')
})