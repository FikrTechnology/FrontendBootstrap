var listCart = [];
var cart = JSON.parse(sessionStorage.getItem("cart")) || {};
var total = parseInt(sessionStorage.getItem("total")) || 0;
var sumQty = parseInt(sessionStorage.getItem("sumQty")) || 0;
var dataProductDapur = [];
var dataProductRumah = [];
var dataProductMakanan = [];
var dataProductMinuman = [];
var dataProductRokok = [];
var dataProductLain = [];
let filteredProduct = null;

// var data = [
//     {
//         "logo": "../assets/img/product/dapur/img-sambal-indofood.png",
//         "amount": 14000,
//         "category": "dapur",
//         "productName": "Indofood Sambal Pedas 275 ml",
//     },
//     {
//         "logo": "../assets/img/product/dapur/img-royco.png",
//         "amount": 13000,
//         "category": "dapur",
//         "productName": "Royco Bumbu Penyedap Rasa Kaldu Ayam 220 g",
//     },
//     {
//         "logo": "../assets/img/product/dapur/img-minyak-sania.png",
//         "amount": 19000,
//         "category": "dapur",
//         "productName": "Sania Minyak Goreng Pouch 1 L",
//     },
//     {
//         "logo": "../assets/img/product/dapur/img-kecap-bango.png",
//         "amount": 13000,
//         "category": "dapur",
//         "productName": "BANGO Kecap Manis 135 ml",
//     },
//     {
//         "logo": "../assets/img/product/dapur/img-santan-kara.png",
//         "amount": 4000,
//         "category": "dapur",
//         "productName": "kara SUN Santan Kelapa Bubuk 20 g",
//     },
//     {
//         "logo": "../assets/img/product/dapur/img-gula-psm.png",
//         "amount": 18000,
//         "category": "dapur",
//         "productName": "PSM Gula Pasir Kristal Putih Premium 1 kg",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-detergen-daia.jpg",
//         "amount": 10000,
//         "category": "rumah",
//         "productName": "Daia Deterjen Bubuk + Softener Pink 470 g",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-karbol.png",
//         "amount": 15000,
//         "category": "rumah",
//         "productName": "Alfamart Karbol Wangi Anti Bakteri Cemara 750",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-tisue-multi.png",
//         "amount": 21000,
//         "category": "rumah",
//         "productName": "multi Facial Tissue 250 s",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-batre-eveready.png",
//         "amount": 20000,
//         "category": "rumah",
//         "productName": "EVEREADY Super Heavy Duty Baterai AA 1215 4 pcs",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-kispray.png",
//         "amount": 7000,
//         "category": "rumah",
//         "productName": "Kispray Violet Pewangi Pakaian Refill 280 ml",
//     },
//     {
//         "logo": "../assets/img/product/rumah/img-pewangi-downy.png",
//         "amount": 18000,
//         "category": "rumah",
//         "productName": "Downy Pelembut & Pewangi Pakaian",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-japota.jpg",
//         "amount": 9000,
//         "category": "makanan",
//         "productName": "Japota Keripik Kentang Rasa Sambal Bawang 68 g",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-kacang-garuda.png",
//         "amount": 25000,
//         "category": "makanan",
//         "productName": "garuda Kacang Kulit 375 g",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-kacang-telur.png",
//         "amount": 10000,
//         "category": "makanan",
//         "productName": "Gery Saluut Malkist Sweet Cheese 100 g",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-wafer-gery.png",
//         "amount": 13000,
//         "category": "makanan",
//         "productName": "Tango Wafer Vanilla Milk 115 g",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-wafer-milo.png",
//         "amount": 15000,
//         "category": "makanan",
//         "productName": "Kacang Telur Medan Premium 150 g",
//     },
//     {
//         "logo": "../assets/img/product/makanan/img-wafer-tango.png",
//         "amount": 6000,
//         "category": "makanan",
//         "productName": "MILO Choco Bar 15 g",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-teh-botol-tawar.jpg",
//         "amount": 5000,
//         "category": "minuman",
//         "productName": "Tehbotol Sosro Tawar 350 ml",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-cap-kaki-tiga.png",
//         "amount": 9000,
//         "category": "minuman",
//         "productName": "Cap Kaki Tiga Larutan Penyegar Jambu Kaleng",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-fruit-tea.png",
//         "amount": 8000,
//         "category": "minuman",
//         "productName": "FRUIT TEA Minuman Teh X-Treme",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-hemaviton.png",
//         "amount": 6000,
//         "category": "minuman",
//         "productName": "hemaviton Energy Drink",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-indomilk.png",
//         "amount": 6000,
//         "category": "minuman",
//         "productName": "INDOMILK Susu Cair Rasa Strawberry",
//     },
//     {
//         "logo": "../assets/img/product/minuman/img-redbull.png",
//         "amount": 10000,
//         "category": "minuman",
//         "productName": "Red Bull Kratingdaeng Energy Drink Gold",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-rokok-camel-yellow.jpg",
//         "amount": 32000,
//         "category": "rokok",
//         "productName": "CAMEL Yellow Rokok 20 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-clas-mild.png",
//         "amount": 25000,
//         "category": "rokok",
//         "productName": "CLAS MILD Rokok 12 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-djarum-black.png",
//         "amount": 35000,
//         "category": "rokok",
//         "productName": "DJARUM Black Rokok 16 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-djarum-king.png",
//         "amount": 23000,
//         "category": "rokok",
//         "productName": "DJARUM King Rokok 12 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-djarum-super.png",
//         "amount": 27000,
//         "category": "rokok",
//         "productName": "DJARUM Super Rokok 12 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-dunhill.png",
//         "amount": 32000,
//         "category": "rokok",
//         "productName": "DUNHILL Mild Rokok 16 Batang",
//     },
//     {
//         "logo": "../assets/img/product/rokok/img-esse-change.png",
//         "amount": 42000,
//         "category": "rokok",
//         "productName": "ESSE Change Rokok 20 Batang",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-koyo.jpg",
//         "amount": 22000,
//         "category": "lain",
//         "productName": "Cabe Koyo 10 Lembar",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-bejo-masuk-angin.png",
//         "amount": 17000,
//         "category": "lain",
//         "productName": "BEJO Obat Herbal Masuk Angin",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-entrostop.png",
//         "amount": 15000,
//         "category": "lain",
//         "productName": "Entrostop Herbal box 15 ml 6 s",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-freshcare.png",
//         "amount": 17000,
//         "category": "lain",
//         "productName": "FreshCare Minyak Angin Aromatherapy",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-insto-dry.png",
//         "amount": 15000,
//         "category": "lain",
//         "productName": "INSTO Dry Eyes Obat Tetes Mata",
//     },
//     {
//         "logo": "../assets/img/product/lain/img-procold.png",
//         "amount": 6000,
//         "category": "lain",
//         "productName": "Procold Obat Flu 6 Kaplet",
//     },
// ];

