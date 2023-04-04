async function SearchData() {

    let input = document.getElementById('searchinp').value;


    let assetdataresponse = await fetch("https://data.lemon.markets/v1/instruments?search=" + input, 
    {
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
    })

    let assetdataresult = await assetdataresponse.json();

    let searchtitle = document.getElementById('searchtitle');
    let searchname = document.getElementById('searchname');
    let searchisin = document.getElementById('searchisin');

    // Title
     let title = searchtitle.innerHTML = (assetdataresult.results[0].title);
    // Name
    let name = searchname.innerHTML = 'Name: ' + (assetdataresult.results[0].name);
    // Isin
    let isin = searchisin.innerHTML = 'Isin: ' + (assetdataresult.results[0].isin); 

    // TODO Api Request für das Chart machen
    // Chart
}

SearchData();

  // TODO Dashboard Trade Postions
async function Trading() {
  let accresponse = await fetch("https://paper-trading.lemon.markets/v1/account",
    {
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhyeEpYUE5xZDcyRzE3Y1MzQjAxbGhiRjRiIiwibW9kZSI6InBhcGVyIn0.0fNLKC_TE8TbYSDwIKtBtNRyZr5hXc8rDAwalEIHVDE' }
    })    
    
    let accresult = await accresponse.json();
    console.log(accresult);

    let greeting = document.getElementById('greeting');

    greeting.innerText = 'Hello ' + accresult.results.firstname
}

Trading();