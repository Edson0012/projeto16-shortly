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

        const shortUrl = nanoid(8);
        await connection.query(`INSERT INTO links (url, "shortUrl", "usersId") VALUES ($1, $2, $3);`, [url, shortUrl, user.id]);
        
        return res.status(201).send(shortUrl);
    }catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
}

export async function sendUrlShortener (req, res){
    const { id }= req.params;

    try{

        const {rows: userUrl} = await connection.query(`SELECT links.id, links."shortUrl", links.url FROM links WHERE id = $1;`, [id])

        if(!userUrl[0]){
            return res.sendStatus(404)
        }

        return res.status(200).send(userUrl[0]);
    }catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
}