var modal={
  name:'modal',
  function:'closeModal',
  id:'pwdModal',
  title:'',
  message:'',
  url:'',
  //additionalOptions:''
};
var closeModal=function(self){
  var value=sha256_digest(document.getElementById(self).value);
  var node=document.getElementById(modal.id);
  node.close();
  node.remove();
  var data={};
  if(login.key){
    data.key=login.key;
    data.secret=login.secret;
  }
  data.username=login.username;
  data.password=value;
  //console.log(data);
  $.ajax({
    url:modal.url, //set by login.js
    type:'POST',
    data:data,
    success:function(data){
      //console.log("success");
      var route = Path.match(Path.routes.current,true);
      route.run();
    }
  });
  return false;
}