// For Dummy
// function loadProduct(){
//     for(var i = 0; i < data.length; i++){
//         var product = data[i];
//         var productCategory = product.category;
//         var productLogo = product.logo;
//         var productAmount = product.amount;
//         var productName = product.productName;

//         if(productCategory == "dapur"){
//             dataProductDapur.push(product);
//         }else if(productCategory == "rumah"){
//             dataProductRumah.push(product);
//         }else if(productCategory == "makanan"){
//             dataProductMakanan.push(product);
//         }else if(productCategory == "minuman"){
//             dataProductMinuman.push(product);
//         }else if(productCategory == "rokok"){
//             dataProductRokok.push(product);
//         }else if(productCategory == "lain"){
//             dataProductLain.push(product);
//         }
//     }

//     initProductDapur(dataProductDapur);
//     initProductRumah(dataProductRumah);
//     initProductMakanan(dataProductMakanan);
//     initProductMinuman(dataProductMinuman);
//     initProductRokok(dataProductRokok);
//     initProductLain(dataProductLain);

//     if(Object.keys(cart).length === 0){
//         $('#emptyCart').show();
//         $('#parentCart').hide();
//     }else{
//         $('#emptyCart').hide();
//         $('#parentCart').show();
//         displayCart();
//     }
// }

async function loadProduct(){
    await fetch("http://192.168.8.106:3000/products", {
        method: 'GET'
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data.data);
        for(var i = 0; i < data.data.length; i++){
            var product = data.data[i];
            console.log(product);
            var productCategory = product.category;
            var productLogo = product.logo;
            var productAmount = product.amount;
            var productName = product.productName;
    
            if(productCategory == "dapur"){
                dataProductDapur.push(product);
            }else if(productCategory == "rumah"){
                dataProductRumah.push(product);
            }else if(productCategory == "makanan"){
                dataProductMakanan.push(product);
            }else if(productCategory == "minuman"){
                dataProductMinuman.push(product);
            }else if(productCategory == "rokok"){
                dataProductRokok.push(product);
            }else if(productCategory == "lain"){
                dataProductLain.push(product);
            }
        }
    
        initProductDapur(dataProductDapur);
        initProductRumah(dataProductRumah);
        initProductMakanan(dataProductMakanan);
        initProductMinuman(dataProductMinuman);
        initProductRokok(dataProductRokok);
        initProductLain(dataProductLain);
    
        if(Object.keys(cart).length === 0){
            $('#emptyCart').show();
            $('#parentCart').hide();
        }else{
            $('#emptyCart').hide();
            $('#parentCart').show();
            displayCart();
        }
    })
}

