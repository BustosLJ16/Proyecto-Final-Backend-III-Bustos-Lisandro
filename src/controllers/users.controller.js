import {
    usersService
} from "../services/index.js"

const getAllUsers = async (req, res) => {
    const users = await usersService.getAll();
    res.send({
        status: "success",
        payload: users
    })
}

const getUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).send({
        status: "error",
        error: "User not found"
    })
    res.send({
        status: "success",
        payload: user
    })
}

const createUser = async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        password
    } = req.body;

    // Validación que todos existan antes
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({
            status: "error",
            message: "Faltan campos obligatorios"
        });
    }

    const result = await usersService.create({
        first_name,
        last_name,
        email,
        password
    });
    res.status(201).send({
        status: "success",
        payload: result
    });
};

const updateUser = async (req, res) => {
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).send({
        status: "error",
        error: "User not found"
    })
    const result = await usersService.update(userId, updateBody);
    res.send({
        status: "success",
        message: "User updated"
    })
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({
        status: "success",
        message: "User deleted"
    })
}

export default {
    deleteUser,
    getAllUsers,
    createUser,
    getUser,
    updateUser
}