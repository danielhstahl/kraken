var kraken={
  assets:'',
  assetPairs:'',
  assetBases:'',
  assetPrices:'',
  //balanceInNumeraire:'',
  //balance:'',
  tickerArray:'',
  numeraire:'ZUSD'//Z denotes real world, X cryptocurrency.  Should store this in the db
};
var convertNumeraire=function(numeraire){
  var exchange=function(rate){
    return 1/rate;
  }
  if(numeraire.substring(0, 1)==='Z'){//then real world currency
    exchange=function(rate){
      return rate;
    }
  }
  //console.log(exchange);
  var dt=kraken.assetPairs;
  //console.log(dt);
  if(portfolio.balance){
    if(!portfolio.balanceInNumeraire){
      portfolio.balanceInNumeraire={};
    }
    for(key in dt){
      if(dt[key].quote===numeraire&&kraken.assetPrices[key]){
        portfolio.balanceInNumeraire[dt[key].base]=exchange(kraken.assetPrices[key].c[0])*portfolio.balance[dt[key].base];//get current exchange rate!
      }
    }
    /*if(Path.routes.current==='#/portfolio'){
      var route = Path.match(Path.routes.current,true);
      route.run();
    }*/

  }
}
var getPortfolio=function(){
  if(kraken.assetPairs){
    $.ajax({
      url:'/getPrices', //
      type:'POST',
      data:{assetPairs:kraken.tickerArray},
      success:function(data){
        kraken.assetPrices=data;
        convertNumeraire(kraken.numeraire);
        //console.log(portfolio.balanceInNumeraire);
      }
    });
  }
}
setInterval(getPortfolio, 60000);//every minute

$.ajax({
  url:'/getAssets', //
  type:'POST',
  success:function(data){
    var assetBases=[];
    var ap=data.assets;
    for(key in ap){
      if(key!=='KFEE'){ //not equal to the "fee"
        assetBases.push({numeraireKey:key, numeraireLabel:ap[key].altname});
      }
    }
    kraken.assetBases=assetBases;
    kraken.assets=data.assets;
    kraken.assetPairs=data.assetPairs;
    kraken.tickerArray=Object.keys(data.assetPairs);
    getPortfolio();
    //if(Path.routes.current==='#/settings'){
      var route = Path.match(Path.routes.current,true);
      route.run();
    //}
  }
});
