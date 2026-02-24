import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnCommande = this.element.querySelector('.js-btn-commande');
    btnCommande.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerHTML = '';
    let compteur = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const menucomplet = this.menu[i].selectedType;
      if (menucomplet !== '') {
        compteur++;
      }
    }

    const paragraphe = document.createElement('p');
    paragraphe.innerText = `Nombre total de poutine(s) : ${compteur}`;
    this.container.appendChild(paragraphe);
  }
}
