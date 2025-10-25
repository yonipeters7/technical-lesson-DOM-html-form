// Write your code here!
const shoppingList = [
    {name: "Chicken Breast", price:10.50},
    {name: "Paparika", price: 3.20}, 
    {name: "Chips", price: 6.50}, 
    {name: "Eggs", price: 4.00}, 
    {name: "Milk", price: 7.80}
 ]

 function displayCartItem(item){
   const shoppingCart = document.querySelector("#cart")
   const newItem = document.createElement("li")

   const itemName =document.createElement("p")
   const itemPrice = document.createElement("p")

   itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price

   newItem.append(itemName, itemPrice)
   shoppingCart.append(newItem)
}

 shoppingList.forEach(item => {
        displayCartItem(item)
    })

    const form = document.querySelector("#new-cart-item-form")

    function handleSubmit(event){
        event.preventDefault()
        const newName = event.target.name.value
     const newPrice = event.target.price.value

	const newItem = {
		name: newName,
		price: newPrice
	}
	shoppingList.push(newItem)
	displayCartItem(newItem)
    }

    form.addEventListener("submit", (event)=> {
        handleSubmit(event)
    })