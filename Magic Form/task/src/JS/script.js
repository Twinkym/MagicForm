const inputFields = document.querySelectorAll('input');
const submit_button = document.getElementById('submit-button');
inputFields.forEach(inputField => {
    const value = localStorage.getItem(inputField.id);
    if (value !== null) {
        const element = document.getElementById(inputField.id);
        element.value = value;
    }
});
inputFields.forEach(inputField => {
    inputField.addEventListener('input', saveData)
});

function saveData(event) {
    const element = event.target;
    localStorage.setItem(element.id, element.value);
}
submit_button.addEventListener('click', () => {
    let forms = localStorage.getItem('forms');
    forms = forms ? JSON.parse(forms) : [];
    forms.push(getSubmittedForm());
    localStorage.setItem('forms', JSON.stringify(forms));
});

function getSubmittedForm() {
    const form = {
        'first-name': localStorage.getItem('first-name'),
        'last-name': localStorage.getItem('last-name'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        company: localStorage.getItem('company'),
        address: localStorage.getItem('address')
    }; {
        inputFields.forEach(inputField => {
            inputField.value = '';
            localStorage.removeItem(inputField.id);
        });
        return form;
    }
}
window.addEventListener('storage', () => {
    document.getElementById("first-name").value = localStorage.getItem('first-name');
    document.getElementById("last-name").value = localStorage.getItem('last-name');
    document.getElementById("email").value = localStorage.getItem('email');
    document.getElementById("phone").value = localStorage.getItem('phone');
    document.getElementById("company").value = localStorage.getItem('company');
    document.getElementById("address").value = localStorage.getItem('address');

    el.parentElement.remove()
});

/*/setInterval('DOMContentloaded', function (){
    let formulario = document.getElementById('form');
    submit_button.addEventListener('click', function ()
    {
        formulario.reset();
    });
},100);*/
