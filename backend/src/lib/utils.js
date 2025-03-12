import jwt from 'jsonwebtoken'; // Correct package name
export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { 
        expiresIn: '7d' 
    });
   

    res.cookie("jwt", token, { 
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",  // 'strict' for HttpOnly cookies only to be sent over HTTPS
        secure: process.env.NODE_ENV !== "development",
        
    });
     
    return token;
    
};

export default generateToken;