const processQueries = require('../db/queries').processQueryList;
const { deleteProcess } = require('../controllers/processController');
const dbConnection = require('../db/dbConnection');


class Process{
    constructor(id, name, package_name, package_version, priority,robot_id){
        this.id = id,
        this.name = name,
        this.package_name = package_name,
        this.package_version = package_version,
        this.priority = priority,
        this.robot_id = robot_id
    }


// queries
static async getAllprocesses(){
    let queryText = processQueries.GET_ALL_PROCESSES;
    try{
        const result = await dbConnection.dbQuery(queryText);
        let processesArray = [];
        result.forEach(processJson  => {
            processesArray.push(new Process(processJson.id, processJson.name,processJson.package_name,processJson.package_version,processJson.priority,processJson.robot_id))
        });
        return processesArray;

    }catch(err){
        console.log("Model-Handling-Error: Failed to fetch all processes\n", err);
        return null;
    }

}
static async createProcess(name, package_name, package_version, priority,robot_id){
    let queryText = processQueries.INSERT_PROCESS;
    let values = [name, package_name, package_version, priority,robot_id];
    try{
        const result = await dbConnection.dbQuery(queryText,values);
        let process = new Process(result.id,result.name,result.package_name,result.package_version,result.priority,result.robot_id);
        return process;
    }
    catch(err){
        console.log("Model-Handling-Error: Failed to create a process entity\n", err);
        return null;
    }   
}


static async deleteProcess(id){
    let queryText = processQueries.DELETE_PROCESS;
    let values = [id] ;
    try{
        const result = await dbConnection.dbQuery(queryText, values);
        return result;
    }
    catch(err){
        console.log("Model-Handling-Error: Failed to delete a process entity\n", err)
    }
}


}
module.exports = Process;