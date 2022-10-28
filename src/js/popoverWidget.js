export default class PopoverWidget {
  constructor() {
    this.button = null;
    this.popover = null;
    this.arrow = null;
  }
  init() {
    const btn = document.querySelector(".button");
    this.button = btn;

    this.button.addEventListener("click", (event) => {
      event.preventDefault();
      this.showPopover();
    });
  }

  showPopover() {
    this.popover = document.querySelector(".popover");
    this.button.offsetParent.appendChild(this.popover);
    this.arrow = document.querySelector(".triangle");

    this.popover.classList.toggle('display-enable');
    this.popover.classList.toggle('display-disable');

    this.popover.style.top = `${
      this.button.offsetTop +
      this.button.offsetHeight / 2 -
      this.popover.offsetHeight / 2
    }px`;

    this.popover.style.left = `${
      this.button.offsetLeft +
      this.button.offsetWidth +
      this.arrow.offsetWidth / 2
    }px`;

    this.arrow.style.top = `${
      this.button.offsetTop +
      this.button.offsetHeight / 2 +
      this.arrow.offsetWidth / 2
    }px`;
    this.arrow.style.left = `-${this.arrow.offsetWidth / 2}px`;
  }
}
