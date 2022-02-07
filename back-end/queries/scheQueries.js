const timeslots = require("../controllers/scheController");
const db = require("../db/dbConfig");

const fetchAllApps = async () => {
    try {
        const allApps = await db.any("SELECT * FROM timeslots");
        return {success: true, payload : allApps};
    } catch (err) {
        console.log(err)
        return {success: false, payload: err}
    }
};

const fetchApp = async (id) => {
    try {
        const app = await db.one(
            "SELECT * FROM timeslots WHERE id=$1",
            id
        );
        return {success: true, payload: app}
    } catch (err) {
        return {success: true, payload: err};
    }
};

const newApp = async (app) => {
    const {doctor, reason_for_visit, date} = app;
    try {
        const createApp = await db.one(
            `INSERT INTO timeslots (
                doctor,
                reason_for_visit,
                date
            ) VALUES ($1,$2,$3) RETURNING *`,
            [doctor, reason_for_visit, date]
        );
        return {success: true, payload: createApp};
    }catch (err) {
        console.log(err);
        return {success: false, payload: err};
    }
};

const updateApp = async (id, app) => {
    const {doctor, reason_for_visit, date} = app;
    try{
        const editApp = db.one(
            `UPDATE timeslots SET 
            doctor=$1,
            reason_for_visit=$2
            date=$3
            WHERE id=$4 RETURNING *`,
            [doctor, reason_for_visit, date, id]
        );
        return {success: true, payload: editApp};
    } catch (err) {
        return {success: false, payload: err};
    }
};

const deleteApp = async (id) => {
    try {
        const cancelApp = await db.one(`DELETE FROM timeslots WHERE id=$1 RETURNING *`, id);
        return {success: true, payload: cancelApp}
    } catch (err) {
        console.log(err);
        return {success: fasle, payload: err}
    }
};

module.exports = {
    fetchAllApps,
    fetchApp,
    newApp,
    updateApp,
    deleteApp
};