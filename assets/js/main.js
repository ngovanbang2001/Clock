const clock = document.querySelector('#clock')

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
setInterval(() => {
    var d = new Date()
    const h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clock.innerHTML = `${h} : ${m} : ${s}`
}, 1000)