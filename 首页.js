window.onload = function(){
	var top0 = document.getElementsByClassName('top')[0];
	window.onscroll = function(){
		var a = document.documentElement.scrollTop || document.body.scrollTop;
		if(a > 250){
			top0.style.position = 'fixed';
			top0.style.zIndex = 10000;
			top0.style.marginLeft = "82px";
		}else{
			top0.style.position = 'static';
		}
	}
}

function getStyle(obj, style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	} 
	else{
		return getComputedStyle(obj, null)[style];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag1 = true;
		for(var style in json){
			var now = 0;
			if(style == 'opacity'){
				now = parseInt(getStyle(obj,style)*100);
			}else{
				now = parseInt(getStyle(obj,style));
			}
			var speed = (json[style] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(style == 'opacity'){
				obj.style[style] = cur / 100;
			}else{
				obj.style[style] = cur + 'px';
			}
			if(json[style] !== cur){
				flag1 = false;
			}
		}
		if(flag1){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
