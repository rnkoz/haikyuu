let seasonsP1=document.getElementById('season-p-1');
let seasonsP2=document.getElementById('season-p-2');
let seasonsP3=document.getElementById('season-p-3');
let seasonsP4=document.getElementById('season-p-4');
let btn1=document.getElementById('learn-more-1');
let btn2=document.getElementById('learn-more-2');
let btn3=document.getElementById('learn-more-3');
let btn4=document.getElementById('learn-more-4');



btn1.addEventListener('click', learnMore1);
function learnMore1(){
    seasonsP1.style.display='flex';
}
btn2.addEventListener('click', learnMore2);
function learnMore2(){
    seasonsP2.style.display='flex';
}
btn3.addEventListener('click', learnMore3);
function learnMore3(){
    seasonsP3.style.display='flex';
}
btn4.addEventListener('click', learnMore4);
function learnMore4(){
    seasonsP4.style.display='flex';
}




let karasuno=document.getElementById('karasuno')
let nekoma=document.getElementById('nekoma')
let fukurodani=document.getElementById('fukurodani')
let aobaJohsai=document.getElementById('aoba-johsai')
let inarizaki=document.getElementById('inarizaki')
let shiratorizawa=document.getElementById('shiratorizawa')

let karasunoText=document.getElementById('karasuno-text')
let nekomaText=document.getElementById('nekoma-text')
let fukurodaniText=document.getElementById('fukurodani-text')
let aobaJohsaiText=document.getElementById('aoba-johsai-text')
let inarizakiText=document.getElementById('inarizaki-text')
let shiratorizawaText=document.getElementById('shiratorizawa-text')


karasuno.addEventListener('click', krsn);
function krsn(){
    karasunoText.style.display='flex';
    nekomaText.style.display='none'
    fukurodaniText.style.display='none'
    aobaJohsaiText.style.display='none'
    inarizakiText.style.display='none'
    shiratorizawaText.style.display='none'
}

nekoma.addEventListener('click', nkm);
function nkm(){
    karasunoText.style.display='none';
    nekomaText.style.display='flex'
    fukurodaniText.style.display='none'
    aobaJohsaiText.style.display='none'
    inarizakiText.style.display='none'
    shiratorizawaText.style.display='none'
}

fukurodani.addEventListener('click', fkrdn);
function fkrdn(){
    karasunoText.style.display='none';
    nekomaText.style.display='none'
    fukurodaniText.style.display='flex'
    aobaJohsaiText.style.display='none'
    inarizakiText.style.display='none'
    shiratorizawaText.style.display='none'
}

aobaJohsai.addEventListener('click', abjhs)
function abjhs(){
    karasunoText.style.display='none';
    nekomaText.style.display='none'
    fukurodaniText.style.display='none'
    aobaJohsaiText.style.display='flex'
    inarizakiText.style.display='none'
    shiratorizawaText.style.display='none'
}

inarizaki.addEventListener('click', inrkz)
function inrkz(){
    karasunoText.style.display='none';
    nekomaText.style.display='none'
    fukurodaniText.style.display='none'
    aobaJohsaiText.style.display='none'
    inarizakiText.style.display='flex'
    shiratorizawaText.style.display='none'
}

shiratorizawa.addEventListener('click', shrtrzw)
function shrtrzw(){
    karasunoText.style.display='none';
    nekomaText.style.display='none'
    fukurodaniText.style.display='none'
    aobaJohsaiText.style.display='none'
    inarizakiText.style.display='none'
    shiratorizawaText.style.display='flex'
}


let movie1=document.getElementById('movie1')
let movie2=document.getElementById('movie2')
let movie3=document.getElementById('movie3')
let movie4=document.getElementById('movie4')
let movie5=document.getElementById('movie5')

movie1.addEventListener('click', link1)
function link1(){
    window.open('https://jut-su.net/3683-volejbol-nachalo-i-konec.html', '_blank');
}
movie2.addEventListener('click', link2)
function link2(){
    window.open('https://jut-su.net/3685-volejbol-pobediteli-i-proigravshie.html', '_blank');
}
movie3.addEventListener('click', link3)
function link3(){
    window.open('https://jut-su.net/3509-volejbol-genij-i-chuvstvo.html', '_blank');
}
movie4.addEventListener('click', link4)
function link4(){
    window.open('https://jut-su.net/5161-volejbol-bitva-koncepcij.html', '_blank');
}
movie5.addEventListener('click', link5)
function link5(){
    window.open('https://jut-su.net/3042-volejbol-final.html', '_blank');
}
