
exports.robotQueryList = {
    GET_ALL_ROBOTS: 'SELECT * FROM robots',
    GET_ROBOT_BY_ID: 'SELECT * FROM robots WHERE id=$1',
    GET_ROBOT_BY_NAME: 'SELECT * FROM robots WHERE name=$1',
    INSERT_ROBOT: 'INSERT INTO robots (name, standard, attended, user_id) VALUES ($1, $2, $3, $4)',
    UPDATE_ROBOT: 'UPDATE robots SET name=$1, standard=$2, attended=$3, user_id=$4 WHERE id=$5',
    DELETE_ROBOT: 'DELETE FROM robots WHERE id=$1'
}

exports.userQueryList = {
    GET_ALL_USERS: 'SELECT * FROM users',
    GET_USER_BY_ID: 'SELECT * FROM users WHERE id=$1',
    GET_USER_BY_NAME: 'SELECT * FROM users WHERE name=$1',
    INSERT_USER: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    UPDATE_USER: 'UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4',
    DELETE_USER: 'DELETE FROM users WHERE id=$1'

}

exports.machineQueryList = {
    GET_ALL_MACHINES: 'SELECT * FROM machines',
    INSERT_MACHINE:'INSERT INTO machines (name, type, user_id) VALUES ($1, $2, $3)',
    DELETE_MACHINE: 'DELETE FROM machines WHERE id=$1'

}

exports.processQueryList = {
    GET_ALL_PROCESSES: 'SELECT * FROM processes',
    INSERT_PROCESS:'INSERT INTO processes (name, package_name, package_version, priority,robot_id) VALUES ($1, $2, $3, $4, $5)',
    DELETE_PROCESS: 'DELETE FROM processes WHERE id=$1'
}
