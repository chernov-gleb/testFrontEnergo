const express = require('express');
const router = express.Router();

//http://localhost:3000/api/Employee (GET)
router.get('/', (req, res) => {
    console.log('get api' + req + res)
/*    const employers = await Employee.find({})
    res.status(200).json(employers)*/
})
//http://localhost:3000/api/Employee (POST)
router.post('/', async (req, res) => {
    const postData = {
        title: req.body.title
    }
    console.log('set api' + postData)
//    const employee = new Employee(postData)
//    await Employee.save();
    res.status(201).json('employee')//<------
})
//http://localhost:3000/api/Employee/23 (DELETE)
router.delete('/:empId', async (req, res) => {
    console.log('delete api')
//    Employee.remove({_id: req.params.empId})
    res(200).json({
        message: 'удалено'
    })
})


module.exports = router;