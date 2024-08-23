import { Request, Response } from "express";
// import User from "../models/user.model.js";

const createUser = async (req: Request, res: Response) => {
    try {
        let d = req.body;
        return res.status(200).json({ message: "User created successfully!", data: d });
    } catch (error) {
        return res.status(404).json({ error: (error as Error).message });
    }
};

const getAllUser = async (req: Request, res: Response) => {
    try {
        let d = req.body;
        return res.status(200).json({ message: "User created successfully!", data: d });
    } catch (error) {
        return res.status(404).json({ error: (error as Error).message })
    }
}
const getOneUser = async (req: Request, res: Response) => {
    try {
        let d = req.body;
        return res.status(200).json({ message: "User created successfully!", data: d });
    } catch (error) {
        return res.status(404).json({ error: (error as Error).message })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        let d = req.body;
        return res.status(200).json({ message: "User created successfully!", data: d });
    } catch (error) {
        return res.status(404).json({ error: (error as Error).message })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        let d = req.body;
        return res.status(200).json({ message: "User created successfully!", data: d });
    } catch (error) {
        return res.status(404).json({ error: (error as Error).message })
    }
}

export default { createUser, getAllUser, getOneUser, updateUser, deleteUser };