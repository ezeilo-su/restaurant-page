const Menu = class {
  constructor(img, title, des) {
    this.img = img;
    this.title = title;
    this.des = des;

    const contentWrap = document.createElement('div');
    contentWrap.className = 'content-wrap';

    const imgWrap = document.createElement('div');
    imgWrap.className = this.img;
    contentWrap.appendChild(imgWrap);

    const titleWrap = document.createElement('h3');
    titleWrap.className = 'menu-title';
    titleWrap.innerText = this.title;
    contentWrap.appendChild(titleWrap);

    const desWrap = document.createElement('p');
    desWrap.className = 'menu-des';
    desWrap.innerText = this.des;
    contentWrap.appendChild(desWrap);

    const btn = document.createElement('button');
    btn.className = 'imenu-btn';
    btn.innerText = 'Order Now';
    this.btn = btn;
    contentWrap.appendChild(btn);

    this.content = contentWrap;
  }
};

export default Menu;