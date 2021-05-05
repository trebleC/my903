const Router = require('koa-router');
const router = new Router();
const context = require('./context');
const request = require('../util/request');


router.get('/getNewSongs',context.getNewSongs)
router.get('/rankingList',context.getRankingList)


module.exports = router;
