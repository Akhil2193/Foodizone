var foodDiv = document.createElement('div');

var itemName = document.createElement('p');
var itemNameInput = document.createElement('input');
var itemNameInputAtt1 = document.createAttribute('name')
itemNameInputAtt1.value = 'name';
itemNameInput.setAttribute(itemNameInputAtt1);
var itemNameInputAtt2 = document.createAttribute('placeholder')
itemNameInputAtt2.value = 'Enter Food Item Name';
itemNameInput.setAttribute(itemNameInputAtt2);
var itemNameInputAtt3 = document.createAttribute('type')
itemNameInputAtt3.value = 'text';
itemNameInput.setAttribute(itemNameInputAtt3);

itemName.appendChild(itemNameInput);


var itemPrice = document.createElement('p');
var itemPriceInput = document.createElement('input');
var itemPriceInputAtt1 = document.createAttribute('name')
itemPriceInputAtt1.value = 'price';
itemPriceInput.setAttribute(itemPriceInputAtt1);
var itemPriceInputAtt2 = document.createAttribute('type')
itemPriceInputAtt2.value = 'text';
itemPriceInput.setAttribute(itemPriceInputAtt2);
var itemPriceInputAtt3 = document.createAttribute('placeholder')
itemPriceInputAtt3.value = 'Enter Item Price';
itemPriceInput.setAttribute(itemPriceInputAtt3);

itemName.appendChild(itemNameInput);


var itemVeg = document.createElement('p');
var itemCategory = document.createElement('p');

foodDiv.appendChild(itemNameInput)