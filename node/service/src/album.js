const express = require('express');
const router = express.Router();
const albumModel=require('../mysql/album.model');

const getAlbumList=(req,res,next)=>{
  albumModel.Init();
 // res.locals.addResult=albumModel.select(req.body.page);
 
 // next();
}
router.post('/getAlbumList', getAlbumList, (req, res, next) => {
  res.json(res.locals.addResult);
});
module.exports = router;