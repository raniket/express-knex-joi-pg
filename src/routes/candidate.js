const express = require('express');
const router = express.Router();
const { candidateValidator } = require('../middleware/validators');
const CandidateController = require('../controllers/candidate');

router.get('/', CandidateController.getCandidates);
router.get('/:id', CandidateController.getCandidate);
router.post('/', candidateValidator.postCandidate, CandidateController.postCandidate);
router.put('/:id', candidateValidator.putCandidate, CandidateController.putCandidate);
router.delete('/:id', CandidateController.deleteCandidate);

module.exports = router;
