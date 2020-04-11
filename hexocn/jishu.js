

fetch('https://counts.42cloud.cn/api/counts.html')
    .then(response => response.json())
    .then(data => {
        if (document.getElementById("readcount")) {
            document.getElementById("readcount").innerHTML=data.Count;
        }
        if (document.getElementById("allcount")){
            document.getElementById("allcount").innerHTML=data.Allcount;
          }
    })
    .catch(err => console.error(err))

