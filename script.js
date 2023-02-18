
//1. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. 
//При клике на параграф текст должен меняться на звездочки. 
//На данном этапе делать процесс обратимым при повторном клике необязательно.

const strings = ['Paragraph1', 'Paragraph2', 'Paragraph3','Paragraph4', 'Paragraph5', 'Paragraph6'];

const container = document.querySelector('#container');

strings.forEach(string => {
  const p = document.createElement('p',);
  p.textContent = string;
  p.addEventListener('click', () => {
  p.textContent = '*******';
  });
  container.appendChild(p);
});

//2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. 
//В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
//                                           И
//3. Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.

const box = document.querySelector('#box');

  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = i;
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
    container.appendChild(card);
}
  
//4. 
//В JS объявлен массив с ссылками на картинки. 
//На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. 
//При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. 
//Так, пользователь, нажимая на маленькие картинки видит их отображение 
//в большем размере.


const arrPictures = [
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  "https://tinypng.com/images/social/website.jpg",
  "https://www.w3schools.com/css/img_5terre_wide.jpg"
];

let divKopf = document.createElement('div');
divKopf.classList.add('divKopf')
divKopf.style.backgroundColor = 'cyan'
divKopf.style.height = '100px';

document.body.before(divKopf);

for (let i = 0; i < arrPictures.length; i++) {
  let img_head = document.createElement('img');
  img_head.setAttribute('src', arrPictures[i]);
  img_head.style.width = '90px';
  img_head.style.height = '90px';

  img_head.onclick = function() {
    let img_full = document.createElement('img');
    img_full.setAttribute('src', this.src);
    img_full.style.maxWidth = '100%';
    img_full.style.marginTop = '10px';
    divKopf.parentNode.appendChild(img_full);
  };

  divKopf.prepend(img_head);
}


// Дополнительные задачи, Level 2


