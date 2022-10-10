'use strict';

const { Router } = require('express');
const router = Router();

const exhibitionController = require('../controller/exhibition');

router.get('/exhibitions', exhibitionController.getExhibitions);
router.post('/exhibitions', exhibitionController.postExhibition);
router.delete('/exhibitions/:id', exhibitionController.deleteExhibition);

module.exports = router;
