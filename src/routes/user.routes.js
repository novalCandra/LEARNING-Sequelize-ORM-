const express = require("express");

const { index, detailUsers, deleteUsers, createUsers, updateUsers, ProfileUsers } = require("../controller/user.controller.js");
const { verifyToken } = require("../middleware/auth.js");

const router =
    express.Router();

router.get(
    "/profile",
    verifyToken,
    ProfileUsers
);
router.get(
    "/",
    verifyToken,
    index
);
router.get(
    "/:id",
    verifyToken,
    detailUsers
);
router.post(
    "/",
    verifyToken,
    createUsers
);
router.patch(
    "/:id",
    verifyToken,
    updateUsers
);
router.delete(
    "/:id",
    verifyToken,
    deleteUsers
);

module.exports = router;