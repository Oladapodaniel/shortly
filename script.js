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
    
   
    //Api call url

    let url = 'https://rel.ink/api/links/';

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

            

            let output = document.querySelector('#output');

            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let link = document.createElement('a');
            ul.className = 'list-group';
            li.className = 'list-group-item';
            li.textContent = `https://${userInput.value}`;
            link.className = 'short-link';
            link.innerHTML = `https://rel.ink/${data.hashid}  <a href="#" id="copy" data-toggle="tooltip" data-html="true" title="Copy to Clipboard" data-placement="bottom" class="btn cyan text-white">Copy</a>`;
            li.appendChild(link)
            ul.appendChild(li);
            
            output.appendChild(ul);
            document.querySelector('#copy').addEventListener('click', (e) => {
                userInput.select();
                userInput.setSelectionRange(0, 99999); // For Mobile Devices
                document.execCommand('copy');
                alert('Copied to clipboard')
                
            })
           

        })
       
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

    $('a[data-toggle="tooltip"]').tooltip() 
}) 


