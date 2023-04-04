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

    // TODO Bug beheben dass nur noch die letzte Suche hinzugefügt wird
    
    let addDashboardbtn = document.getElementById('addDashboard');

    addDashboardbtn.addEventListener('click', function() {

      let dashboardcontent = document.getElementById('dashboardcontent');

      // Create Element for the Asset Title
      let assettitle = document.createElement('h3');
      
      // Create Element for the Asset Name
      let assetname = document.createElement('p');

      // Create Element for the Asset Isin
      let assetisin = document.createElement('p');


      assettitle.innerText = title
      assetname.innerText = name
      assetisin.innerText = isin
      

      dashboardcontent.appendChild(assettitle);
      dashboardcontent.appendChild(assetname);
      dashboardcontent.appendChild(assetisin);
      
    })
    
}

SearchData();
