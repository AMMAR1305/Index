const Task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        console.log('Received body:', req.body);
        const { title, description, status} = req.body;
        const user=req.user.id
        
        // Validate required fields
        // if (!title || !description || !status || !user) {
        //     console.log('Missing fields - title:', title, 'description:', description, 'status:', status, 'user:', user);
        //     return res.status(400).json({ 
        //         error: 'All fields are required: title, description, status, user' 
        //     });
        // }
        
        const task = await Task.create({ title, description, status, user });
        res.status(201).json({Sucess : true, message: 'Task created successfully', task 
        });
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};
   exports.getTask = async (req, res) => {
    try {
                
        res.status(200).json({ success: true, tasks });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};


exports.getTaskById = async (req , res) => {
     try{
       const task = await Task.findOne({
        _id:req.params.id,
        user:req.user.id 
       });
       res.status(200).json({ success: true, message: "Id Successfully fetched", task });
     }
     catch(error){
        res.status(500).json({ success: false, message: "Id fetched failed", error: error.message });
     }
};


exports.getUpdateTask = async (req, res) =>{
     try{
        const task = await Task.updateOne({
            _id : req.params.id,
            user:req.user.id,
        },
        {
         title : req.body.title,
         description : req.body.description,
         status : req.body.status

        },{new : true});

        res.status(201).json({success : true,message :"Successfully Updated",task });
     }
     catch(error){
         res.status(500).json({success : false , message : "Update failed!"});
     }
};


exports.getUpdateTaskPatch = async (req, res) =>{
     try{
        const task = await Task.findOneAndUpdate({
            _id : req.params.id,
            user:req.user.id,
        },
       req.body,
       {new : true},
    );
    if(!task){
        res.json({message : "No task exist"});
    }
        res.status(201).json({success : true,message :"Successfully Updated",task });
     }
     catch(error){
         res.status(500).json({success : false , message : "Update failed!"});
     }
};


exports.deleteTask = async ( req, res) => {
 
  try{
      const task = await Task.findOneAndDelete({
        _id : req.params.id,
            user:req.user.id,
      });
      if(!task){
        res.json({message : "No task exist"});
     }
      
      res.status(200).json({success : true, message: "Successfully deleted!",task});
  }
  catch(error){
    res.status(500).json({success : false, message : "Delete Failed!",task});
  }
};

