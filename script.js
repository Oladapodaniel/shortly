//Posting request in Javascript


//  let url = 'https://rel.ink/api/links/';
// fetch(url)
//     .then(data => {return data.json()})
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// class EasyHTTP {
//     post(url, data) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(data => resolve(data))
//                 .catch(err => reject(err));
//         })
//     }

// }

// let http = new EasyHTTP();

// const data = {
//     name: 'Oladapo DAniel',
//     username: 'oladapodaniel',
//     email: 'oladapodaniel10gmail.com',
//     url: 'https://google.com/images'
// }

// http.post(url, data)
// .then(data => console.log(data.hashid))
// .catch(err => console.log(err))

// Posting request in Jquery

$(document).ready(function() {

    var inputco = document.getElementById("input22");
       
    
  
   
    //Api call url

    let url = 'https://rel.ink/api/links/';

            let table = document.createElement('table');
            let thead = document.createElement('thead');
            let thr = document.createElement('tr');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');

          // Append them into each other
            thr.appendChild(th3);
            thr.appendChild(th2);
            thr.appendChild(th1);
            thead.appendChild(thr);
            table.appendChild(thead);

            // The table content
            th1.textContent = 'Copy';
            th2.textContent = 'Shortened URL';
            th3.innerHTML = 'Your Link';

            table.className = 'table table-striped';
 // Getting user input and 
 // Displaying The UI

    let button = document.querySelector('#button');
    let userInput = document.querySelector('#user-input');
    button.addEventListener('click', (e) => {
        

        const data = {
            name: 'Oladapo Daniel',
            username: 'oladapodaniel',
            email: 'oladapodaniel10gmail.com',
            url: `https://${userInput.value}`
        }

       
        $.post(url, data, function (data, status) {
           
            console.log(`${data} and status is ${status}`)
            console.log(data)

            

            let inputco = document.createElement('input');


            

            let tbody = document.createElement('tbody');
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            
          
        
           

            tr.appendChild(td3);
            tr.appendChild(td2);
            tr.appendChild(td1);
            tbody.appendChild(tr);
            table.appendChild(tbody);
            output.appendChild(table);

           
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');

            ul.className = 'uk-list uk-list-striped';

            ul.appendChild(li1);
            ul.appendChild(li2);
            output1.appendChild(ul)  
            
            li1.textContent = `https://${userInput.value}`;
            li2.innerHTML = `https://rel.ink/${data.hashid}    <a href = "#" id = "copy" data-toggle="tooltip" data-html="true" data-clipboard-text="https://rel.ink/${data.hashid}" title = "Copy to Clipboard" data-placement="bottom" class="btn cyan text-white"> Copy</a>`;
            
           
            td3.textContent = `https://${userInput.value}`;
            td2.textContent = `https://rel.ink/${data.hashid}`;
            td2.value = `https://rel.ink/${data.hashid}`;
            td1.innerHTML = `<a href="#" id="copy" data-toggle="tooltip" data-html="true" data-clipboard-text="https://rel.ink/${data.hashid}" title="Copy to Clipboard" data-placement="bottom" class="btn cyan text-white">Copy</a>`;
            


            e.preventDefault()
            new ClipboardJS('#copy');

           


       
       
    });

  
   // let userInput = document.querySelector('#user-input');
    userInput.addEventListener('blur', function () {
        let regex = /^([a-zA-Z0-9]+)\.([a-zA-Z]){2,}\/?(\/[a-zA-Z0-9\-\_\&\=\(\)\{\}\\\/]+)?$/;
        if (!regex.test(userInput.value)) {  
       userInput.classList.add('is-invalid');
        } else {
            userInput.classList.remove('is-invalid');
        }

    })


  
    });


    $('a[data-toggle="tooltip"]').tooltip() 
}) 

