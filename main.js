async function SearchData() {

  let input = document.getElementById('searchinp').value;


  let assetdataresponse = await fetch("https://data.lemon.markets/v1/instruments?search=" + input, 
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })

  let assetdataresult = await assetdataresponse.json();

  let title = assetdataresult.results[0].title;

  let name = assetdataresult.results[0].name;

  let isin = assetdataresult.results[0].isin;

  let searchtitle = document.getElementById('searchtitle');
  let searchname = document.getElementById('searchname');
  let searchisin = document.getElementById('searchisin');

  // Title
   searchtitle.innerHTML = title;
  // Name
  searchname.innerHTML = 'Name: ' + name;
  // Isin
  searchisin.innerHTML = 'Isin: ' + isin 


  let day3 = new Date(Date.now() - 86400000 * 3); // that is: (24 * 60 * 60 * 1000) *3

  const isodate3 = day3.toISOString();

  let qoutesyesterday2resp = await fetch("https://data.lemon.markets/v1/quotes?isin=" + isin + "&from=" + isodate3, 
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })
  let qoutesyesterday2res = await qoutesyesterday2resp.json();
 // console.log(qoutesyesterday3res);


  let day2 = new Date(Date.now() - 86400000 * 2); // that is: (24 * 60 * 60 * 1000) *2

  const isodate2 = day2.toISOString();

   // The Data from the day before yesterday
   let qoutesyesterdayresp = await fetch("https://data.lemon.markets/v1/quotes?isin=" + isin + "&from=" + isodate2, 
   {
     headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
   })
   let qoutesyesterdayres = await qoutesyesterdayresp.json();
   //console.log(qoutesyesterday2res);

    // Latest Qoutes
  let latesqoutesresp = await fetch("https://data.lemon.markets/v1/quotes/latest?isin=" + isin ,
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })


  let latesqoutesres = await latesqoutesresp.json();
  console.log(latesqoutesres);

  // Chart
  let myChartObject = document.getElementById('mychart').getContext('2d');

  yesterday2a = qoutesyesterday2res.results[0].a;
  yesterdaya = qoutesyesterdayres.results[0].a;
  latesta = latesqoutesres.results[0].a; 

  // TODO Chartdaten ordentlich füllen
  let chart = new Chart(myChartObject, {
    type: 'line',
    data: {
    labels:["Day before yesterday", "Yesterday", "Today"],
      datasets: [{
        label: "1",
        backgroundColor: 'blue',
        data: [yesterdaya, yesterdaya, latesta]
      }]
    }
  })


  let btn = document.getElementById('searchbtn');

  btn.addEventListener('click', function() {

    document.getElementById('searchresults').style.display = 'block'
    
    document.getElementById('mychart').remove();
    let myChartObject = document.createElement('canvas');
    myChartObject.setAttribute('id', 'mychart');
    let chartcontainer = document.getElementById('chartcont');
    chartcontainer.appendChild(myChartObject);

    // TODO FIX COLOR BUG   
    if (latesta < yesterday2a) {
      console.log('lower');
      chart.data.datasets[0].backgroundColor[0] = 'red';

    } else if (latesta >= yesterday2a) {
      console.log('higher')
     chart.data.datasets[0].backgroundColor[0] = 'green';

    }
    
    
  })
}

SearchData();

// TODO Dashboard Trade Postions
/*
async function Trading() {
/*let accresponse = await fetch("https://paper-trading.lemon.markets/v1/account",
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhyeEpYUE5xZDcyRzE3Y1MzQjAxbGhiRjRiIiwibW9kZSI6InBhcGVyIn0.0fNLKC_TE8TbYSDwIKtBtNRyZr5hXc8rDAwalEIHVDE' }
  }) 
  
  let accresult = await accresponse.json();
  //console.log(accresult);

  let greeting = document.getElementById('greeting');

  greeting.innerText = 'Hello ' + accresult.results.firstname
}

Trading();
*/