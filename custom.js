
class blogItems{
constructor(nameOfBlog,content){
this.nameOfBlog = nameOfBlog;
this.content = content;
this.contendId = Date.now();
}
getContent(){
  return this.content;
}
getItemName(){
  return this.nameOfBlog;
  }
getContentId(){
  return this.contendId;
}
getContentBrif(){
 let brif = "";
 if(this.content.length >100){
   brif = this.content.substring(0,99);
 }else{
   brif = this.content;
 }
  return brif;
}


}
module.exports= blogItems;
