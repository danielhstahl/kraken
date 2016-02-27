var portfolio={
  balanceInNumeraire:'',
  balance:''
};
var createChart=function(data){
  //console.log(data);
  $('#container').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,

      },
      exporting:{
        enabled:false
      },
      credits:{
        enabled:false
      },
      title: {
        text: '',
        align: 'center'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0px 1px 2px black'
            }
          },
          //center: ['50%', '75%']
          //center: ['50%', '100%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Portfolio',
        innerSize: '50%',
        data: data
      }]
  });
}
var portfolioLoad=function(){
  //console.log(login);
  if(login.key){
    $.ajax({
      url:'/kraken', //set by login.js
      type:'POST',
      data:{key:login.key, secret:login.secret, rType:'Balance', rData:null},
      success:function(data){
        portfolio.balance=data;
        convertNumeraire(kraken.numeraire);//defined in kraken.js
        var chartData=[];
        //console.log(portfolio.balanceInNumeraire);
        for(key in portfolio.balanceInNumeraire){
          chartData.push({name:key, y:portfolio.balanceInNumeraire[key]||0});
        }
        createChart(chartData);
        //console.log(portfolio.balanceInNumeraire);
        //console.log(portfolio.balance);
      }
    });
  }
}
