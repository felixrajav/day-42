const userActivitiesRouter = require('express').Router();
const userModel = require('../models/Users.models');


userActivitiesRouter.get('/:fullName', async(req,res,next) => {
    const { fullName } = req.params;
    const data = await userModel.findOne({ fullName });
    try {
        if (data && data._id) {
            res.status(200).json({
                success: true,
                result : data.shortenUrl
            });
        }
    }
    catch (error) {
        return res.status(401).json({
            success : false,
            Error : err
        })
    }
})

module.exports = userActivitiesRouter;