var login={
  name:'login',//introspection?
  function:'submitLogin',
  key:'',
  secret:'',
  username:''
};
var submitLogin=function(e){
  var inputs=e.querySelectorAll('input');
  var n=inputs.length;
  var data={};
  for(var i=0; i<n; i++){
    var id=inputs[i].id;
    var value=inputs[i].value;
    if(id==='password'){
      value=sha256_digest(value);
    }
    data[id]=value;
  }
  login.username=data.username;
  $.ajax({
    url:'/login',
    type:'POST',
    data:data,
    success:function(data){
      console.log(data);
      if(data.message){
        modal.title=data.title;
        modal.message=data.message;
        modal.url=data.url;
        modal.function='closeModalPwd';
        var node=render('modal', modal, true);
        node=node[1];
        var buttons=node.getElementsByClassName('submit');
        buttons[0].focus();
        node.showModal();
      }
      else{
        //console.log("got here");
        login.key=data.key;
        login.secret=data.secret;
        var route = Path.match(Path.routes.current,true);
        route.run();
      }

    }
  });
  return false;

}
