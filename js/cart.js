
var cart = {}; //корзина

function loadCart(){

    //проверка наличия товаров в корзине и вызов showCart
    if (localStorage.getItem('cart')){
        //запись товаров из LS в cart
        cart = JSON.parse(localStorage.getItem('cart'));
        console.log(isEmpty(cart));
        if(!isEmpty(cart)){
            $('#mycart').html('Cart is empty!');
        }
        else showCart();
    }
    else {
        $('#mycart').html('Cart is empty!');
    }
}

function showCart(){
    //вырисовка корзины на странице
    if(!isEmpty(cart)){
        $('#mycart').html('Cart is empty!');
    }
    else{
        //получение товаров из json
        $.getJSON('goods.json', function(data){
            var goods=data;
            var out="";
            //перебор элементов в корзине
            for(var id in cart){
                //key айди товара
                out += `<button data-id="${id}" class="del-goods">x</button>`;
                out += `<img src="images\\${goods[id].img}">`;
                out += `${goods[id].name  }`;
                out += `${cart[id]   }`;
                out += '<br>'
                
            }
            $('#mycart').html(out); //вывод в mycart
            $('.del-goods').on('click', delGoods);
        });
    }
}

$(document).ready(function(){
    loadCart(); //загрузка корзины
});

function delGoods(){
    var id = $(this).attr('data-id'); //получение айди товара, по которому кликнули
    delete cart[id]; //удаление из корзины
    saveToCart();
    showCart(); //отрисовка корзины без удаленного элемента
}

function saveToCart(){
    localStorage.setItem('cart', JSON.stringify(cart)); //сохранение корзины в LS при этом изменяя в строку
}

function isEmpty(object){
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;   
}

/*
//загрузка файла JSON
$.getJSON('goods.json', function(data){
    var goods = data; //все товары в массиве
    //console.log(goods); // все тофвары
    checkCart();
    //console.log(cart); // все товары в корзине
    showCart(); //вывод товара на страницу
    function showCart(){
    if ($.isEmptyObject(cart))
    {
        //корзина пуста
        var out = 'Cart is empty. <a href="/">Add products.</a>'; //на другом сервере нужно написать полное название - /bookshop.ua/
        $('#mycart').html(out);
    }
    else {
        var out = '';
        for (var key in cart){
            out += '<button class="delete" data-art="'+ key +'">x</button>';
            out += ' '+ goods[key].name+' '
            out += '<img src="images/'+goods[key].img+'" alt="" width=120px>'
            out += ' <button class="minus" data-art="'+ key +'">-</button> ';
            out += cart[key];
            out += ' <button class="plus" data-art="'+ key +'">+</button> ';
            out += cart[key]*goods[key].cost;
            out += '<br>';
        }
        $('#mycart').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delete').on('click', deleteGoods);
        }

        function plusGoods(){
            var articul = $(this).attr('data-art');
            cart[articul]++;
            saveCartInLocalStorage(); 
            showCart();
        }

        function minusGoods(){
            var articul = $(this).attr('data-art');
            if(cart[articul]>1) {
                cart[articul]--;
            }
            else delete cart[articul]; //ассоциативный массив
            saveCartInLocalStorage(); 
            showCart();
        }

        function deleteGoods(){
            var articul = $(this).attr('data-art');
            delete cart[articul];
            saveCartInLocalStorage(); 
            showCart();
        }
    }
});

function checkCart(){
    //проверка наличия товаров в localStorage
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

//сохранение изменений в корзие в локал сторэдж
function saveCartInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
*/