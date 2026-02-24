import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = '';
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnCommandes = this.element.querySelectorAll('.js-btn-commande');
    for (let i = 0; i < btnCommandes.length; i++) {
      const btnCommande = btnCommandes[i];
      btnCommande.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {}
}
