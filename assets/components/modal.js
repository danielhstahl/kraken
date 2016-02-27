var modal={
  name:'modal',
  function:'closeModalPwd',
  id:'pwdModal',
  title:'',
  message:'',
  url:''//,
  //additionalOptions:''
};

var closeModalPwd=function(self){
  var value=sha256_digest(document.getElementById(self).value);
  var node=document.getElementById(modal.id);
  node.close();
  node.remove();
  var data={};
  /*if(modal.additionalOptions){
    data=modal.additionalOptions
  }*/
  if(login.key){
    data.key=login.key;
  }
  if(login.secret){
    data.secret=login.secret;
  }
  data.username=login.username;
  data.password=value;
  //console.log(data);
  $.ajax({
    url:modal.url,
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
