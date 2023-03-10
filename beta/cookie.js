let cookie = 0;

document.getElementById("el").addEventListener("click", function() {
    document.documentElement.style.setProperty('--cookie', +document.documentElement.style.getPropertyValue("--cookie") + 1);
    cookie = cookie + 1;
    document.getElementById("count").innerText = cookie;
});
document.getElementById("count").innerText = cookie;
console.log(cookie);

// document.documentElement.style.getPropertyValue("--cookie");