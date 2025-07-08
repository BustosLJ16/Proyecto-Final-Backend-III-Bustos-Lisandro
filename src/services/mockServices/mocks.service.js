import Pet from "../../dao/Pets.dao.js";
import Users from "../../dao/Users.dao.js";
import PetRepository from "../../repository/PetRepository.js";
import UserRepository from "../../repository/UserRepository.js";
import { generatePets, generateUsers } from "../../utils/mocking.js";

//Creo Instancias de los Daos y los Repositorios
const userDao = new Users();
const petDao = new Pet();

const userRepository = new UserRepository(userDao);
const petRepository = new PetRepository(petDao);

const generateMockUsers = (count) => {
    return Array.from({ length: count }, () => generateUsers());
};

const generateMockPets = (count) => {
    return Array.from({ length: count }, () => generatePets());
};

const generateAndInsertData = async (userCount, petsCount) => {
    const users = generateMockUsers(userCount);
    const pets = generateMockPets(petsCount);

    const createdUsers = await userRepository.insertMany(users);
    const createdPets = await petRepository.insertMany(pets);

    return { users: createdUsers.length, pets: createdPets.length };
};

export default {
    generateMockUsers,
    generateMockPets,
    generateAndInsertData
};