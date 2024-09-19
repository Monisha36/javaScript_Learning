// Array of products (JSON object)
const products = [
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Smartphone", category: "electronics", price: 499 },
    { name: "T-Shirt", category: "clothing", price: 25 },
    { name: "Jeans", category: "clothing", price: 40 },
    { name: "Novel", category: "books", price: 15 },
    { name: "Textbook", category: "books", price: 60 }
];

// Function to filter and display products based on selected category and price
function filterProducts() {
    // Get the selected category and price threshold from the HTML inputs
    const selectedCategory = document.getElementById('category').value;
    const priceThreshold = document.getElementById('price').value;

    // Get the div where we will display the filtered products
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Clear previous results

    for(let i=0; i<=products.length; i++)
    {
		let product = products[i];
	if((selectedCategory === 'all' || product.category === selectedCategory) && product.price < priceThreshold)
	{
	resultDiv.innerHTML += `<p>${product.name} - $${product.price}</p>`
	}
    }
}
