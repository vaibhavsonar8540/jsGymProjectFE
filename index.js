
function fetchdata() {
    fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => {
            show(data);
        })
        .catch((err) => console.log("Error fetching data:", err));

        fetch('http://localhost:3000/products2')
        .then((res) => res.json())
        .then((data) => {
            show2(data);
        })
        .catch((err) => console.log("Error fetching data:", err));

        fetch('http://localhost:3000/cardio')
        .then((res)=> res.json())
        .then((data)=>
        {
            show3(data);
        })
        .catch((err) => console.log("Error fetching data:", err));

        fetch('http://localhost:3000/gym')
        .then((res)=> res.json())
        .then((data)=>
        {
            show4(data);
        })
        .catch((err) => console.log("Error fetching data:", err));
        
        fetch('http://localhost:3000/bicycle')
        .then((res)=> res.json())
        .then((data)=>
        {
            show5(data);
        })
        .catch((err) => console.log("Error fetching data:", err));


        fetch('http://localhost:3000/plate')
        .then((res)=> res.json())
        .then((data)=>
        {
            show6(data);
        })
        .catch((err) => console.log("Error fetching data:", err));


        fetch('http://localhost:3000/weights')
        .then((res)=> res.json())
        .then((data)=>
        {
            show7(data);
        })
        .catch((err) => console.log("Error fetching data:", err));
}

fetchdata();

function show(data) {
    // Using map to generate HTML for all items, and then join them together into a single string
    let card = document.getElementById("main-products");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card.innerHTML = store.join('');
}

function show2(data) {
    // Using map to generate HTML for all items, and then join them together into a single string
    let card2 = document.getElementById("main-products2");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card2.innerHTML = store.join('');
}

function show3(data)
{
    let card3 = document.getElementById("cardio");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card3.innerHTML = store.join('');
}

function show4(data)
{
    
    let card4 = document.getElementById("gym");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card4.innerHTML = store.join('');
}

function show5(data)
{
    
    let card5 = document.getElementById("bicycle");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card5.innerHTML = store.join('');
}

function show6(data)
{
    
    let card6 = document.getElementById("plate");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card6.innerHTML = store.join('');
}

function show7(data)
{
    
    let card7 = document.getElementById("weight");
    const store = data.map((ele) => {
        // Make sure to return the result from the adddata function
        return adddata(ele.image, ele.name, ele.original_price,ele.sale_price,ele.discount);
    });

    // Set the innerHTML of the card container to the joined string of HTML
    card7.innerHTML = store.join('');
}

 
function adddata(image, name, sale_price, original_price, discount) {
    return `

    <div class="card">
    <a href='description.html?image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&sale_price=${encodeURIComponent(sale_price)}&original_price=${encodeURIComponent(original_price)}&discount=${encodeURIComponent(discount)}'style="text-decoration: none;">
        <div class="card-img">
            <img src="${image}" > 
        </div>
        <div class="card-body">
           <b> <p class="card-name">${name}</p> </b>
            <p class="card-price">Sale Price: <span style="text-decoration: line-through;">  ${sale_price} </span></p>
            <p class="card-price">Original Price: ${original_price} </p>
            <p class="card-discount"> Discount : ${discount}</p>
        </div>
    </div>
    `;
}


function toggleOffCanvas() {
    const offCanvas = document.getElementById('offCanvas');
    offCanvas.classList.toggle('open');
  }


//   // local storage

//   let signin = document.getElementById('form');

//   signin.addEventListener('submit', (e) => {
//       e.preventDefault();
  
//       let email = document.getElementById('email-add').value;
//       let password = document.getElementById('password').value;
  
//       // Retrieve users list from localStorage
//       let users = JSON.parse(localStorage.getItem("users")) || [];
  
//       // Check if email and password match any user
//       let user = users.find(user => user.Email === email && user.Password === password);
  
//       if (user) {
//           alert(`Login Successful! Welcome ${user.Fname} ${user.Lname}.`);
//           window.location.href = "index.html";
//       } else {
//           alert("Invalid email or password.");
//       }
//   });
  


//     // signup

//     // Handle Signup
// const signupForm = document.getElementById('form-2');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Collect data from the sign-up form
//     let fName = document.getElementById('f-name').value;
//     let lName = document.getElementById('l-name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('pass').value;
//     let confirmPassword = document.getElementById('confirm-pass').value;

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         alert("Passwords do not match. Please try again.");
//         return;
//     }

//     // Retrieve existing users or initialize an empty array
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if the email already exists
//     if (users.some(user => user.Email === email)) {
//         alert("This email is already registered. Please use a different email.");
//         return;
//     }

//     // Add new user to the array
//     users.push({
//         FirstName: fName,
//         LastName: lName,
//         Email: email,
//         Password: password
//     });

//     // Save updated users array to localStorage
//     localStorage.setItem("users", JSON.stringify(users));

//     alert("Account created successfully! You can now log in.");
//     window.location.href = "index.html"; // Redirect to login page
// });

