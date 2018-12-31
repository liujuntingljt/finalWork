//顶部悬浮
window.onload=function(){
	var outtop=document.getElementsByClassName('outtop')[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>150){
			outtop.style.position='fixed';
		}else{
			outtop.style.position='static';
		}
	}
}
// 帮帮快讯
var ul=document.getElementById('ul');
var t=setInterval(show,20);
function show(){
	var top=ul.offsetTop-1;
	ul.style.top=top+"px";
	if(-ul.offsetTop>=ul.offsetHeight/2){
		ul.style.top=0;
	}
}
var li=ul.children;
for(var i=0;i<li.length;i++){
	//移入事件
	li[i].onmouseover = function () {
   	   clearInterval(t);
    };
    //移出事件
	li[i].onmouseout=function(){
		t=setInterval(show,20);
	}
}
//充值
var select=document.getElementsByTagName('select')[0]
var span=document.getElementById('span');
select.onchange=function(){
	span.innerText="￥"+select.value;
}
//广告轮播图
var banner=document.getElementsByClassName('banner')[0];
var slider=document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('bnav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
//页面打开时自动滚动切换
timer = setInterval(next, 2500);
//鼠标移入
banner.onmouseover = function () {
	animate(left, {
			opacity: 0.6
	})
	animate(right, {
			opacity: 0.6
	})
	clearInterval(timer); //图片停止滚动	
}
//鼠标移出
banner.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 2500); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;

function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4800px';////
			index = 6;
		}
		isMoving = false;
	});
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -800 * index
		});
	}
}
//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
//右侧图
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var img=document.getElementById('img1');
var c=[c1,c2,c4];
for(var i=0;i<c.length;i++){
	c[i].onmouseover=function(){
		appear(this);
	}
	c[i].onmouseout=function(){
		hide(this);
	}
}
c3.onmouseover=function(){
	animate(this,{
		right:0
	})
	img.style.display="none";
}
c3.onmouseout=function(){
	animate(this,{
		right:-100
	})
	img.style.display="block";
}
function appear(that){
	animate(that,{
		right:0
	})
}
function hide(that){
	animate(that,{
		right:-80
	});
}
		