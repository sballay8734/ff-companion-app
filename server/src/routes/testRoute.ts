import express from "express"
import { getTest, postTest } from "../controllers/testController"

const router = express.Router()

router.get("/test", getTest)
router.post("/test", postTest)

export default router
