import { connection } from "../database/database.js";


export async function listRanking(req, res){
    try{

        const { rows: rankingUrls} = await connection.query(`SELECT 
        users.id, 
        users.name, 
        COUNT(links."shortUrl") AS "linksCount", 
        SUM(links."visitCount") AS "visitCount" 
        FROM links
        JOIN users ON links."usersId" = users.id
        GROUP BY users.id
        ORDER BY "visitCount" DESC
        LIMIT 10;`)

        return res.status(200).send(rankingUrls)

    }catch(err){
        console.log(err)
        return res.status(500).send('server error')
    }
}