function initProductDapur(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" class="">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}','dapur', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductDapur').html(content);
}

function initProductRumah(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" style="width: 130px;">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}', 'rumah', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductRumah').html(content);
}

function initProductMakanan(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" style="width: 130px;">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}', 'makanan', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductMakanan').html(content);
}

function initProductMinuman(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" style="width: 130px;">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}', 'minuman', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductMinuman').html(content);
}

function initProductRokok(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" style="width: 130px;">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}', 'rokok', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductRokok').html(content);
}

function initProductLain(listProduct){
    var content = '';

    listProduct.forEach((element, index) => {
        content +=`
            <div class="col-3 mb-3">
                <div class="product-selected py-1 px-2" style="display: none;">Terpilih</div>
                <div class="white-card p-4 rounded">
                    <div class="img-product text-center mt-2">
                        <img src="${element.logo}" alt="" style="width: 130px;">
                    </div>
                    <div>
                        <label for="" class="mt-3 font-grey-16px">${element.productName}</label>
                        <label for="" class="mt-3 price-product">Rp ${element.amount}</label>
                    </div>
                    <div class="btn-add-cart mt-3" style="display: block;">
                        <button class="add-to-cart py-2" onclick="addToCart('${index}', 'lain', '${encodeURIComponent(JSON.stringify(element))}')">+ Add to Cart</button>
                    </div>
                    <div class="mt-3 text-center w-100" style="display: none;">
                        <button class="decreases-qty btn-qty">-</button>
                        <input type="tel" name="qty" value="0" class="input-qty text-center mx-2"/>
                        <button class="increase-qty btn-qty">+</button>
                    </div>
                </div>
            </div>
        `
    });

    $('#listProductLain').html(content);
}

function category(produk, id){
    var element = document.getElementById(id);

    document.getElementById("searchInput").value = "";
    filteredProduct = null;

    renderCategoryProducts("catDapur", dataProductDapur);
    renderCategoryProducts("catRumah", dataProductRumah);
    renderCategoryProducts("catMakanan", dataProductMakanan);
    renderCategoryProducts("catMinuman", dataProductMinuman);
    renderCategoryProducts("catRokok", dataProductRokok);
    renderCategoryProducts("catLain", dataProductLain);
    
    $('.cat-product-sub-card').removeClass('category-selected');
    element.classList.add('category-selected');
    if(produk == 'dapur'){
        $('.list-product-dapur').show();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'rumah'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').show();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'makanan'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').show();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'minuman'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').show();
        $('.list-product-rokok').hide();
        $('.list-product-lain').hide();
    }else if(produk == 'rokok'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').show();
        $('.list-product-lain').hide();
    }else if(produk == 'lain'){
        $('.list-product-dapur').hide();
        $('.list-product-rumah').hide();
        $('.list-product-makanan').hide();
        $('.list-product-minuman').hide();
        $('.list-product-rokok').hide();
        $('.list-product-lain').show();
    }
}

function addToCart(index, cat, data) {
    $('#parentCart').show();
    $('#emptyCart').hide();

    var dataSelected = JSON.parse(decodeURIComponent(data));
    listCart.push(dataSelected);
    console.log('list data yg di select ' + JSON.stringify(listCart));

    if(cat == "dapur"){
        var product = dataProductDapur[index];
    }else if(cat == "rumah"){
        var product = dataProductRumah[index];
    }else if(cat == "makanan"){
        var product = dataProductMakanan[index];
    }else if(cat == "minuman"){
        var product = dataProductMinuman[index];
    }else if(cat == "rokok"){
        var product = dataProductRokok[index];
    }else if(cat == "lain"){
        var product = dataProductLain[index];
    }
    console.log(product);
    console.log(cart);
    if (cart[product.productName]) {
        cart[product.productName].subTotal += cart[product.productName].amount;
        cart[product.productName].qty += 1;
    } else {
        var subTotal = product.amount;
        cart[product.productName] = { ...product, qty: 1, index: index, subTotal: subTotal, };
    }
    total += product.amount;
    sumQty += 1;
    displayCart();
}



