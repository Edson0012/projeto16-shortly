import { connection } from "../database/database.js";
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

export async function redirectUser(req, res){
    const { shortUrl } = req.params;

    try{

        const{rows: userUrl}  = await connection.query(`SELECT links.url, links."visitCount" FROM links WHERE "shortUrl" = $1;`, [shortUrl])

        if(!userUrl[0].url){
            return res.status(404);
        }
        
         await connection.query(`UPDATE links SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1;`, [shortUrl])

        return res.redirect(userUrl[0].url)

    }catch(err){
        console.log(err);
        return res.status(500).send('server error');
    }
}

export async function deleteUrl (req, res){
    const { id } = req.params;
    const { user } = res.locals;

    try{

        const {rows: selectId} = await connection.query(`
        SELECT * FROM links JOIN users ON users.id = links."usersId" WHERE links.id = $1;`
        , [id])

        if(user.email !== selectId[0].email){
            return res.sendStatus(401)
        }

        if(!selectId[0].shortUrl){
            return res.sendStatus(404);
        }
        
        await connection.query(`DELETE FROM links WHERE id = $1;`, [id]) 

        return res.sendStatus(204);
    }catch(err){
        console.log(err);
        return res.status(500).send('server error');
    }
}