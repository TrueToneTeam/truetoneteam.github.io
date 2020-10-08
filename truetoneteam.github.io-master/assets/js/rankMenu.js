function expRank(status){
	var menu1 = document.getElementById("expRank");
	var menu2 = document.getElementById("pvpRank");
	var menu3 = document.getElementById("pvp1vs1Rank");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu1.style.display = "block";
		menu2.style.display ="none";
		menu3.style.display ="none";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
		menu3.style.display ="none";
	}
}

function pvpRank(status){
	var menu1 = document.getElementById("expRank");
	var menu2 = document.getElementById("pvpRank");
	var menu3 = document.getElementById("pvp1vs1Rank");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu1.style.display = "none";
		menu2.style.display ="block";
		menu3.style.display ="none";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
		menu3.style.display ="none";
	}
}

function pvp1vs1Rank(status){
	var menu1 = document.getElementById("expRank");
	var menu2 = document.getElementById("pvpRank");
	var menu3 = document.getElementById("pvp1vs1Rank");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu1.style.display = "none";
		menu2.style.display ="none";
		menu3.style.display ="block";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
		menu3.style.display ="none";
	}
}

function closeMenu(status){
	var menu1 = document.getElementById("expRank");
	var menu2 = document.getElementById("pvpRank");
	var menu3 = document.getElementById("pvp1vs1Rank");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu1.style.display = "none";
		menu2.style.display ="none";
		menu3.style.display ="block";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
		menu3.style.display ="none";
	}
}