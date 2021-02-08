function Selectors() {
    this.employeeSelector = null;

    //initiate and working with selector
    this.initSelector = function(elId){
        var that = this;
        let el = document.querySelector(elId)
        let elSel = document.querySelector('#employeeSelector')
        for(let i = 0;i<localStorage.length;i++){
            selectorsCreatorElement.createNewSelectorElements('#employeeSelector', i)

        }

        this.employeeSelector = el.querySelector('#employeeSelector');

        this.employeeSelector.addEventListener('dblclick', function(e){
            that.onSelectorDblClick(e,elSel)
        });

    }

    Selectors.prototype.deleteEmployee = function(index) {
        var el = document.querySelector(index)
        var selectedIndex = el.options.selectedIndex;
        el.options[selectedIndex] = null;
        for(let i=selectedIndex;i<(localStorage.length-1);i++){
            let key1 = ''+i
            let key2 = ''+(i+1)
            localStorage.setItem(key1, localStorage.getItem(key2))
        }
        localStorage.removeItem(''+(localStorage.length-1))
    }
    this.onSelectorDblClick = function (e, el){
        var selectedIndex = el.options.selectedIndex;
        var createEmp = JSON.parse(localStorage.getItem(''+selectedIndex))
        var createSelect = new Selectors();
        createSelect.deleteEmployee('#employeeSelector');
        employeeLoader.loadNewEmployee(createEmp, '#edit-');
    }
}

var selectorsCreatorElement = {
    createNewSelectorElements: function (elId, index) {
        let el = document.querySelector(elId)
        let key = '' + index
        var str = ''
        let item = JSON.parse(localStorage.getItem(key))
        Object.getOwnPropertyNames(item).forEach(function (val, idx, array) {
            str += item[val] + '\t';
        });
        let addOption = new Option(str, '')
        el.options[el.options.length] = addOption;

    }

}

//sort
var selectorSortElements = {
    doSortElementsLastName: function(){
        let employee = []
        let elId = '#employeeSelector'
        let el = document.querySelector(elId)
        for(let i = 0; i<localStorage.length;i++){
            employee[i] = JSON.parse(localStorage.getItem(''+i))
            el.options[0] = null;
        }
        employee.sort(function(a, b){
            var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })

        localStorage.clear()
        for(let i = 0; i <employee.length;i++){
            localStorage.setItem(''+i, JSON.stringify(employee[i]))
            selectorsCreatorElement.createNewSelectorElements(elId,i)
        }
    },
    doSortElementsPos: function(){
        let employee = []
        let elId = '#employeeSelector'
        let el = document.querySelector(elId)
        for(let i = 0; i<localStorage.length;i++){
            employee[i] = JSON.parse(localStorage.getItem(''+i))
            el.options[0] = null;
        }
        employee.sort(function(a, b){
            var nameA=a.pos.toLowerCase(), nameB=b.pos.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
        localStorage.clear()
        for(let i = 0; i <employee.length;i++){
            localStorage.setItem(''+i, JSON.stringify(employee[i]))
            selectorsCreatorElement.createNewSelectorElements(elId,i)
        }
    }
}

var selectorsCreator = {
    createNewSelectors: function() {
        var newSelectors = new Selectors();
        return newSelectors;
    }
}