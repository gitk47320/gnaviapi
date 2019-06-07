function gnaviFreewordSearch(offset, hit_per_page){
  var req = new XMLHttpRequest();
  keyid = '71926b2013dd9d0d36651401e85520a4'
  var freeword = document.forms.mainform.elements['freeword'].value
  var apiresult = null
  url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=71926b2013dd9d0d36651401e85520a4&freeword=${freeword}&offset=${offset}&hit_per_page=${hit_per_page}`
  
  req.responseType = 'json'
  
  req.open('GET', url, true)

  var shopname  =[]
  var shopaddress = []
  req.onload = function(){
    document.getElementById("shopinfo").innerHTML = '<table id = "shopinfotable", border = 1></table>'
    var table = document.getElementById("shopinfo").childNodes[0];
    var row = table.insertRow(-1)
    var nametr = row.insertCell(-1);
    var addresstr = row.insertCell(-1);
    nametr.innerHTML = '<tr><th>店の名前</th></tr>'
    addresstr.innerHTML = '<tr><th>店の住所</th></tr>'
    apiresult = req.response;
    for(i = 0; i < hit_per_page ;i++){
      shopname[i] = apiresult.rest[i].name;
      shopaddress[i] = apiresult.rest[i].address
      var row = table.insertRow(-1)
      var namecell = row.insertCell(-1);
      var addresscell = row.insertCell(-1);
      namecell.innerHTML = shopname[i];
      addresscell.innerHTML = shopaddress[i];
    }
  };
  req.send();
}

function freewordValidation(){

}