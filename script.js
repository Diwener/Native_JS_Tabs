window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    //Мы создали переменные связанные с HTML объектами
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header');

    //Функция закрытия лишних табов
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    //Задаём начальный открытый таб
    hideTabContent(1);

    //Функция открытия нужного таба и закрытие лишних
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.remove('show');

        }
    };

    //Создаем алгоритм нахождения таб на который кликнули, 
    //проверяем и используем функции открытия и закрытия таббов

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }                                                         
        }
    });

});