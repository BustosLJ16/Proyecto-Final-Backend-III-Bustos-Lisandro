import { Router } from "express";
import mockController from "../../controllers/mocksControllers/mock.controller.js";
import { generateData } from "../../utils/mocking.js";

const router = Router();

router.get('/mockingpets', mockController.getMockingPets);
router.get('/mockingusers', mockController.getMockingUsers);
router.post('/generateData',async (req,res) => {
    try {
        await generateData();
        res.json({message: 'Datos generados y guardados con éxito.'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error generando los datos.'})
    }
});

export default router;