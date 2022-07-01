const activator = document.querySelector('.displacement__bar-content');

activator.addEventListener('click', () => {
	const displacement = document.querySelector('.displacement');

	displacement.classList.toggle('displacement--show');
});

const option = document.querySelectorAll('.option__header');
//Filtrado de componentes "option" que no tienen un contenido
const newOptions = Array.from(option).filter(
	(elem) => !elem.classList.contains('option__header--eraser'),
);

newOptions.forEach((opt, index) => {
	opt.addEventListener('click', (e) => {
		const optionCont = document.querySelectorAll('.option__content')[index];

		if (opt.classList.contains('option__header--sub'))
			optionCont.classList.toggle('option__content--show-sub');
		else optionCont.classList.toggle('option__content--show');

		console.log(optionCont);
	});
});

/* const optionSub = document.querySelector('.option__header--sub');

optionSub.addEventListener('click', () => {
  optionSub.classList.toggle('option__header--sub-select');
  const subContent = document.querySelector('.option__subcontent-content');

  subContent.classList.toggle('option__subcontent-content--show');
});

const sectionOpt = document.querySelectorAll('.section-option__title');

sectionOpt.forEach((sect, index) => {
  sect.addEventListener('click', () => {
    sect.classList.toggle('section-option__title--select');

    const backgroundFact = document.querySelectorAll('.option__feactures')[index];

    if (backgroundFact.classList.contains('option_fa'))
      backgroundFact.classList.toggle('option__feactures--show-after');
    else backgroundFact.classList.toggle('option__feactures--show');
  });
});
 */
