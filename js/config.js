//请求接口的域名
var host = 'http://fz.6me.cn/api';
//上传的URL
var upload_url = host + '/upload/index';
var domain = 'http://fz.6me.cn/api/extension/index.html?pid=';
//当前版本号
var version_code = "1.1.6";
var noticedata = [];
var modelData = {
	1 : {
		title : '一手货源',
		add : '一手货源发布',
		seller : '寻找一手货源发布',
	},
	2 : {
		title : '裁剪烫熨包装',
		add : '裁剪烫熨包装订单发布',
		seller : '寻找裁剪烫熨包装接活发布'
	},
	3 : {
		title : '缝纫加工',
		add : '放缝纫加工放活发布',
		seller : '寻找接缝纫加工接活发布'
	},
	4 : {
		title : '印花烫绣水洗',
		add : '印花烫绣水洗放活发布',
		seller : '寻找印花烫绣水洗接活发布'
	},
	5 : {
		title : '面料',
		add : '面料供应发布',
		seller : '面料求购发布'
	},
	6 : {
		title : '辅料',
		add : '辅料销售发布',
		seller : '寻找辅料求购发布'
	},
	7 : {
		title : '厂房设备',
		add : '厂房设备出租出售',
		seller : '厂房设备求购求租'
	},
	8 : {
		title : '库存服装',
		add : '库存服装销售发布',
		seller : '求购库存服装'
	},
	9 : {
		title : '求职、招聘',
		add : '招聘发布',
		seller : '求职发布'
	},
	10 : {
		title : '样品、样板、技术',
		add : '样品样板技术放活发布',
		seller : '寻找样品样板技术接活发布'
	},
	11 : {
		title : '拉腰拉条司马克',
		add : '拉腰拉条司马克放活发布',
		seller : '寻找拉腰拉条接活发布'
	},
	12 : {
		title : '锁眼钉扣打结',
		add : '锁眼钉扣打结放活发布',
		seller : '寻找锁眼钉扣打结接活发布'
	}
}

var config_list = {
	1 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个服装货源信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找服装货源信息'
	},
	2 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个裁剪烫熨包装放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找裁剪烫熨包装接活信息'
	},
	3 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个缝纫加工活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找缝纫加接活信息'
	},
	4 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个印花烫绣水洗放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找印花烫绣水洗接活信息'
	},
	5 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个面料放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找面料接活信息'
	},
	6 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个辅料放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个虚招辅料接活信息'
	},
	7 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个厂房设备信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个寻找厂房设备信息'
	},
	8 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个库存服装销售信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个求购库存服装销售信息'
	},
	9 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个跟单验货忙工放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个跟单验货忙工接活信息'
	},
	10 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个样板样品放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个样板样品接活信息'
	},
	11 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个拉腰拉条司马克放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个拉腰拉条司马克接活信息'
	},
	12 : {
		1 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个拉腰拉条司马克放活信息',
		2 : '当前有<font style="color:red;font-weight: bold;" id="count"></font>个拉腰拉条司马克接活信息'
	}
}
/**
 * 页面加载完成之后需要执行的
 */
function common(){
	var province = window.localStorage.getItem('province_name');
	var city = window.localStorage.getItem('city_name');
	$('input[name="target[province]"]').val(province);
	$('input[name="target[city]"]').val(city);
	$('input[name="target[county]"]').val('');
	$('#version').val(version_code);
	var p = getParams();
	if(p && p.id) {
		$('#id').val(p.id);
	}
}
/**
 * 获取URL，并返回URL的参数
 * JSON
 */
function getParams(){
	var url = window.location.href;
	var arr = url.split('?');
	if(arr.length == 2){
		var params = {};
		var arr1 = arr[1].split('&');
		for(var i=0;i<arr1.length;++i){
			var arr2 = arr1[i].split('=');
			params[arr2[0]] = arr2[1]
		}
		return params;
	}else {
		return {};
	}
}

/**
 * 上传图片
 * @type 上传类型
 * @
 */
function upload_img(type,cont,callback) {
    layui.use('upload', function(){
        var upload = layui.upload;
        if(type == 1){
        	//只能上传一张
            var uploadInst = upload.render({
                elem : '#' + cont,
                url : upload_url,
                done: function(res){

                }
            });
		}else {
        	//可以上传多张招聘
            var uploadInst = upload.render({
                elem : '#' + cont,
                url : upload_url,
                multiple: true,
                done: function(res){
                }
            });
		}
    });
}

$(function (){
	common();
});
//编辑
function edit(id) {
	var param = {
		id : id
	}
	$('#id').val(id);
	$.post(host + '/work/detail.html',param,function (data) {
		//回填数据
		var work = data.work;
		var param = data.param;
		for(var p in work){
			if(p == 'intro') {
				$('textarea[name=' + p + ']').val(work[p]);
			}else if(p == 'images'){
				images_arr = work[p].split('|');
				for(var i=0;i<images_arr.length;++i){
				 	$('#uploads').before('<div class="mui-icon" ><img src="'+images_arr[i]+'" /></div>');
				}
			}else {
				$('input[name=' + p + ']').val(work[p]);
			}
		}
		for(var p in param) {
			$('#' + p).val(param[p]);
		}
	},'JSON');
}
//检索字符串是否有手机号~ 如果有就替换成******
function checkPhone(str){
	var arr = str.match(/((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\d3,4|\d{3,4}-|\s)?\d{7,14}))?/g);
	for(var i=0;i<arr.length;++i){
		if(arr[i] == '') continue;
		str = str.replace(arr[i],'**********');
	}
	return str;
}
//检测字符串中是否有手机号
function hasPhone(str){
	var arr = str.match(/((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\d3,4|\d{3,4}-|\s)?\d{7,14}))?/g);
	var index = 0;
	for(var i=0;i<arr.length;++i){
		arr[i] = arr[i].replace(' ','');
		if(arr[i] != ''){
			index++;
		}
	}
	if(index > 0){
		return 1;
	}else {
		return 0;
	}
}


//系统更新
function upgrade(){ 
	$.post(host + '/common/version.html',function(data){
		var v = data.data.versioncode;
		if(v != version_code){
			mui.confirm(data.data.remark,'系统更新',['取消','更新'],function (e) {
				if(e.index == 1) {
					//创建下载
					window.open(data.data.downdress);
				}
			});
		}
	},'JSON');
}



