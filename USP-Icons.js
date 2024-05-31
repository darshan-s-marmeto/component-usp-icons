class UspIconSlider extends HTMLElement {
  constructor() {
    super();
    this.splideInstance = null;
  }

  connectedCallback() {
    this.initializeSplide();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  initializeSplide() {
    if (window.innerWidth <= 767) {
      if (!this.splideInstance) {
        this.classList.add('splide');
        const track = this.querySelector('.splide__track');
        const list = this.querySelector('.splide__list');

        if (track && list) {
          const autoplay = this.getAttribute('data-autoplay') === 'true';
          const interval = parseInt(this.getAttribute('data-interval'), 10) * 1000;
          const pagination = this.getAttribute('data-pagination') === 'true';
          const arrows = this.getAttribute('data-arrows') === 'true';
          const _this = this;
          const type = autoplay? 'loop': 'slide';

          this.splideInstance = new Splide(_this, {
            type: type,
            perPage: 1,
            autoplay: autoplay,
            interval: interval,
            pagination: pagination,
            arrows: arrows,
          }).mount();
        } else {
          debugger;
          console.error('[splide] A track/list element is missing.');
        }
      }
    }
  }

  handleResize() {
    this.initializeSplide();
  }
}

customElements.define('usp-icon-slider', UspIconSlider);
