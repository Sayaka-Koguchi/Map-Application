function newBmap(selector) {
    // マップの初期化に関する実装
    const map = new Microsoft.Maps.Map(document.querySelector(selector), {
        credentials: 'Au8XMMj2kPF564gBaBwjEKtsXtHatCrbIROyAZndzX1Er2VCMlkx0DGtqn7VfYQI'
    });
    return {
        startMap: function (latitude, longitude, event, zoomLevel) {
            map.setView({
                center: new Microsoft.Maps.Location(latitude, longitude),
                zoom: zoomLevel
            });
        },
        // 他のメソッドをここに追加
    };

}


//Init
function GetMap(){
    //1. Instance
    const map = new Bmap("#mymap");

    //2. Display Map
    map.startMap(25.050846, 121.538333, "load", 10);

    //3. Infobox
    //   options = new Array();
    //   options[index] = { lat, lon, width, height, title, pinColor, description, show };

    const options = [];
    options[0]={
        "lat":25.041311, 
        "lon":121.526802,
        "title":"taipei",
        "pinColor":"#ff0000",
        "height":300,
        "width":320,
        "description": '巧之味手工水<br><img src="work/巧之味手工水.webp" width="300">',
        "show":false
    };

    // `GetMap` をグローバルスコープで利用可能にする
        window.GetMap = GetMap;

}
    //4. Switch infoboxs
    //   infoboxLayers(options, true); //true=one, false=Multiple
    //----------------------------------------------------
        // map.infoboxLayers(options,true);