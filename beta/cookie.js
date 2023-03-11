let start = 0;
let up1start = 10;
let up2start = 25;
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

var cookie = parseInt(window.localStorage.getItem("cookie"));
var clickPer = parseInt(window.localStorage.getItem("clickPer"));
var perSecond = parseInt(window.localStorage.getItem("perSecond"));
var up1P = parseInt(window.localStorage.getItem("up1price"));
var up2P = parseInt(window.localStorage.getItem("up2price"));

document.getElementById("count").innerText = cookie;
document.getElementById("upgrade1").innerText = up1P;
document.getElementById("upgrade2").innerText = up2P;

// just to start off the text, variables etc

setInterval(function everySecond() {
	cookie = cookie + perSecond
	document.getElementById("count").innerText = cookie;
	localStorage.setItem("cookie", cookie);
}, 1000);

// changes the cookies every second

document.getElementById("el").addEventListener("click", function() {
    document.documentElement.style.setProperty('--cookie', +document.documentElement.style.getPropertyValue("--cookie") + 1);
    cookie = cookie + clickPer;
    document.getElementById("count").innerText = cookie;
	window.localStorage.setItem("cookie", cookie);
	console.log(cookie)
});

// click function

document.getElementById("upgrade1").addEventListener("click", function() {
	if (cookie >= up1P) {
		cookie = cookie - up1P;
		clickPer = clickPer + 1;
		up1P = Math.round(up1P * 2);
		up1P = Math.round(up1P);
		document.getElementById("count").innerText = cookie;
		document.getElementById("upgrade1").innerText = up1P;
		window.localStorage.setItem("clickPer", clickPer);
		window.localStorage.setItem("up1price", up1P);
	}
});

document.getElementById("upgrade2").addEventListener("click", function() {
	if (cookie >= up2P) {
		cookie = cookie - up2P;
		perSecond = perSecond + 1;
		up2P = Math.round(up2P * 2);
		document.getElementById("count").innerText = cookie;
		document.getElementById("upgrade2").innerText = up2P;
		window.localStorage.setItem("perSecond", perSecond);
		window.localStorage.setItem("up2price", up2P);
	}
});

// upgrades


function reset() {
	localStorage.clear();
	location.reload()
};
