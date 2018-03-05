var dispDiv = document.getElementById("display"),
	st1 = document.getElementById("st1"),
	st2 = document.getElementById("st2"),
	st3 = document.getElementById("st3"),
	st4 = document.getElementById("st4"),
	imgSrc = null,
	stInp = document.getElementById("stickerUrl"),
	stC = document.getElementById("cursor");
	
	
document.getElementById("bgcolor").addEventListener("change", function(){
	dispDiv.style.backgroundColor = this.value;
})

function test(x) {
	imgSrc = x.src;
	stC.src = imgSrc;
};

st1.addEventListener("click", function(){
	test(st1);
})

st2.addEventListener("click", function(){
	test(st2);
})

st3.addEventListener("click", function(){
	test(st3);
})

st4.addEventListener("click", function(){
	test(st4);
})


dispDiv.addEventListener("click", function(ev){
	var hhheight = 100;
	if (document.getElementById("stickerheight").value != ""){
		hhheight += parseInt(document.getElementById("stickerheight").value);
	}

	var newImg = document.createElement("img");
		newImg.src = imgSrc;
		newImg.className = "displayStickers";
		newImg.style.height = hhheight+"px"; 
		dispDiv.appendChild(newImg);
		
		console.log(ev.pageX, ev.pageY);
		newImg.style.left = ev.pageX+"px";
		newImg.style.top = ev.pageY+"px";
});

stInp.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		var newSticker = document.createElement("img");
		newSticker.src = stInp.value;
		newSticker.className = "stickers";
		document.getElementById("stickers").appendChild(newSticker);
		stInp.value = "";
		newSticker.addEventListener("click", function(){
			imgSrc = this.src;
			stC.src = imgSrc;
		});
	}
});

dispDiv.addEventListener("mousemove", function(ev){
	stC.style.left = ev.pageX+"px";
	stC.style.top = ev.pageY+"px";
});