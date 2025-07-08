import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {
    faker
} from "@faker-js/faker";
import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";

export const generateUsers = (count = 10) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const password = bcrypt.hashSync("password123", 10);
        users.push({
            _id: new mongoose.Types.ObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password,
            role: "user",
            pets: [] // opcional pero ya lo dejamos bien
        });
    }
    return users;
};

const petNames = ["Luna", "Max", "Rocky", "Bella", "Simba", "Coco", "Milo", "Nala", "Toby", "Lola"];

export const generatePets = (count = 20) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push({
            _id: new mongoose.Types.ObjectId(),
            name: petNames[i % petNames.length],
            specie: faker.animal.type(),
            age: faker.number.bigInt({
                min: 1,
                max: 15
            }),

        });
    }
    return pets;
};

export const generateData = async (userCount = 10, petCount = 20) => {
    if (userCount <= 0 || petCount <= 0) {
        throw new Error("Los parámetros deben ser mayores que cero.");
    }

    const userRepository = new UserRepository(userModel);
    const petRepository = new PetRepository(petModel);

    const users = generateUsers(userCount);
    const pets = generatePets(petCount);

    await userRepository.createMany(users);
    await petRepository.createMany(pets);

    console.log("✅ Datos mockeados y persistidos correctamente.");
};