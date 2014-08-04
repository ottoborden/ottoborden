/*
    Infinite scroll and expand (or overlay) stories into current page
*/
var express = require('express');
var router = express.Router();
var FeedParser = require('feedparser');
var http = require('http');
var S = require('string');
var moment = require('moment');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res) {
    'use strict';
    var feedMeta,
        stories = [];
    http.get('http://www.kurzweilai.net/news/feed/atom', function(r) {
        r.pipe(new FeedParser({
            'normalize': true
        }))
            .on('error', function(err) {
                console.log('Failed to retrieve RSS.');
            })
            .on('meta', function(meta) {
                feedMeta = meta;
            })
            .on('readable', function() {
                var stream = this,
                    item;
                while(item = stream.read()) {
                    var story = {
                        'title': S(S(item.title).stripTags().s).decodeHTMLEntities().s,
                        'summary': S(S(item.summary).stripTags().s).decodeHTMLEntities().s,
                        'date': moment(item.date).toString(),
                        'link': item.link,
                        'guid': item.guid,
                        'author': item.author,
                        'comments': item.comments,
                        'from': item.meta.title,
                        'fromDescription': item.meta.description,
                        'fromUrl': item.meta.link
                    }
                    stories.push(story);
                }
            })
            .on('end', function() {
                // Assemble feed meta data?
                res.render('reader', {stories: stories});
                //res.send(stories);
            });
    });
    //res.render('reader', {stories: stories});
});

module.exports = router;
