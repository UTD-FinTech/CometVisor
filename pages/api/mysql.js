import {db, increment} from '../../lib/firebaseAdmin';

URL = "https://905vtz15nd.execute-api.us-east-1.amazonaws.com/prod/database?query="

export default async (req, res) => {
    if (req.method === 'GET') {
        let query = URL + encodeURIComponent(req.query.query);
        let data = await fetch(query).then(data => data.json());
        console.log(query)
        if ("message" in data) {
            res.status(500).json({ error: data });
        } else {
            res.status(200).json({data: data, url: query});
        }
    }
}
