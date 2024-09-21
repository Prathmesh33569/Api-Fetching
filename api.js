let a = fetch('https://reqres.in/api/users?page=1');

a.then((data) => {
    return data.json();
}).then((objectData) => {
    for (let a = 0; a < objectData.data.length; a++) {
        let trBox = document.createElement('tr');

        for (let b = 0; b < 5; b++) {
            let tdBox = document.createElement('td');
            if (b === 4) {
                let image = document.createElement('img');
                image.setAttribute('src', Object.values(objectData.data[a])[b]);
                image.setAttribute('class', 'border');
                trBox.appendChild(image);
            }
            else {
                tdBox.innerHTML = Object.values(objectData.data[a])[b];
                tdBox.setAttribute('class' , 'border');
                trBox.appendChild(tdBox);
            }
        }
        document.getElementById("tbl").firstElementChild.firstElementChild.append(trBox);
    }
})