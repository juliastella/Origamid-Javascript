function initTabNavigation() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){ 
        tabContent[0].classList.add('ativo');
        function activeTab(index){
            tabContent.forEach((Selection) => {
                Selection.classList.remove('ativo')
            });
            tabContent[index].classList.add('ativo');
        }
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}

initTabNavigation();

function initAcordion() { 
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const actveClass = 'ativo';

    if(accordionList.length){ 
        accordionList[0].classList.add(actveClass);
        accordionList[0].nextElementSibling.classList.add(actveClass);

        function activeAccordion(){    
            this.classList.toggle(actveClass);
            this.nextElementSibling.classList.toggle(actveClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAcordion();