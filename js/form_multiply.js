// Exercici 8

// Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions),
// i que la taula de multiplicar la mostri en una taula HTML

const form_multi = document.getElementById('form-multiply');
const element_tbody = document.querySelector('#tbody');
console.log('element_tbody => ' + element_tbody);
form_multi.addEventListener('submit', function (e) {
    e.preventDefault();
    const num_1 = document.getElementById('in-num1');
    const num_2 = document.getElementById('in-num2');
    const help_n1 = document.getElementById('n1-help');
    const help_n2 = document.getElementById('n2-help');

    if (num_1.value == '') {
        num_1.classList.add('is-invalid');
        help_n1.textContent = '*campo requerido';
        help_n1.style.display = 'inline';
    } else if (num_1.value < 1 || num_1.value > 10) {
        num_1.classList.add('is-invalid');
        help_n1.textContent = '*el número introducido tiene que ser de 1-10';
        help_n1.style.display = 'inline';
    } else {
        num_1.classList.remove('is-invalid');
        num_1.classList.add('is-valid');
        help_n1.style.display = 'none';
    }

    if (num_2.value == '') {
        num_2.classList.add('is-invalid');
        help_n2.textContent = '*campo requerido';
        help_n2.style.display = 'inline';
    } else if (num_2.value < 1 || num_2.value > 10) {
        num_2.classList.add('is-invalid');
        help_n2.textContent = '*el número introducido tiene que ser de 1-10';
        help_n2.style.display = 'inline';
    } else {
        num_2.classList.remove('is-invalid');
        num_2.classList.add('is-valid');
        help_n2.style.display = 'none';
    }

    if (num_1.classList.contains('is-valid') && num_2.classList.contains('is-valid')) {
        ui_tbl_multiply(num_1.value, num_2.value);
    }

})

const ui_tbl_multiply = (n1, n2) => {
    for (var i = 1; i <= n2; i++) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', 'row-multi');
        tr.setAttribute('class', 'text-center');
        element_tbody.appendChild(tr);
        let td_n1 = document.createElement('td');
        let td_op = document.createElement('td');
        let td_i = document.createElement('td');
        let td_equals = document.createElement('td');
        let td_res = document.createElement('td');
        td_n1.textContent = n1;
        tr.append(td_n1);
        td_op.textContent = 'x';
        tr.append(td_op);
        td_i.textContent = i;
        tr.append(td_i);
        td_equals.textContent = '=';
        tr.append(td_equals);
        td_res.textContent = n1 * i;
        tr.append(td_res);
    }
}