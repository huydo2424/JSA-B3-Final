// Vòng lặp FOR-IN cho 1 Mảng
console.log("*** SAMPLE 1 ***")

let arr = ["Toán", "Ngữ Văn", "Tiếng Anh"]

for (let i in arr)
    console.log(arr[i])

// Vòng lặp FOR-IN cho 1 object
console.log("*** SAMPLE 2 ***")

let obj = {
    'name': "Nguyễn Văn Đẩu",
    'sex': "Không xác định",
    'crime': "Vi phạm hành chính"
}

for (let i in obj)
    console.log(i)

// Vòng lặp FOR-OF cho 1 Mảng
console.log("*** SAMPLE 3 ***")

for (let value of arr)
    console.log(value)

//Data products
let products = [
    {
       name: "Quần Jean 1",
       price: "500000",
       image: "https://lscoecomm.scene7.com/is/image/lscoecomm/SKINNY%20JEANS-1?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=500"
    },
    {
       name: "Quần Jean 2",
       price: "500000",
       image: "https://lscoecomm.scene7.com/is/image/lscoecomm/RELAXED%20PANTS?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=500"
    },
    {
       name: "Quần Jean 3",
       price: "500000",
       image: "https://lscoecomm.scene7.com/is/image/lscoecomm/TAPERED%20JEANS?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=500"
    },
    {
       name: "Quần Jean 4",
       price: "500000",
       image: "https://lscoecomm.scene7.com/is/image/lscoecomm/BOOTCUT%20JEANS-1?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=500"
    },
    {
       name: "Quần Jean 5",
       price: "500000",
       image: "https://lscoecomm.scene7.com/is/image/lscoecomm/SKINNY%20JEANS-1?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=400&hei=500"
    }
]
for (let i of products) {
    let col = document.createElement("div")
    col.classList.add("col-4")
    let card = document.createElement("div")
    card.classList.add("card")

    let p_img = document.createElement("img")
    p_img.classList.add("p_img")
    p_img.setAttribute("src", i.image)
    card.appendChild(p_img)
    let p_name = document.createElement("h1")
    p_name.classList.add("p_name")
    p_name.innerText=i.name
    card.appendChild(p_name)
    let p_price = document.createElement("p")
    
    p_price.classList.add("price")
    p_price.innerText= Intl.NumberFormat('vi-VN').format(i.price)
    card.appendChild(p_price)
    col.appendChild(card)
    document.getElementById("products").appendChild(col)
}

document.getElementById("search").addEventListener("click", ()=> {
    let searchInput = document.getElementById("search-input").value.toUpperCase()
    let cards = document.querySelectorAll(".card")
    let productsName = document.querySelectorAll(".p_name")

    productsName.forEach((items, index) => {
        if (items.innerText.toUpperCase().includes(searchInput)){
            cards[index].parentElement.classList.remove("hide")
        } else {
            cards[index].parentElement.classList.add("hide")
        }
    })

})