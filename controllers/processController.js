const Process = require("../models/process");


exports.getProccesses = async (req, res) => {
    let result = await Process.getAllprocesses();
    if(result){
    res.render("../views/processViews/processes" , {title: "processes", processes: result})
    }else{
    return res.status(400).send(JSON.stringify({error: "Failed to get processes list!"}));
    }  
}

exports.redirectCreateProcess = (req,res) => {
    res.render("../views/processViews/createProcess" , {title: "Create new process"});

}

exports.createProcess = async(req,res) => {
    let {name, package_name, package_version, priority,robot_id} = req.body;
    let result = await Process.createProcess(name, package_name, package_version, priority, robot_id); 
    if(result)
        res.redirect("/processes");
    else
        return res.status(400).send(JSON.stringify({error: "Failed to create process!"}));
}

exports.deleteProcess = async (req,res) => {
    const {id} = req.params;
    let result = await Process.deleteProcess(id);
    if(result){
        res.redirect("/processes")
    }else{
        return res.status(400).send(JSON.stringify({error: "Failed to delete process!"}));
    }       

    
}