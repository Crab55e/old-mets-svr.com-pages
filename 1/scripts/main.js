// メイン　JavaScript

//    マウスストーカー
const stalker = document.getElementById('stalker');
document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function(e) {
        stalker.style.backgroundColor = '#000';
    });
    linkElem[i].addEventListener('mouseout', function(e) {
        stalker.style.backgroundColor = '#fff';
    });
}

//切り替えメニュー
document.getElementsByClassName("toggle-btn").onclick = function() {
    this.classList.toggle("toggle-btn-on");
};