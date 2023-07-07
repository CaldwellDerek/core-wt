const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        if (req.session){
            res.status(200).json(req.session)
        } else {
            res.status(404).json({ msg: "No session data exists." });
        }
    } catch (error) {
        res.status(500).json({ msg: "An error has occurred!" });
    }
})

module.exports = router;