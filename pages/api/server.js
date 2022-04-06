const express = require("express");
const admin = require("firebase-admin");
const { db } = require('../../lib/firebaseAdmin');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://server-auth-41acc.firebaseio.com",
});

const PORT = process.env.PORT || 3000;
const app = express();

const usersDB = db.collection('users');

app.use(express.json());

app.post('/users', async (req, res) => {
    const { uid } = req.body;
    try {
        const user = usersDB.doc(uid);
        await user.set({
            tickers: []
        });
        return res.status(201).send(`User ${ uid } successfully created`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});

app.get('/users', async (req, res) => {
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
});

app.get('/users/:id', async (req, res) => {
    try {
        const user =  db.collection('users').doc(req.params.id)
        const doc = await user.get();

        if (!doc.exists) {
            return res.status(404).send(`User ${ req.params.id } does not exist`)
        }

        return res.status(200).json(doc.data());
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const user = db.collection('users').doc(req.params.id)
        const doc = await user.set(req.body);

        if (!doc.exists) {
            return res.status(404).send(`User ${ req.params.id } does not exist`);
        }

        return res.status(200).send(`Successfully updated user ${ req.params.id }`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = db.collection('users').doc(req.params.id)
        const doc = await user.get();

        if (!doc.exists) {
            return res.status(404).send(`User ${ req.params.id } does not exist`);
        }

        await user.delete();
        return res.status(200).send(`Successfully deleted user ${ req.params.id }`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});

app.patch('/home', async (req, res) => {
    const { uid, tickers } = req.body;

    try {
        const user = db.collection('users').doc(uid)
        const doc = await user.get();

        if (!doc.exists) {
            return res.status(404).send(`User ${ uid } does not exist`);
        }

        await user.update({
            tickers: tickers
        });

        return res.status(200).send(`Successfully updated watchlist for user ${ uid }`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});


