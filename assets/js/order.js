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
var sumQty = parseInt(sessionStorage.getItem("sumQty"));

var dataHistory = [
    {
        "total": 54000,
        "cash": 100000,
        "moneyChange": 46000,
        "dateTime": "Senin, 1 Juni 2024 Jam 12:58 WIB",
        "outlet": "M1 - Menara BNI Pejompongan",
        "sumQty": 4,
        "receipt": {
            "Indofood Sambal Pedas 275 ml": {
                "logo": "../assets/img/product/dapur/img-sambal-indofood.png",
                "amount": 14000,
                "category": "dapur",
                "productName": "Indofood Sambal Pedas 275 ml",
                "qty": 2,
                "index": "0",
                "subTotal": 28000
            },
            "Royco Bumbu Penyedap Rasa Kaldu Ayam 220 g": {
                "logo": "../assets/img/product/dapur/img-royco.png",
                "amount": 13000,
                "category": "dapur",
                "productName": "Royco Bumbu Penyedap Rasa Kaldu Ayam 220 g",
                "qty": 2,
                "index": "1",
                "subTotal": 26000
            },
        },
    },
    {
        "total":37000,
        "cash":50000,
        "moneyChange":13000,
        "dateTime":"Senin, 1 Juni 2024 Jam 15:40 WIB ",
        "outlet":"M1 - Menara BNI Pejompongan",
        "sumQty":2,
        "receipt":{
           "CAMEL Yellow Rokok 20 Batang":{
              "logo":"../assets/img/product/rokok/img-rokok-camel-yellow.jpg",
              "amount":32000,
              "category":"rokok",
              "productName":"CAMEL Yellow Rokok 20 Batang",
              "qty":1,
              "index":"0",
              "subTotal":32000
           },
           "Tehbotol Sosro Tawar 350 ml":{
              "logo":"../assets/img/product/minuman/img-teh-botol-tawar.jpg",
              "amount":5000,
              "category":"minuman",
              "productName":"Tehbotol Sosro Tawar 350 ml",
              "qty":1,
              "index":"0",
              "subTotal":5000
           }
        }
    },
];

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
        sumQty += 1;
        total += cart[productName].amount;
        cart[productName].subTotal += cart[productName].amount;
        cart[productName].qty += 1;
    }
    sessionStorage.setItem('total', total);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('sumQty', sumQty);
    listProdukConfirm();
}

function removeFromCart(productName) {
    if (cart[productName]) {
        sumQty -= 1;
        total -= cart[productName].amount;
        cart[productName].subTotal -= cart[productName].amount;
        cart[productName].qty -= 1;
        if (cart[productName].qty <= 0) {
            delete cart[productName];
        }
        sessionStorage.setItem('total', total);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        sessionStorage.setItem('sumQty', sumQty);
        listProdukConfirm();
    }
}

function deleteFromCart(productName) {
    if (cart[productName]) {
        sumQty -= cart[productName].qty;
        total -= cart[productName].subTotal;
        delete cart[productName];

        sessionStorage.setItem('cart', JSON.stringify(cart));
        sessionStorage.setItem('total', total);
        sessionStorage.setItem('sumQty', sumQty);
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

function donePayment(method){
    console.log(moneyChange);
    console.log(total);
    if(((method == "trfMethod") && ((isNaN(total)) || (total <= 0))) || (($('#cashMethod').css('display') == 'block') && ((moneyChange == '-') || (moneyChange == undefined) || (moneyChange == "") || (moneyChange <= 0) || (isNaN(moneyChange) || (total <= 0))))){
        alert('Harap Pilih atau Masukkan Nominal Uang Pas');
    }else if((method == "trfMethod") && ((!isNaN(total)) || (total >= 0))){
        cash = total;
        moneyChange = cash - total;
        saveTransaction();
        sessionStorage.removeItem('cart');
        sessionStorage.removeItem('total');
        sessionStorage.removeItem('sumQty');
        sessionStorage.removeItem('listCart');
        window.location = 'dashboardHistory.html';
    }else{
        saveTransaction();
        sessionStorage.removeItem('cart');
        sessionStorage.removeItem('total');
        sessionStorage.removeItem('sumQty');
        sessionStorage.removeItem('listCart');
        window.location = 'dashboardHistory.html';
    }
}

// async function saveTransaction() {
function saveTransaction() {
    // For Dummy
    let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || dataHistory;
    //End
    const newTransaction = {
        "total": total,
        "cash": cash,
        "moneyChange": moneyChange,
        "dateTime": dateNow(),
        "outlet": "M1 - Menara BNI Pejompongan",
        "sumQty": sumQty,
        "receipt": cart,
    };

    // For DB
    // await fetch('http://192.168.8.105:3000/createReceipt', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({transaction: JSON.stringify(newTransaction)})
    // });

    //For Dummy
    // Add new transaction to the array
    transactionHistory.push(newTransaction);

    // Update localStorage with the new transaction
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));

    // Update the original transactions array (if required)
    dataHistory.push(newTransaction);
    // End  
}

function dateNow(){
    var dateTime = new Date();
    if (dateTime.getTimezoneOffset() == 0) (a=dateTime.getTime() + ( 7 *60*60*1000))
    else (a=dateTime.getTime());
    dateTime.setTime(a);
    var yearNow = dateTime.getFullYear();
    var monthNow = dateTime.getMonth();
    var dayNow = dateTime.getDate();
    var hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
    var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
    var dateNow = dayNow+" "+bulanarray[monthNow]+" "+yearNow+" Jam " + ((dateTime.getHours() < 10) ? "0" : "") + dateTime.getHours() + ":" + ((dateTime.getMinutes() < 10)? "0" : "") + dateTime.getMinutes() + (" WIB ");
    
    return dateNow;
}