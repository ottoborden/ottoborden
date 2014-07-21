/*
    Infinite scroll and expand (or overlay) stories into current page
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('reader', {stories: [{
            'title': 'Story One',
            'date': 'July 21 2014',
            'subtitle': 'What ever happened to all the fun in the world?',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec turpis scelerisque, porttitor ante a, ultrices purus. Sed vel vestibulum purus. Nulla facilisi. Cras id volutpat velit. Pellentesque gravida nisl vitae dolor adipiscing rhoncus. Pellentesque dapibus facilisis cursus. Vivamus sagittis mauris eget porttitor consectetur. Praesent tincidunt porttitor sodales.'
        }
    ]});
});

module.exports = router;
