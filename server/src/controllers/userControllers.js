import User from '../model/User.js';

export const handleListUsers = async (req,res) => {
    try {
        const user = await User.find();
        console.log(user)
        res.send(user)
    } catch(error) {
        console.log('error LIST USER:', error.message);
        res.send('Error! Cannot List the user.' + error.message)
    }
 
}

export const handleAddUsers = async (req,res) => {
    console.log(req.body);
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.send('this user is inserted to db')
    } catch(error) {
        console.log('error ADDING USER:', error.message);
        res.send('Error! Cannot Add the user.' + error.message)
    }
    
    
}