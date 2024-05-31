var cart = JSON.parse(sessionStorage.getItem('cart')) || {};
var listCart = JSON.parse(sessionStorage.getItem('listCart'));
var dataProductDapur = JSON.parse(sessionStorage.getItem('dataProductDapur'));
var dataProductRumah = JSON.parse(sessionStorage.getItem('dataProductRumah'));
var dataProductMakanan = JSON.parse(sessionStorage.getItem('dataProductMakanan'));
var dataProductMinuman = JSON.parse(sessionStorage.getItem('dataProductMinuman'));
var dataProductRokok = JSON.parse(sessionStorage.getItem('dataProductRokok'));
var dataProductLain = JSON.parse(sessionStorage.getItem('dataProductLain'));
var total = parseInt(sessionStorage.getItem("total"));
var cash = 0;
var moneyChange = 0;

function convertIDR(idr){
    return idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function loadData(){
    listProdukConfirm();
    paymentMethod('tunai');
    chooseMoney('customeCard');
}

function paymentMethod(param){
    var element = document.getElementById(param);
    $('.payment-method').removeClass('payment-method-selected');
    element.classList.add('payment-method-selected');
    if(param == 'tunai'){
        $('#cashMethod').show();
        $('#qrisMethod').hide();
        $('#transferMethod').hide();
    }else if(param == 'qris'){
        $('#qrisMethod').show();
        $('#transferMethod').hide();
        $('#cashMethod').hide();
    }else if(param == 'transfer'){
        $('#transferMethod').show();
        $('#cashMethod').hide();
        $('#qrisMethod').hide();
        $('#totalForTF').html('Rp '+ convertIDR(total));
    }
}

function inputCustomeMoney(element){
    var cash = parseInt($(element).val());
    var moneyChange = cash - total;

    $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
}

function chooseMoney(param){
    var element = document.getElementById(param);
    $('.money-card').removeClass('payment-method-selected');
    element.classList.add('payment-method-selected');

    if(param == 'customeCard'){
        cash = 0;
        document.getElementById('inpAmount').value = '';
        $('#moneyChange').html('-');
        $('.inpAmount').show();
        $('#amount').hide();
        $('#total').html('Rp '+ convertIDR(total));
    }else if(param == 'sepuluhCard'){
        cash = 10000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 10.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'duaPuluhCard'){
        cash = 20000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 20.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'limaPuluhCard'){
        cash = 50000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 50.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }else if(param == 'seratusCard'){
        cash = 100000;
        moneyChange = cash - total
        $('.inpAmount').hide();
        $('#amount').show();
        $('#total').html('Rp '+ convertIDR(total));
        $('#amount').html('Rp 100.000');
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }
}

function addToCart(productName) {

    if (cart[productName]) {
        total += cart[productName].amount;
        cart[productName].subTotal += cart[productName].amount;
        cart[productName].qty += 1;
    }
    sessionStorage.setItem('total', total);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    listProdukConfirm();
}

function removeFromCart(productName) {
    if (cart[productName]) {
        total -= cart[productName].amount;
        cart[productName].subTotal -= cart[productName].amount;
        cart[productName].qty -= 1;
        if (cart[productName].qty <= 0) {
            delete cart[productName];
        }
        sessionStorage.setItem('total', total);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        listProdukConfirm();
    }
}

function deleteFromCart(productName) {
    if (cart[productName]) {
        total -= cart[productName].subTotal;
        delete cart[productName];

        sessionStorage.setItem('cart', JSON.stringify(cart));
        sessionStorage.setItem('total', total);
        listProdukConfirm();
    }
}

function listProdukConfirm() {
    console.log('masuk sini');
    const cartDiv = document.getElementById('listConfirm');
    cartDiv.innerHTML = '';

    if($('#inpAmount').val() != ''){
        moneyChange = $('#inpAmount').val() - total;
    }else{
        moneyChange = cash - total;
    }

    Object.keys(cart).forEach(key => {
        console.log('2');
        const item = cart[key];
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="row mb-3">
                <div class="col-1">
                    <img src="${item.logo}" alt="" style="width: 70px;">
                </div>
                <div class="col-8">
                    <label for="" class="font-grey-14px">${item.productName}</label>
                </div>
                <div class="col-1 p-0" onclick="deleteFromCart('${key}')">
                    <img src="../assets/icons/ico-trash-grey.svg" alt="" class="img-trash">
                </div>
                <div class="col-2 text-center">
                    <label for="" class="price-product">Rp ${convertIDR(item.subTotal)}</label>
                    <div class="mt-3 text-center w-100" style="display: block;">
                        <button class="decreases-qty btn-qty-order" onclick="removeFromCart('${key}')">-</button>
                        <input type="tel" name="qty" value="${item.qty}" class="input-qty-order text-center mx-2" disabled/>
                        <button class="increase-qty btn-qty-order" onclick="addToCart('${key}')">+</button>
                    </div>
                </div>
            </div>
        `;
        cartDiv.appendChild(cartItemDiv);
    });

    
    if(total == 0){
        $('#total').html('Rp '+ 0);
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
        $('#totalForTF').html('Rp '+ 0);
    }else {
        $('#total').html('Rp '+ convertIDR(total));
        $('#totalForTF').html('Rp '+ convertIDR(total));
        $('#moneyChange').html('Rp '+ convertIDR(moneyChange));
    }
}