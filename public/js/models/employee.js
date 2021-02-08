function Employee(firstName,lastName,fatherName,pos,bDate,tel,mail){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = fatherName;
    this.pos = pos;
    this.bDate = bDate;
    this.tel = tel;
    this.mail = mail;
}

Employee.prototype.saveEmployee = function(employeeElement, index){
    var el;
    let error = 0;
    for(var propName in employeeElement){
        let i =index + propName;
        if(employeeElement.hasOwnProperty(propName)){
            el = document.querySelector(i);
            if(propName === 'firstName') {
                if (/\d/.test(el.value)) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введено Имя')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }

            }
            if(propName === 'lastName')
                if (/\d/.test(el.value)) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введена Фамилия')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }
            if(propName === 'fatherName'){
                if (/\d/.test(el.value)) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введено Отчество')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }
            }
            if(propName === 'pos'){
                el.classList.remove('error-input')
                employeeElement[propName] = el.value;
            }
            if(propName === 'bDate'){
                let year = new Date();
                if (year.getFullYear() - el.valueAsDate.getFullYear()<17 || year.getFullYear() - el.valueAsDate.getFullYear() > 80) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введена дата')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }
            }
            if(propName === 'tel'){
                if (!/\+[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(el.value)) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введён номер телефона')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }

            }
            if(propName === 'mail'){
                if (!/^\w+([\.\w]+)*\w@\w((\.\w)*\w+)*\.\w{2,3}$/.test(el.value)) {
                    el.classList.add('error-input')
                    error++
                    window.alert('Неправильно введён e-mail')
                }else
                {
                    el.classList.remove('error-input')
                    employeeElement[propName] = el.value;
                }

            }
            error = error + checker(el);
        }


    }
    if(error>0)
        return
    for(let i = 0;i<localStorage.length;i++){
        let str = JSON.parse(localStorage.getItem(''+i))
        if(str.firstName === employeeElement.firstName && str.lastName === employeeElement.lastName && str.fatherName === employeeElement.fatherName && str.bDate === employeeElement.bDate)
            return
    }
    localStorage.setItem(''+(localStorage.length), JSON.stringify(employeeElement))
    selectorsCreatorElement.createNewSelectorElements('#employeeSelector',(localStorage.length-1))

    //checker for empty input
    function checker(el) {
        if (el.classList.contains('checkable')) {
            if (el.value === '') {
                el.classList.add('error-input');
                el.placeholder = 'necessary value';
                return 1
            }
        }
        return 0
    }
}

var employeeLoader = {
    loadNewEmployee : function(employeeElement, index){
        var el;
        Object.getOwnPropertyNames(employeeElement).forEach(function(val, idx, array) {
            let i =index + val;
            el = document.querySelector(i);
            el.value = employeeElement[val];
        });
    }
}

var employeeCreator = {
    createNewEmployee: function(firstName,lastName,fatherName,pos,bDate,tel,mail) {
        var mewEmployee = new Employee(firstName,lastName,fatherName,pos,bDate,tel,mail);
        return mewEmployee;
    }
}

//old prototypes to load data
/*Employee.prototype.loadEmployee = function(employeeElement, index){
    var el;
    Object.getOwnPropertyNames(employeeElement).forEach(function(val, idx, array) {
        let i =index + val;
        el = document.querySelector(i);
        el.value = employeeElement[val];
    });
}*/

/*Employee.prototype.toStringValue = function(employeeElement){
    var el = '';
    Object.getOwnPropertyNames(employeeElement).forEach(function(val, idx, array) {
        el += employeeElement[val]+'\t';
    });
    return el
}*/

/*Employee.prototype.toStringName = function(employeeElement){
    var el = '';
    Object.getOwnPropertyNames(employeeElement).forEach(function(val, idx, array) {
        el += val+'\t';
    });
    return el
}*/