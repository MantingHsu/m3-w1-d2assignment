const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration Form', errors: [], data: {} });
});

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('form', {
                title: 'Registration Form',
                errors: errors.array(),  
                data: req.body,
            });
        }

        res.send('Thanks for registering!');
    }
);

module.exports = router;
