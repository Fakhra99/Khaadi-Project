import jwt from 'jsonwebtoken'
// middlewares.js
export const middlewarefunc = (req, res, next) => {
    try {
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
            //
            if (user.role === "admin") {
                    req.user = user;
                    next();
                } else {
                    return res.status(403).json("You do not have the necessary permissions to access this resource");
                }
            });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

// export const authRole=(roles)=> {
//     return (req, res, next) => {
//         const token = req.header('Authorization');

//         if (!token) {
//             return res.status(401).json({ message: 'denied access because of missing token' });
//         }

//         jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
//             if (err) {
//                 return res.status(403).json({ message: 'token not valid' });
//             }

//             if (!roles.includes(user.role)) {
//                 return res.status(403).json({ message: 'not authourized' });
//             }

//             req.user = user;
//             next();
//         });
//     };
// }