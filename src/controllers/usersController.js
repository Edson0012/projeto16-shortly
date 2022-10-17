import { connection } from "../database/database.js";

export async function userData (req ,res) {
    const { user } = res.locals;
    console.log(user);

    if(!user){
        return res.sendStatus(404);
    }

    try{

        const {rows: data} = await connection.query(`SELECT users.id, users.name AS name, SUM("visitCount") AS "visitCount", 
        json_agg(json_build_object( 
          'id', links.id, 
          'shortUrl', links."shortUrl",
          'url', links.url,
          'visitCount', links."visitCount"
          )) AS "shortenedUrls"
        FROM links JOIN users ON users.id = links."usersId"
        WHERE users.id = $1
        GROUP BY users.id;
         `, [user.id]) 


        return res.status(200).send(data[0]);
    }catch(err){
        console.log(err)
        return res.status(500).send("server error")
    }
}