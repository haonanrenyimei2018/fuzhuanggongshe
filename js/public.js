//筛选城市信息
(function($, doc) {
	$.init();
	$.ready(function() {
        //级联示例
        var cityPicker3 = new $.PopPicker({
            layer: 3
        });
        cityPicker3.setData(cityData3);
        var showCityPickerButton = doc.getElementById('mui-address');

        showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker3.show(function(items) {
                doc.getElementById('province').value = (items[0].text);
                doc.getElementById('city').value = (items[1].text);
                showCityPickerButton.value = items[0].text+items[1].text+items[2].text;
            });
        }, false);
	});
})(mui, document);

var gallery = mui('.mui-slider');
gallery.slider({
  interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});

mui('body').on('tap','a',function(){
 	window.top.location.href=this.href;
});
	
