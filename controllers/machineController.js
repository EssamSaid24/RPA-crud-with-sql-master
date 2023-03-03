const Machine = require('../models/machine');


exports.getMachines = async (req, res) => {
    let result = await Machine.getAllmachines();
    if(result){
    res.render("../views/machineViews/machines" , {title: "machines", machines: result})
    }else{
    return res.status(400).send(JSON.stringify({error: "Failed to get machines list!"}));
    }  
}
exports.redirectCreateMachine = (req,res) => {
    res.render("../views/machineViews/createMachine" , {title: "Create new Machine"} );
}

exports.createMachine = async(req,res) => {
    let {name, type, user_id} = req.body;
    let result = await Machine.createMachine(name, type,user_id); 
    if(result)
        res.redirect("/machines");
    else
        return res.status(400).send(JSON.stringify({error: "Failed to create machine!"}));
    
}

exports.deleteMachine = async(req,res) => {
    const {id} = req.params;
    let result = await Machine.deleteMachine(id);
    if(result){
        res.redirect("/machines")
    }else{
        return res.status(400).send(JSON.stringify({error: "Failed to delete machine!"}));
    }       

    
}

