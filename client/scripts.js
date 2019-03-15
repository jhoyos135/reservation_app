document.addEventListener("DOMContentLoaded", () => {
    let submit = document.querySelector('#submit');
    let url = '/api/tables'
    let url_2 = '/api/waitlist'
    let fetchData = async () => {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
            customerName: document.querySelector("#reserve-name").value,
            phoneNumber: document.querySelector("#reserve-phone").value,
            customerEmail: document.querySelector("#reserve-email").value,
            customerID: document.querySelector("#reserve-unique-id").value
        })
        });
        let json = await res.json();
        return json
    };

//get tables
let runTableQuery = async () => {
        let res = await fetch(url);
        let json = await res.json()
        // console.log(json)
        for(let i in json) {
            let data = json[i];
            console.log(data.customer_name)
            let tableList = document.querySelector("#tableList");
            let html = `
            <li class='list-group-item mt-4'>
                <h2>Email: ${data.customer_email}</h2>
                <h2>Name: ${data.customer_name}</h2>
                <h2>Phone: ${data.phone_number}</h2>
                <h2>ID: ${data.customer_id}</h2>
            </li>
            `;

            tableList.innerHTML += html;

        };
    };
    runTableQuery();

// get waitlist 
let runWaitListQuery = async () => {
    let res = await fetch(url_2);
        let json = await res.json()
        // console.log(json)
        for(let i in json) {
            let data = json[i];
            let tableList = document.querySelector("#waitList");
            let html = `
            <li class='list-group-item mt-4'>
                <h2>Email: ${data.customer_email}</h2>
                <h2>Name: ${data.customer_name}</h2>
                <h2>Phone: ${data.phone_number}</h2>
                <h2>ID: ${data.customer_id}</h2>
            </li>
            `;

            tableList.innerHTML += html;

        };
};

runWaitListQuery();

// submit form 
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        fetchData()
        
    });

});
