const express = require('express');
const router = express.Router();

const data=[
    {
        id:1,
        name:"郭德纲历年相声2009",
        type:"每日精选",
        way:"喜马拉雅",
        showNum:72,
        cover:"http://fdfs.xmcdn.com/group31/M07/1E/F2/wKgJX1mBbh3gTJNXAAAs3sDYK_I735_mobile_large.jpg",
        price:0,
        sales:34,
        state:"已上架"
    } 
];
const getAlbumList=(req,res,next)=>{
  res.locals.addResult=data;
  next();
}
router.post('/getAlbumList', getAlbumList, (req, res, next) => {
  res.json(res.locals.addResult);
});
module.exports = router;