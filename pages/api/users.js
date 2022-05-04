import {db} from '../../lib/firebaseAdmin';

export default async (req, res) => {
    if (req.method === 'POST') {
        await postUser(req, res);
    } else if (req.method === 'GET') {
        await getUser(req, res);
    } else if (req.method === 'PATCH') {
        await patchUser(req, res);
    }
};

const postUser = async (req, res) => {
    const { uid } = req.body;
    console.log(uid);
    try {
        const usersDB = db.collection('users');
        const user = usersDB.doc(uid);
        await user.set({
            tickers: [],
            positions: []
        });
        return res.status(201).send(`User ${ uid } successfully created`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}

const getUser = async (req, res) => {
    try {
        const users = await db.collection('users').get();
        let userData = [];

        users.forEach(doc => {
            const user = {uid: doc.id};
            const data = {data: doc.data()};

            let userDataObject = Object.assign(user, data);
            userData.push(userDataObject);
        });

        return res.status(200).json(userData);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}

const patchUser = async (req, res) => {
    const { uid, tickers, positions } = req.body;
    let updateObject = {};

    if (tickers) {
        updateObject.tickers = tickers;
    }

    if (positions) {
        updateObject.positions = positions;
    }

    try {
        const user = db.collection('users').doc(uid);
        const doc = await user.get();

        if (!doc.exists) {
            // create doc
            db.collection("users").doc(uid).set(updateObject)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }

        await user.update(updateObject);

        return res.status(200).send(`Successfully updated watchlist for user ${ uid }`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}