function Tabs() {
    this.mainButton = null;
    this.editButton = null;

    //initializsation block
    this.initTabs = function(elId){
        var that = this;
        var elSelector = '#'+elId;
        var el = document.querySelector(elSelector)
        var mainTab = document.getElementsByClassName('tabContent');
        for (let i = 1; i < mainTab.length; i++) {
            mainTab[i].style.display = "none";
        }

        this.mainButton = el.querySelector('#mainButton');
        this.editButton = el.querySelector('#editButton');

        this.mainButton.addEventListener('click', function (e) {
            that.onMainMenuClick(e)
        });
        this.editButton.addEventListener('click', function (e) {
            that.onEditMenuClick(e)
        });
    }

    //actions on tab click
    this.onMainMenuClick = function (e) {
        this.openTab(e, 'main-menu');
    };

    this.onEditMenuClick = function (e) {
        this.openTab(e, 'edit-menu');
    };

    this.openTab = function(e, tabName){
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName('tabContent');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName('tabLinks');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        document.getElementById(tabName).style.display = 'block';
        e.currentTarget.className += ' active';
    }

}

var tabsCreator = {
    createNewTabs: function() {
        var mewTabs = new Tabs();
        return mewTabs;
    }
}
