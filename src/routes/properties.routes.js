import Router from 'express';
import * as propertiesCtrl from '../controllers/properties.controller.js';

const router = Router();
//router.post('/detail', propertiesCtrl.properties);
//router.post('/order/floor', propertiesCtrl.orderFloor);
router.post('/propertieslist', propertiesCtrl.propertiesList);
router.post('/detail', propertiesCtrl.promotion);
router.post('/property', propertiesCtrl.property);

export default router;
