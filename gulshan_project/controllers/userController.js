import * as userService  from '../services/userServices.js';

export const getUser = async (req,res) => {
    try {
        const result = await userService.getUser();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in getting user:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const addUser = async (req,res) => {
    try {
        const data = req.body
        const result = await userService.addUser(data);
        res.status(200).send(result);
    } catch (error) {
        console.error("Error in adding user:", error);
        res.status(500).send("Internal Server Error");
    }
};

export const updateUser = async (req,res) => {
    const {userId} = req.body;
    const info = req.body;
    try {
        if (!(userId)){
            res.status(400).send("user Id is required");
        }
        const result = await userService.updateUser(userId,info);
        res.status(200).send(result);
    } catch (error) {
        console.error(`Error in updating user ${userId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};

export const deleteUser = async (req,res) => {    
    const {userId} = req.query;
    try {
        if (!userId){
            res.status(400).send("user Id is required");
        }else{
            const result = await userService.deleteUser(userId);
            res.status(200).send(result);
        }
    } catch (error) {
        console.error(`Error in deleting user Id ${userId}:`, error);
        res.status(500).send("Internal Server Error");
    }
};



// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import {secretKey} from '../constant.js'

// // register
// export const register = async (req, res) => {
//   try {
//     const { email, password, username, phone } = req.body;
//     const existingEmail = await userRepository.findEmailByEmail(email);

//     // Check if all required fields are provided

//     if (!(email && password && username && phone)) {
//       res.status(400).send("All input is required");

//       // Check if email already exists
//     } else if (existingEmail) {
//       res.status(400).send("Email already exists");

//       // register the user
//     } else {
//       const result = await userService.register(req.body);
//       res.status(200).send(result);
//     }
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).send("Internal server error");
//   }
// };

// // login

// export const login = async (req, res) => {
//   try {
//     let { email, password } = req.body;
//     const existingEmail = await userRepository.findEmailByEmail(email);

//     if (!existingEmail) {
//       return res.status(400).send("Email does not exist");
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingEmail.password
//     );

//     if (!isPasswordCorrect) {
//       return res.status(400).send("Incorrect password");
//     }

//    const token = jwt.sign({ email: existingEmail.email }, secretKey,{ expiresIn: '600000' });
//    res.cookie("token", token);
//    res.status(200).json({
//     status: true,
//     message: "User logged in successfully",
//     token,
//   });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).send("Internal server error");
//   }
 
// };


// export async function findEmailByEmail(email) {
// 	const result = await model.userModel.findOne({
// 		where: {
// 			email: {
// 				[Op.eq]: email
// 			}
// 		}
// 	})
// 	return result;
// }

// import bcrypt from "bcryptjs";
// import { v4 as uuidv4 } from 'uuid';
// var salt = bcrypt.genSaltSync(10);

// //register
// export async function register(info) {
//   let { username, password, phone, email } = info;
//   password = await bcrypt.hashSync(password, salt);

//   const data = {
//     username,
//     password,
//     phone,
//     email : email.toLowerCase(),
//     userid: uuidv4(),
//   };

//   return await registerRepository.register(data);
// }

// // login 

// export async function login(info){
//     return await registerRepository.register(info);
// }

// async function verifyUser(req, res, next) {
//     try {
//       const authHeader = req.headers.authorization;
  
//       if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Unauthorized' });
//       }
  
//       const token = authHeader.split(' ')[1];
  
//       const decoded = jwt.verify(token, jwtSecret);
  
//       const user = await User.findById(decoded.userId);
  
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid token' });
//       }
  
//       req.user = user;
//       next();
//     } catch (error) {
//       console.error('Error in verifyUser:', error);
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//   }