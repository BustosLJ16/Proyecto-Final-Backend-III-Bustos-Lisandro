import mocksService from "../../services/mockServices/mocks.service.js";

const getMockingPets = (req, res) => {
    const pets = mocksService.generateMockPets(50);
    res.json(pets);
};

const getMockingUsers = (req, res) => {
    const count = parseInt(req.query.count) || 50
    const users = mocksService.generateMockUsers(count);
    res.json(users);
}

const generateData = async (req, res) => {
    const { users, pets } = req.body;
    const result = await mocksService.generateAndInsertData(users, pets);
    res.json(result);
}

export default { getMockingPets, getMockingUsers, generateData };