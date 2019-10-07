const CONFIG = {
  TRIGGER: 'tab-button',
  ELEM: 'tab',
  CLASS: {
    ADD: '-is-active',
    HOLD: '-on-hold',
  },
};

const taboffert = {
  init() {
    const { TRIGGER, ELEM, CLASS } = CONFIG;
    this.trigger = document.querySelectorAll(`[${TRIGGER}]`);
    this.elem = document.querySelectorAll(`[${ELEM}]`);
    this.activ = 0;
    this.addClass = CLASS.ADD;
    this.holdClass = CLASS.HOLD;
    this.max = this.elem.length - 1;
    this.addEvents();
  },

  addEvents() {
    Array.from(this.trigger).forEach(element => {

      element.disabled = false;

      element.addEventListener('click', event => {
        const $this = event.currentTarget;
        const direction = $this.getAttribute('data-direction');
        this.holdController(this.activ);
        if (direction) this.tab(direction);
        this.setCurrent(this.activ);
        this.setButton(this.activ);
        $this.disabled = true;

        setTimeout(() => {
          $this.disabled = false;
        }, 400);
      });
    });
  },

  tab(dir) {
    this.activ = dir;


    if (this.activ > this.max) {
      this.activ = 0;
    }
  },



  setCurrent($i) {
    Array.from(this.elem).forEach((element, index) => {
      setTimeout(() => {
        if (index == $i) element.classList.add(this.addClass);
        else element.classList.remove(this.addClass);
      }, 600);

      setTimeout(() => {
        element.classList.remove(this.holdClass);
      }, 700);
    });


  },

  setButton($i){
    Array.from(this.trigger).forEach((element, index) => {
      setTimeout(() => {
        if (index == $i) element.classList.add(this.addClass);
        else element.classList.remove(this.addClass);
      }, 800);

      setTimeout(() => {
        element.classList.remove(this.holdClass);
      }, 700);
    });
  },

  holdController($i) {
    this.elem[$i].classList.add(this.holdClass);
    this.trigger[$i].classList.add(this.holdClass);
  },
};

export default taboffert;
