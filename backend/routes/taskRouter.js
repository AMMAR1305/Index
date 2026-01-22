const express = require('express');
const router = express.Router();
const {createTask,getTask,getTaskById,getUpdateTask,getUpdateTaskPatch,deleteTask} = require('../controller/taskController');
const {protect} = require('../middleware/authmiddleware');

router.use(protect);
router.post('/create', protect, createTask);
router.get('/getTask', protect, getTask);
router.get('/getTask/:id',protect,getTaskById);
router.put('/updateTask/:id',protect,getUpdateTask);
router.patch('/patchTask/:id',protect,getUpdateTaskPatch);
router.delete('/deleteTask/:id',protect,deleteTask);
module.exports = router;