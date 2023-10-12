const shortenUrlRouter = require('express').Router();
const userModel = require('../models/Users.models');

shortenUrlRouter.patch('/:fullName', async (req, res, next) => {
    const { fullName } = req.params;
    const data = await userModel.findOne({ fullName });
    try {
        if (data && data._id) {
            const { shortenUrl } = req.body;
            data.shortenUrl.push(shortenUrl);
            await userModel.findByIdAndUpdate(data.id, data);
            res.status(200).json({
                success: true,
                message: `${data.fullName} Created ShortenUrl Added sucessfully`,
            });
        }
    }
    catch (error) {
        return res.status(401).json({
            success : false,
            message : "ShortenUrl Added Failed",
            Error : err
        })
    }
})


module.exports = shortenUrlRouter;