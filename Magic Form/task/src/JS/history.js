let forms = JSON.parse(localStorage.getItem('forms'));

if (forms !== null) {
    forms = JSON.parse(JSON.stringify(forms));
    forms.forEach(form => addCard(form));
}

function addCard(form) {
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'submit-history-card');
    Object.keys(form).forEach(field => {
        const fieldContainer = document.createElement('div');
        const fieldTag = document.createElement('label');
        fieldTag.innerText = field.split("-").map(e => e[0].toUpperCase() + e.substring(1)).join(" ");
        fieldContainer.appendChild(fieldTag);
        const fieldValue = document.createElement('p');
        fieldValue.classList.add('card-' + field);
        fieldValue.innerText = form[field] ? form[field] : 'N/A';
        fieldContainer.appendChild(fieldValue);
        formContainer.appendChild(fieldContainer);
    });
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.innerText = 'Delete';
    formContainer.appendChild(deleteButton);

    document.body.appendChild(formContainer);

    deleteButton.addEventListener("click", function (){
         document.getElementsByTagName('div')
            deleteButton.parentElement.remove();


        });
}


