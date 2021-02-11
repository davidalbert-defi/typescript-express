import { Router } from 'express';
import {PetController} from '../controllers/PetController';

const router = Router();

router.get('/', PetController.index);

router.get('/signup', PetController.index);
router.post('/signup', PetController.index);

export default router;
