import { connection } from "../database/database.js";
import bcrypt from 'bcrypt';
import { v4 as uuid} from "uuid";

export async function signUp(req, res ){
    const {name, email, password, confirmPassword} = req.body;
    console.log(req.body);
    try{

        console.log('oi')
       if(password !== confirmPassword ){
            return res.sendStatus(422)
        } 

        const userExist = await connection.query(`SELECT * FROM users WHERE email LIKE $1`, [email]);

        if(userExist.rows[0]){
            return res.sendStatus(409)
        } 

        const passwordHash = bcrypt.hashSync(password, 10)

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, passwordHash]) 

        return res.sendStatus(201);
    }catch(err){
        return res.status(500).send('server error ')
    }
};

export async function signIn (req, res){};

