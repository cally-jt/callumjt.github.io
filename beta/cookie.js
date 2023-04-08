let start = 0;
let up1start = 15;
let up2start = 100;
let up3start = 1100;
let clickperstart = 1;
let amountstart = 0;

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

if (localStorage.getItem("up1amount") === NaN | localStorage.getItem("up1amount") === null | localStorage.getItem("up1amount") === undefined) {
	localStorage.setItem("up1amount", amountstart)
};

if (localStorage.getItem("up2price") === NaN | localStorage.getItem("up2price") === null | localStorage.getItem("up2price") === undefined) {
	localStorage.setItem("up2price", up2start)
};

if (localStorage.getItem("up2amount") === NaN | localStorage.getItem("up2amount") === null | localStorage.getItem("up2amount") === undefined) {
	localStorage.setItem("up2amount", amountstart)
};

if (localStorage.getItem("up3price") === NaN | localStorage.getItem("up3price") === null | localStorage.getItem("up3price") === undefined) {
	localStorage.setItem("up3price", up3start)
};

if (localStorage.getItem("up3amount") === NaN | localStorage.getItem("up3amount") === null | localStorage.getItem("up3amount") === undefined) {
	localStorage.setItem("up3amount", amountstart)
};

if (localStorage.getItem("total") === NaN | localStorage.getItem("total") === null | localStorage.getItem("total") === undefined) {
	localStorage.setItem("total", localStorage.getItem("cookie"))
};

if (JSON.parse(localStorage.getItem("achievementsGot")) === null) {
	localStorage.setItem("achievementsGot", JSON.stringify([]));
}


var cookie = parseInt(window.localStorage.getItem("cookie"));
var clickPer = parseInt(window.localStorage.getItem("clickPer"));
var perSecond = parseInt(window.localStorage.getItem("perSecond"));

var up1P = parseInt(window.localStorage.getItem("up1price"));
var up1Am = parseInt(window.localStorage.getItem("up1amount"));

var up2P = parseInt(window.localStorage.getItem("up2price"));
var up2Am = parseInt(window.localStorage.getItem("up2amount"));

var up3P = parseInt(window.localStorage.getItem("up3price"));
var up3Am = parseInt(window.localStorage.getItem("up3amount"));

var totalClicks = parseInt(window.localStorage.getItem("total"));
var achievementArray = JSON.parse(window.localStorage.getItem("achievementsGot"));
var allUpgrades = up1Am + up2Am + up3Am;
var cookieSize = 1;

var clickSound;
const click1 = new Audio("srcs/sounds/clickb1.mp3")
const click2 = new Audio("srcs/sounds/clickb2.mp3")
const click3 = new Audio("srcs/sounds/clickb3.mp3")
const click4 = new Audio("srcs/sounds/clickb4.mp3")
const buySound = new Audio("srcs/sounds/buy1.wav")

var mouseX;
var mouseY;
var followX;
var followY;

document.getElementById("count").innerText = shortenNumber(cookie)
document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
document.getElementById("upgrade1").innerText = up1P;
document.getElementById("upgrade2").innerText = up2P;
document.getElementById("upgrade3").innerText = up3P;
document.getElementById("total").innerText = "All time clicks: " + totalClicks;
document.title = cookie + " - callumjt's cookie clicker";

var checkBox = document.getElementById("background-check");
	var dots2 = document.getElementById("dots");

	if (checkBox.checked == true) {
		dots2.style.animationName = "scroll";
	} else {
		dots2.style.animationName = "noscroll";
	};

// just to start off the text, variables etc

var achievementName = [0, "First of many", "10/10", "0 to 100", "First of many.. again", "double the trouble!", "hands off", "thats a lot"]
var achievementDesc = [0, "Click the cookie for the first time!", "your clicks are cool ig", "you went from 0 to 100, so cool ik", "get your first upgrade", "get the first upgrade", "get the second upgrade", "get the third upgrade"]

// achievement texts

setInterval(function everySecond() {
	cookie = cookie + perSecond;
	document.getElementById("count").innerText = shortenNumber(cookie);
	localStorage.setItem("cookie", cookie);
	document.title = shortenNumber(cookie) + " cookies" + " - callumjt's cookie clicker";
}, 1000);

// changes the cookies every second

const cookieIco = document.getElementById("el");

cookieIco.addEventListener("click", async function() {
	const delay = ms => new Promise(res => setTimeout(res, ms));
    cookie = cookie + clickPer;
	totalClicks = totalClicks + 1;
    document.getElementById("count").innerText = shortenNumber(cookie);
	window.localStorage.setItem("cookie", cookie);
	window.localStorage.setItem("total", totalClicks);
	document.getElementById("total").innerText = "All time clicks: " + totalClicks;

	// plays sounds
	clickSound = Math.floor(Math.random() * 4) + 1;

	if (clickSound == 1) {
		click1.play();
	} else if (clickSound == 2) {
		click2.play();
	} else if (clickSound == 3) {
		click3.play();
	} else {
		click4.play();
	}

	// creates cookie particle
	const img = document.createElement("img")
	img.classList = "cookieParticle"
	img.src = "srcs/imgs/cookie.png"
	img.style.left = Math.floor(Math.random() * window.innerWidth / 2) + 200 + "px"
	img.style.top = "100px";
	document.querySelector(".cookiePart").appendChild(img)

	await delay(1000)
	img.remove()
});

