const express = require("express");
const bodyParser=require("body-parser");
const itemClass=require(__dirname+"/custom.js");

const app = express();
const blogsItems = [];
let items = new itemClass("Suresh","Sussex result matter any end see. It speedily me addition weddings vicinity in pleasure. Happiness commanded an conveying breakfast in. Regard her say warmly elinor. Him these are visit front end for seven walls. Money eat scale now ask law learn. Side its they just any upon see last. He prepared no shutters perceive do greatest. Ye at unpleasant solicitude in companions interested.");
 blogsItems.push(items);

let contactItem = new itemClass("ContactMe","daksjdhasdkhaskldhakdjhKJDHAJKLDhaKJDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHKAJDHLAKHsjhaKJDHAHAKJhdaKJHDKAJ asjhdaskhajkDH AJDHKJHJK LAJKHD Adha hjkhk jkHD JKHKJAHsdjkaHJKDHAKJd hAJK  JKADH aJKDAJKHdjkaHDJKAdhAKJHDKJL");
let aboutItem =  new itemClass("About","fkhdkjfshdkfjl sdjfh ksjdlsjdfh skdjhfjksdhfksjadkjfsdahfkjsahjkfhaskjfhkj askjhfjkaskjsadhfkjsah dsj fhasdkjhfsakjlhfasjklh sjkahfjksadhfkjsda ksjadfhakjfhsajkddhfaskj ajkfsajkhfsakjha jksafhsajkdhfksajk fhasjkfhaksjdhf jkfhsakjhfjkashfk asjkh");
//set body-parser;
app.use(bodyParser.urlencoded({extended:true}));

//set attach view in Engine :
app.set("view engine",'ejs');

//user static file :
app.use(express.static('public'));


app.post("/addBlog",function(req,res){
let  title = req.body.blogtitle;
let blog = req.body.blogbody;
let newblog = new itemClass(title,blog);
blogsItems.push(newblog);
res.redirect('/');
});

app.get("/Contact",function(req,res){
res.render('contentRead',{data :contactItem});
});
app.get("/About",function(req,res){
  res.render('contentRead',{data :aboutItem});
});

app.get("/addBlog",function(req,res){

res.render('addContent');

});

app.get("/blogRead",function(req,res){
  console.log("request body :"+req.query.id);
   let tragetItem;
   for(let i = 0 ;i < blogsItems.length;i++){
       tragetItem = blogsItems[i];
       if(tragetItem.getContentId() == req.query.id){
          break;
        }
   }
    res.render('contentRead',{data :tragetItem});
});

//set main root path:
app.get('/',function(req,res){

  res.render('mainPage',{ListItems:blogsItems});
});

app.listen(process.env.PORT||3000,function(req,res){
console.log("Server is running...");

});
