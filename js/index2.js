//容量选择
var ml1=document.getElementById('ml1');
var ml2=document.getElementById('ml2');
var span=document.getElementById('span');
ml1.onclick=function(){
	span.innerText='"'+ml1.innerText+'"';
	if(ml1.hasAttribute('bg')){
		;
	}else{
		ml1.setAttribute('class','bg');
		ml2.removeAttribute('class');
	}
}
ml2.onclick=function(){
	span.innerText='"'+ml2.innerText+'"';
	if(ml2.hasAttribute('bg')){
		;
	}else{
		ml2.setAttribute('class','bg');
		ml1.removeAttribute('class');
	}
}
//件数增减
var btn=document.getElementsByClassName('btn');
var input=document.getElementById('input');
window.onload=function(){
	if(input.value<=1){
		btn[0].setAttribute("style","cursor:not-allowed");
	}
	if(input.value>=5){
		btn[1].setAttribute("style","cursor:not-allowed");
	}
}
btn[0].onclick=function(){
	input.value--;
	if(input.value<=1){
		btn[0].setAttribute("style","cursor:not-allowed");
	}
	if(input.value<5){
		btn[1].setAttribute("style","cursor:pointer");
	}
}
btn[1].onclick=function(){
	input.value++;
	if(input.value>1){
		btn[0].setAttribute("style","cursor:pointer");
	}
	if(input.value>=5){
		btn[1].setAttribute("style","cursor:not-allowed");
	}
}
//切换图片
var bimg=document.getElementById('bimg');
var Bimg=document.getElementById('Bimg');
var small=document.getElementsByClassName('small')
var spanl=document.getElementById('spanl');
var spanr=document.getElementById('spanr');
small[0].onmouseover=function(){
	small[0].id="border";
	small[1].id="";
	bimg.src="img/pp0.jpeg";
	Bimg.src="img/pp0.jpeg";
}
small[1].onmouseover=function(){
	small[0].id="";
	small[1].id="border";
	bimg.src="img/pp1.jpeg";
	Bimg.src="img/pp1.jpeg";
}
spanl.onclick=function(){
	if(small[0].getAttribute('id')=="border"){
		;
	}else{
		small[0].id="border";
		small[1].id="";
		bimg.src="img/pp0.jpeg";
		Bimg.src="img/pp0.jpeg";
	}
}
spanr.onclick=function(){
	if(small[1].getAttribute('id')=="border"){
		;
	}else{
		small[0].id="";
		small[1].id="border";
		bimg.src="img/pp1.jpeg";
		Bimg.src="img/pp1.jpeg";
	}
}
//加入购物车
var button2=document.getElementById('button2');
var gray=document.getElementById('gray');
var add=document.getElementById('add');
var close=document.getElementById('close');
var continue1=document.getElementById('continue');
var end=document.getElementById('end');
button2.onclick=function(){
	gray.style.display="block";
	add.style.display="block";
}
close.onclick=function(){
	gray.style.display="none";
	add.style.display="none";
}
continue1.onclick=function(){
	gray.style.display="none";
	add.style.display="none";
}
end.onclick=function(){
	gray.style.display="none";
	add.style.display="none";
}
//放大镜
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementsByClassName('left')[0];
var distance;
window.onscroll=function(){
	distance=document.documentElement.scrollTop || document.body.scrollTop;
	}
img1.onmouseover = function () {
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function () {
	slider.style.display = 'none';
	img2.style.display = 'none';
}
img1.onmousemove = function (ev) {
	var ev = ev || window.event;
	var oL = ev.clientX - box.offsetLeft -slider.offsetWidth / 2;
	var oT = ev.clientY+distance - box.offsetTop - slider.offsetHeight / 2;
	var oMaxw = img1.offsetWidth - slider.offsetWidth;
	var oMaxh = img1.offsetHeight - slider.offsetHeight;
	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';
	var scale = img2.offsetWidth / slider.offsetWidth;
	Bimg.style.left = -scale * oL + 'px'
	Bimg.style.top = -scale * oT + 'px'
}