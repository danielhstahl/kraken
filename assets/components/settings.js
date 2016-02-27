var submitSettings=function(element){
  var value=document.getElementById(element.dataset.id).value;
  //var key=document.getElementById('key').value;
  //var secret=document.getElementById('secret').value;
  if(value){
    login[element.dataset.id]=value;
    modal.title='Enter Password';
    modal.message='Enter password to confirm key';
    modal.url='/settings';
    modal.function='closeModalPwd';
    var node=render('modal', modal, true);
    node=node[1];
    var buttons=node.getElementsByClassName('submit');
    buttons[0].focus();
    node.showModal();

  }

}
var selectNumeraire=function(element){
  console.log(element);
  //console.log(element.options[element.selectedIndex].value);
  //console.log(element.options[element.selectedIndex]);
  kraken.numeraire=element.dataset.value;
  var btn=document.getElementById('selectNumeraire');
  btn.value=kraken.assets[kraken.numeraire].altname;
  $.ajax({
    url:'/setNumeraire', //set by login.js
    type:'POST',
    data:{numeraire:kraken.numeraire, username:login.username},
    success:function(data){
      console.log("success");
    }
  });
}
