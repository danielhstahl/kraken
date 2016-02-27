var submitSettings=function(element){
  var value=document.getElementById(element.dataset.id).value;
  //var key=document.getElementById('key').value;
  //var secret=document.getElementById('secret').value;
  if(value){
    login[element.dataset.id]=value;
    //login.secret=secret;
    //console.log({key:key, secret:secret, username:login.username});
    modal.title='Enter Password';
    modal.message='Enter password to confirm key';
    modal.url='/settings';
    modal.function='closeModalPwd';
    //modal.additionalOptions={key:key, secret:secret};
    var node=render('modal', modal, true);
    node=node[1];
    var buttons=node.getElementsByClassName('submit');
    buttons[0].focus();
    node.showModal();
    /*$.ajax({
      url:'/settings', //set by login.js
      type:'POST',
      data:{key:key, secret:secret, username:login.username},
      success:function(data){
        console.log("success");
      }
    });*/
  }

}
var selectNumeraire=function(element){
  //console.log(element.options[element.selectedIndex].value);
  //console.log(element.options[element.selectedIndex]);
  kraken.numeraire=element.options[element.selectedIndex].value;
}
