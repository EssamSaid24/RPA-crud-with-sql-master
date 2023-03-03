const machineQueries = require('../db/queries').machineQueryList;
const dbConnection = require('../db/dbConnection');


//machine model constructor
class Machine{
    constructor(id, name, type,user_id){
        this.id = id;
        this.name = name;
        this.type = type;
        this.user_id = user_id;

    }


// queries

static async getAllmachines(){
    let queryText = machineQueries.GET_ALL_MACHINES;
    try{
        const result = await dbConnection.dbQuery(queryText);
        let machinesArray = [];
        result.forEach(machineJson  => {
            machinesArray.push(new Machine(machineJson.id, machineJson.name,machineJson.type,machineJson.user_id))
        });
        return machinesArray;
            
        }catch(err){
            console.log("Model-Handling-Error: Failed to fetch all machines\n", err);
            return null;
        }

    }
static async createMachine(name,type,user_id){
    let queryText = machineQueries.INSERT_MACHINE;
    let values = [name, type,user_id];
    try{
        const result = await dbConnection.dbQuery(queryText,values);
        let machine = new Machine(result.id,result.name,result.type,result.user_id);
        return machine;
    }
    catch(err){
        console.log("Model-Handling-Error: Failed to create a machine entity\n", err);
        return null;
    }
}
static async deleteMachine(id){
    let queryText = machineQueries.DELETE_MACHINE;
    let values = [id];
    try{
        const result = await dbConnection.dbQuery(queryText, values);
        return result;
    }catch(err){
        console.log("Model-Handling-Error: Failed to delete a machine entity\n", err);
        return null;
    }

}
}

module.exports = Machine;