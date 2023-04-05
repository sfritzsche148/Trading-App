async function SearchData() {

  let input = document.getElementById('searchinp').value;


  let assetdataresponse = await fetch("https://data.lemon.markets/v1/instruments?search=" + input, 
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })
  console.log(assetdataresponse)

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




  
  // Frühere Daten
  let qoutesresp = await fetch("https://data.lemon.markets/v1/quotes?isin=" + isin + "&from=2023-02-02", 
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })

  let qoutesres = await qoutesresp.json();
  console.log(qoutesres)

    // Latest Qoutes
  let latesqoutesresp = await fetch("https://data.lemon.markets/v1/quotes/latest?isin=" + isin,
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
  })

  console.log(latesqoutesresp)
  let latesqoutesres = await latesqoutesresp.json();
  console.log(latesqoutesres)

  // Chart
  let myChartObject = document.getElementById('mychart');

  // TODO Chartdaten ordentlich füllen
  let chart = new Chart(myChartObject, {
    type: 'line',
    data: {
      labels:[" ", " ", " ", " ", " ", " ", " ", " ", " "],
      datasets: [{
        label: "1",
        data: [qoutesres.results[0].a, qoutesres.results[40].a, qoutesres.results[50].a,  qoutesres.results[60].a, qoutesres.results[70].a, qoutesres.results[80].a, qoutesres.results[90].a, qoutesres.results[99].a, latesqoutesres.results[0].a]
      }]
    }
  })

}

SearchData();

// TODO Dashboard Trade Postions
async function Trading() {
let accresponse = await fetch("https://paper-trading.lemon.markets/v1/account",
  {
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhyeEpYUE5xZDcyRzE3Y1MzQjAxbGhiRjRiIiwibW9kZSI6InBhcGVyIn0.0fNLKC_TE8TbYSDwIKtBtNRyZr5hXc8rDAwalEIHVDE' }
  })    
  
  let accresult = await accresponse.json();
  //console.log(accresult);

  let greeting = document.getElementById('greeting');

  greeting.innerText = 'Hello ' + accresult.results.firstname
}

Trading();