function scroll(){
	document.onscroll = function(){
		var s_top = document.documentElement.scrollTop || document.body.scrollTop;
		var fixed_th = document.getElementById("fixed_th");
		var headNav = document.getElementById("head_nav");
		if(s_top>0){
			fixed_th.style.display = "block";
		}else{
			fixed_th.style.display = "none";
		}
		if(s_top>156){
			headNav.style.position = "fixed";
			headNav.style.top = "0px";
			headNav.style.left = "auto";
			headNav.style.zIndex = 2000;
		}else{
			headNav.style.position = "relative";
			headNav.style.zIndex = 0;
		}
		fixed_th.onclick = function(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			fixed_th.style.display = "none";
		}
	}
}
scroll();