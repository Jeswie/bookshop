var cart = {}; //корзина

$(document).ready(function(){
    goodsOut();
    checkCart();
    showMiniCart();
});

function goodsOut(data){
    //вывод на страницу товаров

    $.getJSON('goods.json', function(data){
        //console.log(data);
        out="";
        for (var key in data)
            {
                /*
                out += '<div class ="single-good">';
                out += '<p>' + data[key].name+'</p>';
                out += '<img src="images/'+ data[key]['img']+'" alt="">';
                out += '<div>Cost: '+ data[key]['cost']+'</div>';
                out += '<button class="add-to-cart" data-art="'+key+'">Buy</button>';
                out += '</div>';
                */
                out += '<div class ="single-good">';
                out += `<p class="name">${data[key].name}</p>`;
                out += `<img src="images/${data[key]['img']}" alt="">`;
                out += `<div>Cost:${data[key]['cost']}</div>`;
                out += `<button class="add-to-cart" data-art="${key}">Buy</button>`;
                out += '</div>';
            }
        $('.goods-out').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart(){
    //comment
    var articul = $(this).attr('data-art');
    //подсчёт количества товаров в корзине
    if (cart[articul]!=undefined){
        cart[articul]++; //если товар есть, то добавляем +1
    }
    else {
        cart[articul] = 1; //если товара нет, то делаем его равным 1
    }
    localStorage.setItem('cart', JSON.stringify(cart)); //сохранение товара в localstorage
    //console.log(cart);
    showMiniCart();      
}

function checkCart(){
    //проверка наличия товаров в localStorage
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    //показывает содержимое миникорзины
    var out = '';
    for (var el in cart){
        out += el + ' --- ' + cart[el] + '<br>'; //вывод айди товара с количеством
    }
    out+='<br><a href="cart"> Cart </a>'; //вывод ссылки на корзину
    $('#minicart').html(out);
}

