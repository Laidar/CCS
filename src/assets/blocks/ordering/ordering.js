document.addEventListener('DOMContentLoaded', function(){

    // const currentPercent = document.querySelector('#rangeSliderId');
    // let percentField = document.querySelector('#rangePercentId');

    // currentPercent.oninput = () => {
    //     percentField.innerHTML = String(currentPercent.value) + '%';
    // };

    let systemType = document.querySelector('.fields-system-type');
    let systemTypeButton = document.querySelector('.fields-system-type__button');

    systemType.onclick = () => {
        if (systemType.classList.contains('fields-system-type_open')) {
            systemType.classList.remove('fields-system-type_open')
        } else {
            systemType.classList.add('fields-system-type_open')
        }
    }

    let typeListItem = document.querySelectorAll('.type-list__item');
    typeListItem.forEach(function( currentValue, index ) {
        currentValue.onclick = (e) => {
            systemTypeButton.innerText = currentValue.textContent;
        }
    });

});