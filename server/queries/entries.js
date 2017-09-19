import db from '../db';

export const getEntries = (req, res, next) =>
    db.any('select * FROM entries WHERE username=${username} ORDER BY modified desc', {
        username: req.headers.username,
    }).then(data =>
        res.status(200)
            .json({
                status: 'success',
                data,
                message: 'Retrieved entry',
            })
        ).catch(err => next(err));

export const getEntry = (req, res, next) => {
    const { id } = req.params;
    db.one(`select * from entries WHERE id = ${id} AND username=${username}`, {
        username: req.headers.username,
    }).then(data => {
        res.status(200)
            .json({
                status: 'success',
                data,
                message: 'Retrieved entry',
            });
    }).catch(err => next(err));
};

export const createEntry = (req, res, next) => {
    const { username } = req.headers;
    db.none('insert into entries(username) values($1)', [username])
        .then(() => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one entry',
                });
        }).catch(err => next(err));
};

export const updateEntry = (req, res, next) => {
    if (req.body.update.username !== req.headers.username) {
        res.status(400).json({
            status: 'failure',
            message: 'You cannot update notes that are not yours',
        });
    }
    const { roi, learnings } = req.body.update;
    const { username } = req.headers;
    db.none(
        'update entries set roi=$1, learnings=$2 where id=$3',
        [roi, learnings, id]
    ).then(() => {
        res.status(200)
            .json({
                status: 'success',
                message: 'Updated entry',
            });
    }).catch(err => next(err));
};

export const removeEntry = (req, res, next) => {
    const id = parseInt(req.params.id);
    const username = req.headers.username;
    db.result('delete from entries where id = ${id} AND username = ${username}', {
        id,
        username,
    }).then(result => {
        res.status(200)
            .json({
                status: 'success',
                message: `Removed ${result.rowCount} entry`,
            });
    }).catch(err => next(err));
};