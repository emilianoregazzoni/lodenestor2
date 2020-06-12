const router = require('express').Router();
const Task = require('../../models/task');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Task.getAllTaskById(req.params.id)
        .then(task => {
            res.json({
                task,
            });
        })
        .catch(err => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    Task.getAllTasks()
        .then(tasks => {
            res.json({
                tasks,
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;