const jwt = require("jsonwebtoken")
const authentication = async function (req, res, next) {
    try {


        let token = req.headers["X-Api-Key"] || req.headers["x-api-key"]

        if (!token) {
            return res.status(400).send({ status: false, message: "token must be present" })
        }
        try {
            let decodedToken = jwt.verify(token, "youth-india-E-school")
            let userId = decodedToken.userId

            req.body.userId = userId

        }
        catch (err) {
            return res.status(403).send({ status: false, message: "invalid token" })
        }
        req['x-api-key'] = token
        next()
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
}

module.exports.authentication = authentication