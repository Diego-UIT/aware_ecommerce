const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({success: false, message: 'internal server error'});
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});

        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_SEC,
                    {expiresIn:"3d"}
                );
                const { password, ...others } = user._doc;  
                res.status(200).json({...others, accessToken});
            } else {
                return res.status(400).json({success: false, message: 'Wrong password'})
            }
        } else {
            return res.status(400).json({success: false, message: 'Wrong username'})
        }
    } catch(err) {
        res.status(500).json({success: false, message: 'internal server error'});
    }
});

module.exports = router;