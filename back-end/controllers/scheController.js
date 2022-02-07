const express = require("express");
const timeslots = express.Router();
const {
    fetchAllApps,
    fetchApp,
    newApp,
    updateApp,
    deleteApp, 

} = require("../queries/scheQueries");

timeslots.get("/", async (req,res) => {
    const allApps = await fetchAllApps();
    res.json(allApps);
});

timeslots.get("/:id", async (req,res) => {
    const {id} = req.params;
    const app = await fetchApp(id);
    res.json(app);
});

timeslots.post("/", async (req,res) => {
    const createApp = await newApp();
    res.json(createApp);
});

timeslots.put("/:id", async (req,res) => {
    const {id} =req.params;
    const editApp = await updateApp(id, req.body);
    res.json(editApp);
});

timeslots.delete("/:id", async (req,res) => {
    const {id} = req.params;
    const cancelApp = await deleteApp(id);
    res.json(cancelApp);
});



module.exports = timeslots;

