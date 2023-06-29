import express from 'express'

const userRoutes = express.Router()

const handleUserRegister = async (req, res) => {
    try {
      const { firstName, lastName, username, email, password } = req.body;
  
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  
      if (existingUser) {
        return res.status(400).json({ error: "Username or email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();
  
      res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      console.log("Error in user register: " + error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
  const handleUserLogin = async (req, res) => {
      try {
        const { username, password } = req.body;
    
        const user = await User.findOne({ username });
    
        if (!user) {
          return res.status(400).json({ message: "Username or password is incorrect" });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Username or password is incorrect" });
        }
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    
        res.json({ token, userID: user._id });
        console.log('user login sucsessfull')
      } catch (error) {
        console.log("Error in user login: " + error.message);
        res.status(500).json({ error: "Internal server error" });
      }
    };


userRoutes.post('/register', handleUserRegister)
userRoutes.post('/login', handleUserLogin)


export const verifyToken = (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
          jwt.verify(authHeader, "secret", (err) => {
            if (err) {
              return res.sendStatus(403);
            }
            next();
          });
        } else {
          res.sendStatus(401);
        }
      };
export default userRoutes