const db = require('../services/db-connection');
const GET_TASK_BY_ID = 'SELECT * from tasks where id = ?';
const GET_ALL_TASKS = 'SELECT * from tasks';
const INSERT_NEW_TASK = 'INSERT INTO tasks SET ?';

class Task {
   
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static getTaskById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_TASK_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const { id, name, description } = results[0];
                    resolve(new Task(id, name, description));
                }
              });
        })
    }

    static getAllTasks() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_TASKS, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((task) => {
                            const { id, name, description } = task;
                            return new Task(id, name, description);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }

    save() {
        const newTask = {
            name: this.name,
            description: this.description,
        };
        return new Promise((resolve, rejected) => {
            db.query(INSERT_NEW_TASK, newTask, (error, results, fields) => {
                if (error) {
                    console.log('Se produjo un error');
                    rejected(error);
                } else {
                    resolve(new Task(newTask.name, newTask.description));
                }
            });
        });
    }
}

module.exports = Task;