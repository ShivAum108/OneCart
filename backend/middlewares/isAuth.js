import jwt from "jsonwebtoken"
const isAuth = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) {
            return res.status(400).json({message: "user doesn't have a token"})
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(400).json({message: "user doesn't have a valid token"})
        }
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.log("is auth error: ", error);
        return res.status(500).json({message: "is auth error"})
    }
}

export default isAuth;