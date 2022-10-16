import { connection } from "../database/database.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import isUrl from "is-url";


export async function shortenerUrl (req, res) {
    const { url } = req.body;
    const { user } = res.locals;
    try{

        if(!isUrl(url)){
            return res.sendStatus(422);
        }

        const {rows: userId }= await connection.query(`SELECT * FROM users WHERE email LIKE $1;`, [user.email])

        const shortUrl = nanoid(8);
        await connection.query(`INSERT INTO links (url, "shortUrl", "usersId") VALUES ($1, $2, $3);`, [url, shortUrl, userId[0].id]);
        

        return res.status(201).send(shortUrl);
    }catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
}