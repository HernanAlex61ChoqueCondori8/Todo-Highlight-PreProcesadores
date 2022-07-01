/* const choice = document.querySelectorAll('.choice');

choice.forEach((choiceElem, index) => {
  choiceElem.addEventListener('click', () => {
    const arrow = document.querySelectorAll('.choice__arrow')[index];
    const select = document.querySelectorAll('.choice__select')[index];
    let changeChoice = true;

    if (select.classList.contains('choice__select--show')) changeChoice = false;
    else changeChoice = true;

    select.classList.toggle('choice__select--show');

    arrow.src = `./resources/images/${changeChoice ? 'up' : 'down'}-arrow.png`;
  });
});

const optSelcBorder = document.querySelectorAll('.choice__option--border');

optSelcBorder.forEach((optSel) => {
  optSel.addEventListener('click', (e) => {
    const textOption = document.querySelector('.choice__text--border');
    textOption.textContent = e.target.value;
  });
});

const optSelcOutline = document.querySelectorAll('.choice__option--outline');

optSelcOutline.forEach((optSel) => {
  optSel.addEventListener('click', (e) => {
    const textOption = document.querySelector('.choice__text--outline');
    textOption.textContent = e.target.value;
  });
});
const color = document.querySelectorAll('.color__input');

color.forEach((colorElem, index) => {
  colorElem.addEventListener('input', (e) => {
    const colorWrapper = document.querySelectorAll('.color__wrapper')[index];
    const colorCode = document.querySelectorAll('.color__code')[index];

    colorWrapper.style.backgroundColor = e.target.value;
    colorCode.textContent = e.target.value;
  });
});

const opacity = document.querySelector('.opacity__change');
let changeOpacity = false;

opacity.addEventListener('click', () => {
  const opacityImage = document.querySelector('.opacity__image');
  const opacityNum = document.querySelector('.opacity__input');

  opacityImage.src = `./resources/images/${changeOpacity ? 'view' : 'hidden'}.png`;

  if (changeOpacity) {
    opacityNum.placeholder = '100%';
    changeOpacity = false;
  } else {
    opacityNum.placeholder = '0%';
    changeOpacity = true;
  }
});

const extend = document.querySelector('.extend');

extend.addEventListener('click', (e) => {
  extend.classList.toggle('extend--select');
});

const colorCopy = document.querySelectorAll('.color__code');

colorCopy.forEach((copy) => {
  copy.addEventListener('click', (e) => {
    const seleccion = document.createRange();
    seleccion.selectNodeContents(e.target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
  });
});

const moreCorner = document.querySelector('.corner__more');

moreCorner.addEventListener('click', (e) => {
  const radiusValue = document.querySelector('.radius__input');
  const contentCorner = document.querySelector('.corner__content');

  contentCorner.classList.toggle('corner__content--show');
  radiusValue.classList.toggle('radius__input--hidden');

  if (e.target.textContent === '+') e.target.textContent = '-';
  else e.target.textContent = '+';
});

const italic = document.querySelector('.text__italic');

italic.addEventListener('click', (e) => {
  italic.classList.toggle('text__italic--select');
});

const textSetting = document.querySelector('.text__setting');

textSetting.addEventListener('click', (e) => {
  e.target.classList.toggle('text__italic--select');
});

const textArrowUp = document.querySelector('.text__arrow--up');

textArrowUp.addEventListener('click', (e) => {
  const textStyle = document.querySelector('.text__style');

  if (textStyle.value < 900) textStyle.value = textStyle.value * 1 + 100;
});

const textArrowDown = document.querySelector('.text__arrow--down');

textArrowDown.addEventListener('click', (e) => {
  const textStyle = document.querySelector('.text__style');

  if (textStyle.value > 0) textStyle.value = textStyle.value * 1 - 100;
});
 */
const optAddAfBe = document.querySelectorAll('.option__content-sum');

optAddAfBe.forEach((opt) => {
	opt.addEventListener('click', () => {
		opt.classList.toggle('option__content-sum--select');

		const contentAftBef = document.querySelector('.after-before');
		const childAdd = opt.children[0];

		if (opt.children[0].textContent === '+') childAdd.textContent = '-';
		else childAdd.textContent = '+';

		contentAftBef.classList.toggle('after-before--show');
	});
});
