var images_arr = [];
var thumb_arr = [];
mui.plusReady(function(){
	layui.use('upload', function(){
        var upload = layui.upload;
        //只能上传一张
        var uploadInst = upload.render({
            elem : '#uploads',
            url : upload_url,
            done: function(res){
            	var arr = res.src.split('|');
                $('#uploads').before('<div class="mui-icon" ><img src="'+arr[0]+'" /></div>');
                images_arr.push(arr[1]);
                thumb_arr.push(arr[0]);
            }
        });
   });
});