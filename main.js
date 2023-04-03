async function SearchData() {

        let input = document.getElementById('inp').value;

    let response = await fetch("https://data.lemon.markets/v1/instruments?search=" + input, 
    {
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9yeUdESDIyZmZzRjRHN0YxWXBZRjJid1pZZkJnOGdiTmRQIiwiZXhwIjoxNzExOTUwMjA2LCJpYXQiOjE2ODA0MTQyMDYsImp0aSI6ImFwa19yeUdESDIyaGhtR0Nac1ZIcmpISlhNMjl6bTZyUmJIRndwIiwibW9kZSI6InBhcGVyIn0.7UHPexMnI1sEnVk1f2Nirs7Sk5vejImbKqwv9d-zxiQ' }
    })

    let result = await response.json();

    let searchtitle = document.getElementById('searchtitle');
    let searchname = document.getElementById('searchname');
    let searchisin = document.getElementById('searchisin');

    // Title
    let title = searchtitle.innerHTML = (result.results[0].title);
    // Name
    let name =  searchname.innerHTML = (result.results[0].name);
    // Isin
    let isin = searchisin.innerHTML = (result.results[0].isin);


    let addDashboardbtn = document.getElementById('addDashboard');

    addDashboardbtn.addEventListener('click', function() {
      let dashboardtitle = document.getElementById('dashboardtitle');
      let dashboardname = document.getElementById('dashboardname');
      let dashboardisin = document.getElementById('dashboardname');

      dashboardtitle.innerText = title;
      dashboardname.innerText = name;
      dashboardisin.innerText = isin;

      
    })

}

SearchData();
