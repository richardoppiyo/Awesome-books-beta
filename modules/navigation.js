export default class Navigator {
  constructor() {
    this.links = [];
    this.activeSection = '#list';
  }

  navigate(x) {
    const lastActiveSection = document.querySelector(this.activeSection);
    lastActiveSection.classList.remove('active');
    this.activeSection = x;
    const section = document.querySelector(x);
    section.classList.add('active');
  }

  initiate() {
    if (typeof (window) !== 'undefined') {
      window.addEventListener('popstate', () => {
        this.links = Array.from(document.querySelectorAll('nav a '));
        this.links.filter((el) => el.href !== window.location.href).forEach((el) => {
          el.classList.remove('active');
        });
        this.links.filter((el) => el.href === window.location.href)[0].classList.add('active');
        this.navigate(window.location.hash);
      });
    }
  }
}