function gnaviFreewordSearch(offset, hit_per_page){
  var req = new XMLHttpRequest();
  //keyid = github公開のため隠匿;
  var freeword = document.forms.mainform.elements['freeword'].value
  var pref = document.forms.mainform.elements['pref'].value
  url = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=71926b2013dd9d0d36651401e85520a4&pref=${pref}&freeword=${freeword}&offset=${offset}&hit_per_page=${hit_per_page}`
  
  req.responseType = 'json'
  
  req.open('GET', url, true)

  req.onload = function(){
    for(i = 0; i < hit_per_page; i++){
    //APIで取得した店の名前と画像を表示
    //それぞれをぐるなびのサイトにリンクしている
    document.getElementById("shops").childNodes[i].innerHTML 
    = `<a href = ${req.response.rest[i].url}><img src = ${req.response.rest[i].image_url.shop_image1}><br>${req.response.rest[i].name}</a><br>`
    }
  };
  req.send();
}