popup = document.querySelector('.popup_container') // весь bg вместе с попапом
popupBtnBegin = document.querySelector('.btn_begin') // кнопка запуска попапа
inputContent = document.querySelectorAll('.popup .popup_input') // содержимое инпутов
popupClose = document.querySelector('.popup_container .popup') // сам попап
popupBtnSend = document.querySelector('.popup .popup_btn-send') // кнопка отправки
popup.hidden = true


popupBtnBegin.addEventListener('click', function() {
    for (i = 0; i < 4; i++) {
        inputContent[i].value = ''
    }
    popup.hidden = false
})


popup.addEventListener('click', (e) => {
    const close = e.composedPath().includes(popupClose)
    if (!close) 
    popup.hidden = true
})




popupBtnSend.addEventListener('click', function(event) {
    event.preventDefault();
    textArr = ['Ваше имя', 'Ваша фамилия', 'Ваше отчество', 'Ваш номер телефона']
    text = document.querySelector('.text_container .text')
    text.innerHTML = ''
    for (i = 0; i < 4; i++) {
        text.innerHTML += `<p>${textArr[i]}: ${inputContent[i].value}</p>`
    }
    popup.hidden = true
})

