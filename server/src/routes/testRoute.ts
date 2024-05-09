import express from "express"
import { getTest, postTest } from "../controllers/testController"

const router = express.Router()

router.get("/get", getTest)
router.post("/post", postTest)

export default router
