import jwt from 'jsonwebtoken'
// middlewares.js
export const middlewarefunc = (req, res, next) => {
    try {

        //check if the request has an Authorization header and if it starts with "Bearer".
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer");

        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(403).json("denied because you are not authenticated, token missing");
        }
        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) {
                return res.status(403).json("you are not authorized");
            }
    
            req.user=user;
            next()

        });
    } catch (error) {
        res.status(500).json("internal server error")
        
    }
}


export const checkRole = (role)=>{
    return(req, res, next)=>{
        const userRole= req.user && req.role.user;
        console.log(req.user)
        if(userRole!=role){
        req.status(403).json("only admins are allowed")
        }
        next(role)
    }
}