function myMenu1(status){
	var menu1 = document.getElementById("eventList");
	var menu2 = document.getElementById("eventListEnd");
	var menu3 = document.getElementById("eventListSoon");
	
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

function myMenu2(status){
	var menu1 = document.getElementById("eventList");
	var menu2 = document.getElementById("eventListEnd");
	var menu3 = document.getElementById("eventListSoon");
	
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

function myMenu3(status){
	var menu1 = document.getElementById("eventList");
	var menu2 = document.getElementById("eventListEnd");
	var menu3 = document.getElementById("eventListSoon");
	
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

function wlStaff(status){
	var menu1 = document.getElementById("whitelistStaff");
	var menu2 = document.getElementById("whitelistUser");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu1.style.display = "block";
		menu2.style.display ="none";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
	}
}

function wlUser(status){
	var menu1 = document.getElementById("whitelistStaff");
	var menu2 = document.getElementById("whitelistUser");
	
	if(status==1){
		//메뉴 보이기
		//alert("메뉴 보이기");
		menu2.style.display = "block";
		menu1.style.display ="none";
	}

	else{
		//메뉴 감추기
		//alert("메뉴 감추기");
		menu1.style.display ="none";
		menu2.style.display ="none";
	}
}