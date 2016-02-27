var render=function(template, additionaldata, keep){
  //console.log(template);
  var templateData={};
  if(additionaldata){
    templateData=additionaldata;
  };
  templateData.standard=template;
  templateData.credentials=login;
  var html=AppTemplate.main(templateData);
  //console.log(html);
  var node=$.parseHTML(html);//converts into dom nodes
  if(typeof componentHandler !== 'undefined'){
    componentHandler.upgradeElements(node);
  }
  if(!keep){
    body.innerHTML="";
  }
  $(body).append(node);

  var n=node.length;
  return node;
}
Path.map("#/trades").to(function(){
  if(kraken.assetBases){
    var n=kraken.assetBases.length;
    var currencies=[];
    var crypto=[];
    for(var i=0; i<n; ++i){
      if(kraken.assetBases[i].numeraireKey.substring(0, 1)==='Z'){
        currencies.push(kraken.assetBases[i]);
      }
      else{
        crypto.push(kraken.assetBases[i]);
      }
    }
    render('trades', {currency:currencies, crypto:crypto, cryptofunction:'onTrade'});
  }
  else{
    render('trades');
  }
});
Path.map("#/portfolio").to(function(){
  render('portfolio', {numeraire:kraken.assets?kraken.assets[kraken.numeraire].altname:kraken.numeraire});
  portfolioLoad();
});
Path.map("#/settings").to(function(){
  /*var n=kraken.assetBases.length;
  for(var i=0; i<n; ++i){
    if(kraken.assetBases[i].numeraireKey===kraken.numeraire){
      kraken.assetBases[i].selected="selected";
    }
    else{
      kraken.assetBases[i].selected="";
    }
  }*/
  render('settings', {function:'submitSettings', selectFunction:'selectNumeraire', chosenNumeraire:kraken.assets?kraken.assets[kraken.numeraire].altname:'', numeraire:kraken.assetBases, numFunction:'chooseNumeraire'});
  var btn=document.getElementById('selectNumeraire');
  var mnel=document.getElementById('dropdown');
  if(btn){
    btn.addEventListener('click', mnel.MaterialMenu.handleForClick_.bind(mnel.MaterialMenu)); //to get around menu oddity
    btn.addEventListener('keydown', mnel.MaterialMenu.handleForKeyboardEvent_.bind(mnel.MaterialMenu)); //to get around menu oddity
  }


});
Path.root("#/portfolio");
Path.listen();
