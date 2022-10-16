import { connection } from "../database/database.js";
import bcrypt, { hash } from 'bcrypt';
import jwt from "jsonwebtoken";

export async function signUp(req, res ){
    const {name, email, password} = req.body;
    try{

        const { rows: userExist } = await connection.query(`SELECT * FROM users WHERE email LIKE $1;`, [email]);

        if(userExist.length > 0){
            return res.sendStatus(409)
        } 

        const salt = await bcrypt.genSalt();

        const passwordHash = bcrypt.hashSync(password, salt);

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, passwordHash]); 

        return res.sendStatus(201);

    }catch(err){
        return res.status(500).send('server error ')
    }
};

export async function signIn (req, res){
    const user = req.body;

    try{

        if(user.email === '' || user.password === ''){
            return res.sendStatus(422)
        }

        const { rows: userExist } = await connection.query(`SELECT * FROM users WHERE email LIKE $1;`, [user.email])

        if(!bcrypt.compareSync(user.password, userExist[0].password)){
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: userExist[0].id, email: user.email}, process.env.SECRET_KEY, {expiresIn: '7d'})

        return res.status(200).send({name: userExist[0].name ,token})
    }catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
};

