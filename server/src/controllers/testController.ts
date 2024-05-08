import { Request, Response, NextFunction } from "express"

export const getTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("Get endpoint hit!")
}

export const postTest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const test = req.body

  res.status(200).json({ msg: "Post endpoint hit!", data: test })
}