window.addEventListener("mousemove", function(e) {
	mouseX = e.pageX;
  	mouseY = e.pageY;
});

// cookie function

document.getElementById("upgrade1C").addEventListener("click", function() {
	if (cookie >= up1P) {
		cookie = cookie - up1P;
		clickPer = clickPer + 1;
		up1P = Math.round(up1P * 1.15);
		up1Am = up1Am + 1;
		document.getElementById("count").innerText = shortenNumber(cookie);
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
		up2P = Math.round(up2P * 1.15);
		up2Am = up2Am + 1;
		document.getElementById("count").innerText = shortenNumber(cookie);
		document.getElementById("upgrade2").innerText = up2P;
		document.getElementById("perCount").innerText = "Cookies per click: " + clickPer + " | Cookies per second: " + perSecond;
		window.localStorage.setItem("perSecond", perSecond);
		window.localStorage.setItem("up2price", up2P);
	}
});

document.getElementById("upgrade3C").addEventListener("click", function() {
	if (cookie >= up3P) {
		cookie = cookie - up3P;
		perSecond = perSecond + 10;
		up3P = Math.round(up3P * 1.15);
		up3Am = up3Am + 1;
		document.getElementById("count").innerText = shortenNumber(cookie);
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
	document.getElementById("infoPage").style.opacity = 0;
    document.getElementById("infoPage").style.zIndex = -999;
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("settingsPage").style.opacity = 0;
    document.getElementById("settingsPage").style.zIndex = -999;
});

document.getElementById("info").addEventListener("click", function() {
    document.getElementById("infoPage").style.opacity = 1;
    document.getElementById("infoPage").style.zIndex = 999;
	document.getElementById("settingsPage").style.opacity = 0;
    document.getElementById("settingsPage").style.zIndex = -999;
});

document.getElementById("close2").addEventListener("click", function() {
    document.getElementById("infoPage").style.opacity = 0;
    document.getElementById("infoPage").style.zIndex = -999;
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

document.querySelector("#cooldown").addEventListener("change", (e)=>{
	document.getElementById("dots").style.animationDuration = (e.target.value).toString()+"s";
});

setInterval(CheckAchievements, 1);

setInterval(function allUpgradesf() {
	allUpgrades = up1Am + up2Am + up3Am;
}, 1);

async function achievements(id) {
	const delay = ms => new Promise(res => setTimeout(res, ms));
	if (!achievementArray.includes(id)) {

		const div = document.createElement("div");
		div.id = "achievementBox";
		div.style.animationName = "achievementStart"

		const h3 = document.createElement("h3")
		h3.style.left = "2%";
		h3.style.position = "relative";

		const p = document.createElement("p")
		p.style.position = "relative"
		p.style.left = "2%"

		const h5 = document.createElement("h5")
		h5.style.position = "relative"
		h5.style.left = "2%"
		h5.style.color = "#181818"

		document.querySelector(".achievementDiv").appendChild(div);
		div.appendChild(h3)
		div.appendChild(p)
		div.appendChild(h5)

		achievementArray.push(id);
		h3.textContent = achievementName[id]
		p.textContent = achievementDesc[id]
		h5.textContent = achievementArray.length + "/" + (achievementName.length - 1)
		localStorage.setItem("achievementsGot", JSON.stringify(achievementArray))

		await delay(4400)
		div.style.animationName = "achievementStop"
		await delay(600)
		div.remove()
	};
}

function CheckAchievements() {
	if (cookie >= 1) {
		achievements(1)
	}

	if (cookie >= 10) {
		achievements(2)
	}

	if (cookie >= 100) {
		achievements(3)
	}

	if (allUpgrades >= 1) {
		achievements(4)
	}

	if (up1Am >= 1) {
		achievements(5)
	}

	if (up2Am >= 1) {
		achievements(6)
	}

	if (up3Am >= 1) {
		achievements(7)
	}
}

function shortenNumber(number, suffixes = ['k', 'm', 'b', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'T', 'Qt', 'Qd', 'Sd', 'St', 'O', 'N', 'v', 'c']) {
	if (number < 1000) {
		return number;
	  }
	let suffixIndex = 0;
	while (number >= 1000 && suffixIndex < suffixes.length - 1) {
	  number /= 1000;
	  suffixIndex++;
	}
	if (number >= 1000) {
		return Math.floor(number * 10) / 10 + suffixes[suffixIndex];
	  } else {
		return Math.floor(number * 10) / 10 + suffixes[suffixIndex - 1];
	  }
  }
