var newButtons = buttonsCreator.createNewButtons();
var newTabs = tabsCreator.createNewTabs();
var newSelector = selectorsCreator.createNewSelectors();

//initialisation(selector initialization after sample data)
newButtons.initButtons('input-menu1');
newButtons.initButtons('edit-menu');
newTabs.initTabs('tab-menu');

//block to sample data
let employee =  [];
employee[0] = employeeCreator.createNewEmployee(
    'Генадий',
    'Петров',
    'Александрович',
    'Инженер',
    '1993-03-03',
    '+7-913-999-99-99',
    'email1@mail.com');
employee[1] = employeeCreator.createNewEmployee(
    'Александр',
    'Петров',
    'Гаврилович',
    'Главный Инженер',
    '1972-07-21',
    '+7-913-999-99-98',
    'email2@mail.com');
employee[2] = employeeCreator.createNewEmployee(
    'Гаврила',
    'Петров',
    'Геннадьевич',
    'Директор',
    '1950-01-11',
    '+7-913-999-99-97',
    'email3@mail.com');

localStorage.clear();
localStorage.setItem('0', JSON.stringify(employee[0]));
localStorage.setItem('1', JSON.stringify(employee[1]));
localStorage.setItem('2', JSON.stringify(employee[2]));

//selector initialisation after sample
newSelector.initSelector('#edit-menu')








/*
var employers = []
const BASE_URL = '/api/employee'
class PostApi {
    static fetch() {
     return fetch(BASE_URL, {method: 'get'}).then(res => res.json())
    }
}
/!*

document.addEventListener('click', () => {
    PostApi.fetch().then(backendPosts => {

        employers = backendPosts.concat()
        renderEmployers(employers)
    })
})

function renderEmployers(_employers) {
    const $employers = document.querySelector('#firstName')

}
*!/
*/
