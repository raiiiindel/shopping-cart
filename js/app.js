/*2. Generate the items in the cart with the data given to you. **Item data should not be hardcoded!***/

/*5. For the subtotal, add up the total price of all items. **This should not be hardcoded!***/

var itemList = [
{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, 
{product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, 
{product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, 
{product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29},
 {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33},
  {product: "Love Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}
  ];

//creating div ELements
var contentContainer = document.getElementById('content');
var sum = 0;

function createRow(arr){
	for(var i=0; i<arr.length; i++){

		var itemRow = document.createElement('div');
		itemRow.className = 'itemRow';

		var itemPic = document.createElement('img');
		itemPic.className = "itemPic";
		itemPic.src = "../images/item" + (i+1) + ".jpg";
		itemRow.appendChild(itemPic);

		var orders = document.createElement('div');
		orders.className = "orders";
		itemRow.appendChild(orders);


		var productName = document.createElement('h2');
		productName.className = 'productName';
		productName.innerHTML = arr[i].product;
		orders.appendChild(productName);

		var itemDesc = document.createElement('p');
		itemDesc.className = 'itemDesc';
		itemDesc.innerHTML = arr[i].description;
		orders.appendChild(itemDesc);

		var itemPrice = document.createElement('div');
		itemPrice.className = 'itemPrice';
		itemPrice.innerHTML = arr[i].price;
		itemRow.appendChild(itemPrice);

		sum += arr[i].price;
		

		contentContainer.appendChild(itemRow);
		
	}

	var subtotalDiv = document.createElement('div');
		subtotalDiv.id = 'subtotalDiv';

	contentContainer.appendChild(subtotalDiv);

	var subtotal = document.createElement('div');
		subtotal.id = 'Subtotal';
		subtotal.innerHTML = "Subtotal";

	var addingTotal = document.createElement('div');
	addingTotal.id = 'addingTotal';
	addingTotal.innerHTML = sum;

	subtotalDiv.appendChild(subtotal);
	subtotalDiv.appendChild(addingTotal);

}
createRow(itemList);

var itemsElem = document.getElementsByClassName('productName');
for(var i=0; i<itemsElem.length; i++){
	itemsElem[i].addEventListener('click', showItemDescrip);
}


/*var addSub = document.createElement('div');
addSub.id = addSub;
addSub.innerHTML = "Subtotal";
var	sum = 0;
for(var i=0; i<itemList.length; i++){
	sum += itemList[i].price;
}
var getTotal = document.getElementById('addingTotal');
getTotal.innerHTML = sum;
contentContainer.appendChild(addSub);*/



/*
  //adding product name to Items
var getItem = document.getElementsByClassName('itemsTitle');
//adding toggle function

var itemsElem = document.getElementsByClassName('items');
for(var i=0; i<itemsElem.length; i++){
	itemsElem[i].addEventListener('click', showItemDescrip);
}
function showItemDescrip(){
	var itemDes = this.querySelectorAll(".description")[0];
	if(itemDes.style.display === 'none'){
		itemDes.style.display = 'block';
	}else{
		itemDes.style.display = 'none';
	}
}



function addProductInfo(){
	for(var i=0; i<getItem.length; i++){
		getItem[i].innerHTML = itemList[i].product;
	}
}
addProductInfo();

//adding product name below Items

var addItem = document.getElementsByClassName('cartItems');
function addingProductName(){
	for (var i=0; i<addItem.length; i++){
		addItem[i].innerHTML = itemList[i].product;
	}
}
addingProductName();

//adding product description to Items

var addDescrip = document.getElementsByClassName('description');
function addingDescription(){
	for (var i=0; i<addDescrip.length; i++){
		addDescrip[i].innerHTML = itemList[i].description;
	}
}
addingDescription();

//adding product price to Items

var addPrice = document.getElementsByClassName('itemPrice');

function addingPrice(){
	for(var i=0; i<addPrice.length; i++){
		addPrice[i].innerHTML = itemList[i].price;
			}
}
addingPrice();

//Adding and getting Subtotal

var addSub = document.getElementById('totalTitle');
addSub.innerHTML = "Subtotal";

var	sum = 0;
for(var i=0; i<itemList.length; i++){
	sum += itemList[i].price;
}

var getTotal = document.getElementById('addingTotal');
getTotal.innerHTML = sum;




/*for(var i=0; i<getItem.length; i++){
	getItem[i].addEventListener('click', showProductInfo);
}

function showProductInfo(){
	
	if(getItemDescrip.style.display === 'none'){
		getItemDescrip.style.display = 'block';
	}else{
		getItemDescrip.style.display = 'none';
	}

}*/