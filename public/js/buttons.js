function Buttons() {
    this.saveButton = null;
    this.loadButton = null;
    this.deleteButton = null;
    this.sortNameButton = null;
    this.sortPosButton = null;

    //initializsation block
    this.initButtons = function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);


        this.saveButton = el.querySelector('#saveButton');
        this.loadButton = el.querySelector('#loadButton');
        this.deleteButton = el.querySelector('#deleteButton');
        this.sortNameButton = el.querySelector('#SortName');
        this.sortPosButton = el.querySelector('#SortPos');

        this.saveButton.addEventListener('click', function (e) {
            that.onSaveButtonClick(e)
        });
        this.loadButton.addEventListener('click', function (e) {
            that.onLoadButtonClick(e,el.querySelector('#employeeSelector'))
        });
        this.deleteButton.addEventListener('click', function (e) {
            that.onDeleteButtonClick(e)
        });
        this.sortNameButton.addEventListener('click', function (e) {
            that.onSortNameButtonClick(e)
        });
        this.sortPosButton.addEventListener('click', function (e) {
            that.onSortPosButtonClick(e)
        });
    };

    //block of button's actions
    this.onSaveButtonClick = function (e) {
        var createEmp = new Employee();
        let el = document.querySelector('#mainButton')
        if(el.classList.contains('active')){
            createEmp.saveEmployee(createEmp, '#input-');
        }else
        createEmp.saveEmployee(createEmp, '#edit-');
    };

    this.onLoadButtonClick = function (e, el) {
        var selectedIndex = el.options.selectedIndex;
        var createEmp = JSON.parse(localStorage.getItem(''+selectedIndex))
        var createSelect = new Selectors();
        createSelect.deleteEmployee('#employeeSelector');
        employeeLoader.loadNewEmployee(createEmp, '#edit-');
    };

    this.onDeleteButtonClick = function (e) {
        var createSelect = new Selectors();
        createSelect.deleteEmployee('#employeeSelector');
    };

    this.onSortNameButtonClick = function (e) {
        selectorSortElements.doSortElementsLastName()
    };

    this.onSortPosButtonClick = function (e) {
        selectorSortElements.doSortElementsPos()
    };

    this.actListener = function(e){
        var clickedElement = e.currentTarget;
        var act = clickedElement.innerHTML;
        window.alert(act);
    }
}

var buttonsCreator = {
    createNewButtons: function() {
        var newButtons = new Buttons();
        return newButtons;
    }
}