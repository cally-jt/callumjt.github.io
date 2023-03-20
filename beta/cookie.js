let start = 0;
let up1start = 10;
let up2start = 25;
let up3start = 100;
let clickperstart = 1;

if (localStorage.getItem("cookie") === NaN | localStorage.getItem("cookie") === null | localStorage.getItem("cookie") === undefined) {
	localStorage.setItem("cookie", start);
};

if (localStorage.getItem("clickPer") === NaN | localStorage.getItem("clickPer") === null | localStorage.getItem("clickPer") === undefined) {
	localStorage.setItem("clickPer", clickperstart)
};

if (localStorage.getItem("perSecond") === NaN | localStorage.getItem("perSecond") === null | localStorage.getItem("perSecond") === undefined) {
	localStorage.setItem("perSecond", start)
};

if (localStorage.getItem("up1price") === NaN | localStorage.getItem("up1price") === null | localStorage.getItem("up1price") === undefined) {
	localStorage.setItem("up1price", up1start)
};

if (localStorage.getItem("up2price") === NaN | localStorage.getItem("up2price") === null | localStorage.getItem("up2price") === undefined) {
	localStorage.setItem("up2price", up2start)
};

if (localStorage.getItem("up3price") === NaN | localStorage.getItem("up3price") === null | localStorage.getItem("up3price") === undefined) {
	localStorage.setItem("up3price", up3start)
};

var cookie = parseInt(window.localStorage.getItem("cookie"));
var clickPer = parseInt(window.localStorage.getItem("clickPer"));
var perSecond = parseInt(window.localStorage.getItem("perSecond"));
var up1P = parseInt(window.localStorage.getItem("up1price"));
var up2P = parseInt(window.localStorage.getItem("up2price"));
var up3P = parseInt(window.localStorage.getItem("up3price"));
var scale2 = 1;

document.getElementById("count").innerText = cookie;
document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
document.getElementById("upgrade1").innerText = up1P;
document.getElementById("upgrade2").innerText = up2P;
document.getElementById("upgrade3").innerText = up3P;
document.title = cookie + " - callumjt's cookie clicker";

var checkBox = document.getElementById("background-check");
	var dots2 = document.getElementById("dots");

	if (checkBox.checked == true) {
		dots2.style.animationName = "scroll";
	} else {
		dots2.style.animationName = "noscroll";
	};

// just to start off the text, variables etc

setInterval(function everySecond() {
	cookie = cookie + perSecond;
	document.getElementById("count").innerText = cookie;
	localStorage.setItem("cookie", cookie);
	document.title = cookie + " cookies" + " - callumjt's cookie clicker";
}, 1000);

// changes the cookies every second

document.getElementById("el").addEventListener("click", function() {
    document.documentElement.style.setProperty('--cookie', +document.documentElement.style.getPropertyValue("--cookie") + 1);
    cookie = cookie + clickPer;
    document.getElementById("count").innerText = cookie;
	window.localStorage.setItem("cookie", cookie);
	document.documentElement.style.setProperty('--scale', scale2);
});

// click function

document.getElementById("upgrade1C").addEventListener("click", function() {
	if (cookie >= up1P) {
		cookie = cookie - up1P;
		clickPer = clickPer + 1;
		up1P = Math.round(up1P * 1.7);
		document.getElementById("count").innerText = cookie;
		document.getElementById("upgrade1").innerText = up1P;
		document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
		window.localStorage.setItem("clickPer", clickPer);
		window.localStorage.setItem("up1price", up1P);
	}
});

document.getElementById("upgrade2C").addEventListener("click", function() {
	if (cookie >= up2P) {
		cookie = cookie - up2P;
		perSecond = perSecond + 1;
		up2P = Math.round(up2P * 1.7);
		document.getElementById("count").innerText = cookie;
		document.getElementById("upgrade2").innerText = up2P;
		document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
		window.localStorage.setItem("perSecond", perSecond);
		window.localStorage.setItem("up2price", up2P);
	}
});

document.getElementById("upgrade3C").addEventListener("click", function() {
	if (cookie >= up3P) {
		cookie = cookie - up3P;
		clickPer = clickPer + 10;
		up3P = Math.round(up3P * 1.7);
		document.getElementById("count").innerText = cookie;
		document.getElementById("upgrade3").innerText = up3P;
		document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
		window.localStorage.setItem("perSecond", perSecond);
		window.localStorage.setItem("up3price", up3P);
	}
});

// upgrades

function reset() {
	localStorage.clear();
	if (cookie = 0) {
	location.reload();
	} else {
	localStorage.clear();
	location.reload();
	};
};

document.getElementById("settings").addEventListener("click", function() {
    document.getElementById("settingsPage").style.opacity = 1;
    document.getElementById("settingsPage").style.zIndex = 999;
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("settingsPage").style.opacity = 0;
    document.getElementById("settingsPage").style.zIndex = -999;
});

function check() {
	var checkBox = document.getElementById("background-check");
	var dots2 = document.getElementById("dots");

	if (checkBox.checked == true) {
		dots2.style.animationName = "scroll";
	} else {
		dots2.style.animationName = "noscroll";
	};
};

// function scale() {
// 	document.documentElement.style.setProperty("--scale", scale2);
// };
