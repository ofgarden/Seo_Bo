'use strict';

const { Router } = require('express');
const router = Router();

const exhibitionController = require('../controller/exhibition');
const artworkController = require('../controller/artwork');

router.get('/exhibitions', exhibitionController.getExhibitions);
router.post('/exhibitions', exhibitionController.postExhibition);
router.delete('/exhibitions/:id', exhibitionController.deleteExhibition);

router.get('/artworks', artworkController.getArtworks);
router.post('/artworks', artworkController.postArtwork);
router.delete('/artworks', artworkController.deleteArtwork);

module.exports = router;
