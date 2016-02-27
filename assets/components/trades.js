var tradeCrypto=function(labelSell, labelBuy){
  var data={};
  data.rType='AddOrder';
  //var pair="X"+labelSell+"X"+labelBuy;
  var pair=labelSell+labelBuy;
  var typeOrder='sell';
  console.log(pair);
  if(!kraken.assetPairs[pair]){
    //pair="X"+labelBuy+"X"+labelSell;
    pair=labelBuy+labelSell;
    console.log(pair);
    typeOrder='buy';
  }
  if(!kraken.assetPairs[pair]){
    console.log("problem1");
  }
  else{
    modalTrade.title='Amount';
    modalTrade.message='Amount to buy (in '+kraken.numeraire+')';
    modalTrade.url='/kraken';
    modalTrade.function='closeModalTrade';
    modalTrade.key='volume';
    modalTrade.additionalOptions={pair:pair, type:typeOrder, ordertype:'market'};
    var node=render('modalTrade', modalTrade, true);
    node=node[1];
    var buttons=node.getElementsByClassName('submit');
    buttons[0].focus();
    node.showModal();

    //data.rData={pair:pair, type:typeOrder, ordertype:'market'};
    //console.log(data);
    /*$.ajax({
      url:'/kraken',
      type:'POST',
      data:data,
      success:function(data){
        //console.log("success");
        //var route = Path.match(Path.routes.current,true);
        //route.run();
      }
    });*/
  }
}
var onTrade=function(){
  labelSell=document.getElementById('sellcrypto').value;
  labelBuy=document.getElementById('buycrypto').value;
  tradeCrypto(labelSell, labelBuy);
}
