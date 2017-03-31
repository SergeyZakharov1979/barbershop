<!--Модальное окно: Форма входа-->
var buttonLogin = document.querySelector('.header-login');//выбираем кнопку вход
var popupLogin = document.querySelector('.popup-loginform');//выбираем всплывающее окно, скрытое по умолчанию
var closePopupLogin = popupLogin.querySelector('.close-popup');//выбираем кнопку "крестик" для закрытия всплывающего окна
var nameLogin = popupLogin.querySelector('[name=login-field]');//выбираем поле ввода login
var passwordLogin = popupLogin.querySelector('[type=password]');//выбираем поле password
var delPlaceholder = popupLogin.querySelector('[name=login-field]').placeholder;//выбираем надпись поля login
var formLogin = popupLogin.querySelector('.login-form');//выбираем форму во всплывающем окне
var storageNameLogin = localStorage.getItem('nameLogin');
var loginError = document.querySelector('.login-form-eror');

if (buttonLogin) {
	buttonLogin.addEventListener('click', function(event) {//вешаем на переменную buttonLogin обработчик событий, вызывающий всплывающее окно по клику на кнопку Вход
		event.preventDefault();//убираем стандартно определённую функцию с кнопки
		popupLogin.classList.add('popup-loginform-show');//присваиваем элементу другой класс с нужным функционалом
		popupLogin.querySelector('[name=password-field]').placeholder = '';//убираем значение placeholder из поля
		passwordLogin.focus();//Помещаем фокус в поле "Имя"
		if (storageNameLogin) {
			nameLogin.value = storageNameLogin;
		} else {
				nameLogin.focus();
				popupLogin.querySelector('[name=login-field]').placeholder = '';
		}
	});

	closePopupLogin.addEventListener('click', function(event) {//закрываем всплывающее окно нажетием на крестик
		event.preventDefault();
		popupLogin.classList.remove('popup-loginform-show');//убираем у элемента ранее присвоенный ему класс
		popupLogin.classList.remove('login-form-eror');	
	});

	formLogin.addEventListener('submit', function(event) {//вешаем на отправку формы проверку её заполнения
		if (!nameLogin.value || !passwordLogin.value) {
		event.preventDefault();
		popupLogin.classList.remove('login-form-eror');
		popupLogin.offsetWidth = popupLogin.offsetWidth;
		popupLogin.classList.add('login-form-eror');
		} else {
				localStorage.setItem('nameLogin', nameLogin.value);
			}
	});

	window.addEventListener('keydown', function(event) {// закрываем всплывающее окно с помощью клавиши "Esc" 
		if (event.keyCode === 27) {
			if (popupLogin.classList.contains('popup-loginform-show')) {
					popupLogin.classList.remove('popup-loginform-show');
					popupLogin.classList.remove('login-form-eror');
			}
		}
	});
}

<!--Модальное окно: Карта-->
var buttonMap = document.querySelector('.how-can-i-getto');

if (buttonMap) {
	var popupMap = document.querySelector('.popup-map');
	var closePopupMap = popupMap.querySelector('.close-popup');

	buttonMap.addEventListener('click', function(event) {
	event.preventDefault();
	popupMap.classList.add('popup-map-show');
	});

	closePopupMap.addEventListener('click', function(event) {
		event.preventDefault();
		popupMap.classList.remove('popup-map-show');
	});

	window.addEventListener('keydown', function (event) {
		if (event.keyCode === 27) {
			if (popupMap.classList.contains('popup-map-show')) {
				popupMap.classList.remove('popup-map-show');
			} 
		}
	});
}