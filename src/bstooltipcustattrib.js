import {customAttribute, inject} from 'aurelia-framework';

@customAttribute('bootstrap-tooltip')
@inject(Element)
export class bstooltipcustattrib {
  constructor(element) {
    this.element = element;
  }

  bind() {
    $(this.element).tooltip();
  }

  unbind() {
    $(this.element).tooltip("destroy");
  }
}
