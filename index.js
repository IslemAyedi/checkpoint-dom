delet.addEventListener('click',function delete_row()
{
    delet.parentElement.remove();
});
delete1.addEventListener('click' ,function delete_row1()
{
    delete1.parentElement.remove();
});
delete2.addEventListener('click' ,function delete_row2()
{
    delete2.parentElement.remove();
});
like.addEventListener('click' ,function like(e){
    var x=document.getElementById('like').style.color;
    if(x=="red"){
        document.getElementById("like").style.color = "black";
    }
    else{
    document.getElementById("like").style.color = "red";
    }
});


like1.addEventListener('click' ,function like1(e){
    var x=document.getElementById('like1').style.color;
    if(x=="red"){
        document.getElementById("like1").style.color = "black";
    }
    else{
    document.getElementById("like1").style.color = "red";
    }
});

like2.addEventListener('click' ,function like2(e){
    var x=document.getElementById('like2').style.color;
    if(x=="red"){
        document.getElementById("like2").style.color = "black";
    }
    else{
    document.getElementById("like2").style.color = "red";
    }
});


const count1 = document.getElementById('quant1');
const price1 = document.getElementById('prix1');
const priceT = document.getElementById('prixtotal');


function increment1() {
    count1.innerHTML = +count1.innerHTML + 1
    price1.innerHTML = +price1.innerHTML + 20
    priceT.innerHTML = +priceT.innerHTML + 20
}

butplus1.addEventListener('click', increment1);

function decrement1() {
    if (count1.innerHTML > 0) {
        count1.innerHTML = +count1.innerHTML - 1
        price1.innerHTML = +price1.innerHTML - 20
        priceT.innerHTML = +priceT.innerHTML - 20
    }
}
butminus1.addEventListener('click', decrement1);




const count2 = document.getElementById('quant2');
const price2 = document.getElementById('prix2');






function increment2() {
    count2.innerHTML = +count2.innerHTML + 1
    price2.innerHTML = +price2.innerHTML + 30
    priceT.innerHTML = +priceT.innerHTML + 30
}

butplus2.addEventListener('click', increment2);

function decrement2() {
    if (count2.innerHTML > 0) {
        count2.innerHTML = +count2.innerHTML - 1
        price2.innerHTML = +price2.innerHTML - 30
        priceT.innerHTML = +priceT.innerHTML - 30
    }
}
butminus2.addEventListener('click', decrement2);

const count3 = document.getElementById('quant3');
const price3 = document.getElementById('prix3');






function increment3() {
    count3.innerHTML = +count3.innerHTML + 1
    price3.innerHTML = +price3.innerHTML + 10
    priceT.innerHTML = +priceT.innerHTML + 10
}

butplus3.addEventListener('click', increment3);

function decrement3() {
    if (count3.innerHTML > 0) {
        count3.innerHTML = +count3.innerHTML - 1
        price3.innerHTML = +price3.innerHTML - 10
        priceT.innerHTML = +priceT.innerHTML - 10
    }
}
butminus3.addEventListener('click', decrement3);