// ================= Fungsi Seputar Cart ===================
function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if(Object.keys(cart).length === 0){
        Object.values(cart).forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="">
                    <div class="row">
                        <div class="col-3 p-0">
                            <img src="${item.logo}" alt="" style="width: 100px;">
                        </div>
                        <div class="col-9 ps-3">
                            <label for="" class="font-grey-14px">${item.productName}</label><br>
                            <label for="" class="price-product my-2">Rp ${item.amount}</label><br>
                            <label for="" class="font-grey-12px">${item.qty}x</label>
                        </div>
                    </div>
                    <hr>
                </div>
            `;
            $('#total').html('Rp '+total);
            cartDiv.appendChild(cartItemDiv);
        });
    }else{
        Object.keys(cart).forEach(key => {
            const item = cart[key];
            console.log(item);
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="">
                    <div class="row">
                        <div class="col-3 p-0">
                            <img src="${item.logo}" alt="" style="width: 100px;">
                        </div>
                        <div class="col-9 ps-3">
                            <label for="" class="font-grey-14px">${item.productName}</label><br>
                            <label for="" class="price-product my-2">Rp ${item.amount}</label><br>
                            <label for="" class="font-grey-12px">${item.qty}x</label>
                        </div>
                    </div>
                    <hr>
                </div>
            `;
            $('#total').html('Rp '+total);
            cartDiv.appendChild(cartItemDiv);
        });
    }
}

function placeOrder(){
    sessionStorage.setItem('sumQty', sumQty);
    sessionStorage.setItem('total', total);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('listCart', JSON.stringify(listCart));
    sessionStorage.setItem('dataProductDapur', JSON.stringify(dataProductDapur));
    sessionStorage.setItem('dataProductRumah', JSON.stringify(dataProductRumah));
    sessionStorage.setItem('dataProductMakanan', JSON.stringify(dataProductMakanan));
    sessionStorage.setItem('dataProductMinuman', JSON.stringify(dataProductMinuman));
    sessionStorage.setItem('dataProductRokok', JSON.stringify(dataProductRokok));
    sessionStorage.setItem('dataProductLain', JSON.stringify(dataProductLain));

    window.location = 'dashboardOrder.html';
}



// ============ Fungsi Seputar Sort ===================
function handleSort(type) {
    // Cari kategori yang sedang aktif
    const activeCategory = document.querySelector(".cat-product-sub-card.category-selected");
    if (!activeCategory) return;

    const categoryId = activeCategory.id;
    let list = [];

    // Ambil list sesuai kategori
    if (categoryId === "catDapur") list = dataProductDapur;
    else if (categoryId === "catRumah") list = dataProductRumah;
    else if (categoryId === "catMakanan") list = dataProductMakanan;
    else if (categoryId === "catMinuman") list = dataProductMinuman;
    else if (categoryId === "catRokok") list = dataProductRokok;
    else if (categoryId === "catLain") list = dataProductLain;

    // Sorting berdasarkan value
    switch (type) {
        case "name-asc":
            list.sort((a, b) => a.productName.localeCompare(b.productName));
            break;
        case "name-desc":
            list.sort((a, b) => b.productName.localeCompare(a.productName));
            break;
        case "price-asc":
            list.sort((a, b) => a.amount - b.amount);
            break;
        case "price-desc":
            list.sort((a, b) => b.amount - a.amount);
            break;
    }

    // Re-render ulang sesuai kategori
    if (categoryId === "catDapur") initProductDapur(list);
    else if (categoryId === "catRumah") initProductRumah(list);
    else if (categoryId === "catMakanan") initProductMakanan(list);
    else if (categoryId === "catMinuman") initProductMinuman(list);
    else if (categoryId === "catRokok") initProductRokok(list);
    else if (categoryId === "catLain") initProductLain(list);
}




// ============ Fungsi Seputar Search Bar ===================
function handleSearch(keyword) {
    const activeCategory = document.querySelector(".cat-product-sub-card.category-selected");
    if (!activeCategory) return;

    const categoryId = activeCategory.id;
    let list = [];

    // Ambil data asli dari kategori aktif
    if (categoryId === "catDapur") list = dataProductDapur;
    else if (categoryId === "catRumah") list = dataProductRumah;
    else if (categoryId === "catMakanan") list = dataProductMakanan;
    else if (categoryId === "catMinuman") list = dataProductMinuman;
    else if (categoryId === "catRokok") list = dataProductRokok;
    else if (categoryId === "catLain") list = dataProductLain;

    // Filter berdasarkan keyword
    filteredProduct = list.filter(item =>
        item.productName.toLowerCase().includes(keyword.toLowerCase())
    );

    // Tampilkan hasil pencarian
    renderCategoryProducts(categoryId, filteredProduct);
}

function renderCategoryProducts(categoryId, productList) {
    switch (categoryId) {
        case "catDapur":
            initProductDapur(productList);
            break;
        case "catRumah":
            initProductRumah(productList);
            break;
        case "catMakanan":
            initProductMakanan(productList);
            break;
        case "catMinuman":
            initProductMinuman(productList);
            break;
        case "catRokok":
            initProductRokok(productList);
            break;
        case "catLain":
            initProductLain(productList);
            break;
    }
}