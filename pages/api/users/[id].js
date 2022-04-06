import {db} from '../../../lib/firebaseAdmin';

export default async (req, res) => {
    if (req.method === 'GET') {
        await getUser(req, res);
    } else if (req.method === 'PUT') {
        await putUser(req, res);
    }
};

const getUser = async (req, res) => {
    try {
        const user =  db.collection('users').doc(req.query.id)
        const doc = await user.get();

        if (!doc.exists) {
            return res.status(404).send(`User ${ req.params.id } does not exist`)
        }

        return res.status(200).json(doc.data());
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}

const putUser = async (req, res) => {
    try {
        const user = db.collection('users').doc(req.query.id)
        const doc = await user.set(req.body);

        if (!doc.exists) {
            return res.status(404).send(`User ${ req.params.id } does not exist`);
        }

        return res.status(200).send(`Successfully updated user ${ req.params.id }`);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = db.collection('users').doc(req.query.id)
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
}