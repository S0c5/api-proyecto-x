const Activity = require('../models/activity');



exports.create = (req, res, next) => {
    let activityNew = new Activity(req.body);

    activityNew.save()
    .then(activity => {
        res.status(201).json(activity)
    }).catch(err => res.status(500).json({message: err}));
}


exports.list = (req, res, next) => {
    
    Activity.find({})
    .then(activities => {
        res.status(200).json(activities)
    }).catch(err => res.status(500).json({message: err}));
}
