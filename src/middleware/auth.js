const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || ""
        const [schema, token] = authHeader.split(" ");
        if (schema !== "JWT" || !token) {
            return res.status(401).json({
                status: false,
                message: "Invalid Token"
            })
        }

        const user = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = user
        next()
    } catch (error) {
        return res.status(403).json({
            status: false,
            message: "invalid Token",
            messageError: error
        })
    }
}

module.exports = {
    verifyToken
}