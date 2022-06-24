////////// DOM Document Object Model
// document = объект HTML разметки

// let image = document.createElement('img')
// image.src = 'https://mosfurnitura.ru/upload/iblock/29f/29f492317f936cbf00c2f2113d1fd675.jpg'
// console.log(image);
// document.body.append(image)


// //cоздание элементов (теги)
// const div = document.createElement('div') //cоздание элемента
// const h1 = document.createElement('h1') //cоздание элемента
// h1.innerHTML = 'Hello world!' // создаем содержание
// const paragraph = document.createElement('p') //cоздание элемента
// paragraph.textContent = 'this is a paragraph' //cоздаем контент - заполняем текстом

// document.body.append(div) //в body (HTML) отправляем div
// // div.append(h1,paragraph) // в div отправляем h1 и paragraph

// div.innerHTML=`
// <ul>
// <li>first</li>
// <li>second</li>
// <li>third</li>
// </ul>
// `
// div.append(h1,paragraph) // в div отправляем h1 и paragraph

// // Добавление элементов в HTML
// // append === appendChild  - отправляет элементы в родительский тег
// // append - может отправить несколько тегов ,appendChild - может отправить только один тег
// // prepend - отправляет в самое начало родителя
// div.prepend(paragraph)

// стилизация внутри JS
// const section = document.createElement('section')
// const div = document.createElement('div')
// const title = document.createElement('h3')
// const p = document.createElement('p')

// title.innerHTML = 'Hello world!'
// p.innerHTML = 'Poka world!'
// document.body.append(section)
// section.append(div)
// div.append(title,p)

// // написание стилей по отдельности

// section.style.width = '400px'
// section.style.height = '400px'
// section.style.backgroundColor = 'crimson'
// section.style.borderRadius = '50px'
// section.style.textAlign = 'center'

// // написание стилей сразу вместе
// div.style.cssText = `
// width: 200px;
// height: 200px;
// border: 5px dashed crimson;
// background-color: black;
// color:white;
// margin: 0 auto;
// padding-top: 100px; 
// `

// придали чуть интерактивности но это отдельная тема
// div.addEventListener('click', () => {
//     title.style.cssText = 
//     `
//     padding-top:100px;
//     color: yellow green;
//     transform : rotate(60deg);
//     transition: 1s;
//     `
// })
// div.addEventListener('mouseover', () => {
//     p.classList.add('paragraph')
//     })
//     div.addEventListener('mouseout', () => {
//         p.classList.remove('paragraph')
//         })




// добавление классов тегов
// title.className = 'title' // первый метод

// p.classList.add('paragraph') // второй метод

// p.classList.remove('paragraph') // удаляет второй метод


// получение элементов из HTML
// 1) получение по id
// const box = document.getElementById('divFromHTML')
// box.style.backgroundColor = 'green'

// 2) получение по классу 
// const h1 = document.getElementsByClassName('h1FromHTML')
// console.log(h1);
// такой метод мы не используем!!!

// 3)получение по тегу
// const element = document.getElementsByTagName('h1')
// console.log(element);
// такой метод мы не используем!!!

// 4) получение по селектору
// const box = document.querySelector('#divFromHTML')
// box.style.backgroundColor = 'green'
// const h1 = document.querySelector('.h1FromHTML')
// h1.style.color = 'white'
// const par = document.querySelector('p')
// par.style.color = 'yellow'

import info from "./discription.js";

const div_gl = document.createElement('header')
div_gl.style.cssText = `
display: flex;
justify-content: center;
// background-color: red;

`
const header = document.createElement('div')
header.style.cssText = `
display: flex;
width: 95%;
align-items:center;
// background-color: aqua;
justify-content: space-between;
`

const div_panel = document.createElement('div')
const h1 = document.createElement('h1')

const p_panel = document.createElement('p')
h1.innerHTML = 'Cozy House'
h1.style.cssText = `
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 110%;
color: #545454;
`
p_panel.innerHTML = 'Shelter for pets in Boston'
document.body.append(div_gl)
div_gl.append(header)
header.append(div_panel)
div_panel.append(h1,p_panel)
const ul_panel = document.createElement('ul')
const ul_li_panel1 = document.createElement('li')
const ul_li_panel2 = document.createElement('li')
const ul_li_panel3 = document.createElement('li')
const ul_li_panel4 = document.createElement('li')
ul_li_panel1.innerHTML = 'About the shelter'
ul_li_panel2.innerHTML = 'Our pets'
ul_li_panel3.innerHTML = 'Help the shelter'
ul_li_panel4.innerHTML = 'Contacts'
ul_panel.append(ul_li_panel1,ul_li_panel2,ul_li_panel3,ul_li_panel4)
header.append(ul_panel)
ul_panel.style.cssText = `
display: flex;
list-style: none;
font-size:15px;
font-family: 'Arial';
font-style: normal;
justify-content: space-between;
width: 40%;
`
const section_1 = document.createElement('section')
const section_1_h2 = document.createElement('h2')
const section_1_block_1 = document.createElement('div')
const section_1_block_2 = document.createElement('div')
const section_1_buttons = document.createElement('div')

section_1.style.cssText = 
`
display: flex;
flex-direction: column;
height: 1300px;
justify-content: space-around;
// background-color: aqua;
`

document.body.append(section_1,section_1_block_1,section_1_block_2,section_1_buttons)
section_1.append(section_1_h2,section_1_block_1,section_1_block_2,section_1_buttons)
section_1_h2.innerHTML = 'Our friends who <br> are looking for a house'
section_1_h2.style.cssText = `
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 130%;
color: #545454;
text-align: center;
`
const block_1_1 = document.createElement('div')
const block_1_2 = document.createElement('div')
const block_1_3 = document.createElement('div')
const block_1_4 = document.createElement('div')

const block_2_1 = document.createElement('div')
const block_2_2 = document.createElement('div')
const block_2_3 = document.createElement('div')
const block_2_4 = document.createElement('div')

block_1_1.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_1_2.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_1_3.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_1_4.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_2_1.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_2_2.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_2_3.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`
block_2_4.style.cssText = 
`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 450px;
align-items: center;
`



section_1_block_1.append(block_1_1,block_1_2,block_1_3,block_1_4)
section_1_block_2.append(block_2_1,block_2_2,block_2_3,block_2_4)

section_1_block_1.style.cssText = `
display: flex;
justify-content: space-around;
text-align: center;
`
section_1_block_2.style.cssText = `
display: flex;
justify-content: space-around;
text-align: center;
`

let image1 = document.createElement('img')
image1.src = './pic/pets-katrine.png'
let image2 = document.createElement('img')
image2.src = './pic/pets-jennifer.png'
let image3 = document.createElement('img')
image3.src = './pic/pets-woody.png'
let image4 = document.createElement('img')
image4.src = './pic/pets-sophia.png'

let image5 = document.createElement('img')
image5.src = './pic/pets-timmy.png'
let image6 = document.createElement('img')
image6.src = './pic/pets-charly.png'
let image7 = document.createElement('img')
image7.src = './pic/pets-scarlet.png'
let image8 = document.createElement('img')
image8.src = './pic/pets-freddie.png'

let p_1 = document.createElement('p') 
p_1.innerHTML = 'Katrine'
let p_2 = document.createElement('p') 
p_2.innerHTML = 'Jennifer'
let p_3 = document.createElement('p') 
p_3.innerHTML = 'Woody'
let p_4 = document.createElement('p') 
p_4.innerHTML = 'Sophia'

let p_5 = document.createElement('p') 
p_5.innerHTML = 'Timmy'
let p_6 = document.createElement('p') 
p_6.innerHTML = 'Charly'
let p_7 = document.createElement('p') 
p_7.innerHTML = 'Scarlett'
let p_8 = document.createElement('p') 
p_8.innerHTML = 'Freddie'

p_1.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_2.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_3.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_4.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_5.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_6.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_7.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`
p_8.style.cssText = 
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #545454;
`

const learn1 = document.createElement('button')
learn1.innerHTML = 'Learn more'
const learn2 = document.createElement('button')
learn2.innerHTML = 'Learn more'
const learn3 = document.createElement('button')
learn3.innerHTML = 'Learn more'
const learn4 = document.createElement('button')
learn4.innerHTML = 'Learn more'
const learn5 = document.createElement('button')
learn5.innerHTML = 'Learn more'
const learn6 = document.createElement('button')
learn6.innerHTML = 'Learn more'
const learn7 = document.createElement('button')
learn7.innerHTML = 'Learn more'
const learn8 = document.createElement('button')
learn8.innerHTML = 'Learn more'

learn1.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn2.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn3.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn4.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn5.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn6.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn7.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`
learn8.style.cssText = 
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 45px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
`

block_1_1.append(image1,p_1,learn1)
block_1_2.append(image2,p_2,learn2)
block_1_3.append(image3,p_3,learn3)
block_1_4.append(image4,p_4,learn4)

block_2_1.append(image5,p_5,learn5)
block_2_2.append(image6,p_6,learn6)
block_2_3.append(image7,p_7,learn7)
block_2_4.append(image8,p_8,learn8)

const button_1 = document.createElement('button')
button_1.innerHTML = '<<'
const button_2 = document.createElement('button')
button_2.innerHTML = '<'
const button_3 = document.createElement('button')
button_3.innerHTML = '1'
const button_4 = document.createElement('button')
button_4.innerHTML = '>'
const button_5 = document.createElement('button')
button_5.innerHTML = '>>'

button_1.style.cssText=
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 15px;
gap: 10px;
border-color:#CDCDCD;
background: white;
border-radius: 100px;
margin: 10px;
`
button_2.style.cssText=
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 19px;
gap: 10px;
border-color:#CDCDCD;;
background: white;
border-radius: 100px;
margin: 10px;
`
button_3.style.cssText=
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 20px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
background-color: #F1CDB3;
margin: 10px;
`
button_4.style.cssText=
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 19px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
margin: 10px;
`
button_5.style.cssText=
`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px 15px;
gap: 10px;
border-color:#F1CDB3;
background: white;
border-radius: 100px;
margin: 10px;
`

section_1_buttons.style.cssText =
`
display: flex;
justify-content: center;
`

section_1_buttons.append(button_1,button_2,button_3,button_4,button_5)
const footer_d =document.createElement('div')

const footer = document.createElement('footer')
footer.style.cssText = 
`
padding: 0px;
margin:0px;
background-image: url(./pic/footer.png);
width: 100%;
height: 65vh;
display:flex;
justify-content: center;
background-repeat: no-repeat;
background-size: cover;
`
footer_d.style.cssText =
`
width: 93%;
// background-color: yellow;
height: 65vh;
`
document.body.append(footer)

const footer_div =document.createElement('div')
const footer_div1 =document.createElement('div')
const footer_div2 =document.createElement('div')
footer.append(footer_d)
footer_d.append(footer_div)
footer_div.append(footer_div1,footer_div2)
footer_div.style.cssText=
`
display:flex;
justify-content: space-between;
align-items:flex-start;
height: 100%;
// background-color: red;
width:70%;
`
footer_div1.style.cssText=
`
padding: 0px;
margin: 0px;
display:flex;
flex-direction: column;
// background-color: green;
justify-content: space-between;
height: 80%;
`
footer_div2.style.cssText=
`
padding: 0px;
margin: 0px;
display:flex;
flex-direction: column;
// background-color: aqua;
justify-content: space-between;
height: 80%;
`
//////////////////////////////////////////////////////////////////////////
const footer_h3_1 = document.createElement('h3')
footer_h3_1.style.cssText=
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 130%;
color: #FFFFFF;
`
// const footer_div1_1 =document.createElement('div')
// const footer_div1_2 =document.createElement('div')

footer_h3_1.innerHTML = ' For questions<br> and suggestions'
const footer_div1_p1 =document.createElement('p')
footer_div1_p1.innerHTML = '<img src="./pic/mail.png" >   email@shelter.com'

const footer_div1_p2 =document.createElement('p')
footer_div1_p2.innerHTML = '<img src="./pic/phone.png" >   +13 674 567 75 54'
footer_div1.append(footer_h3_1,footer_div1_p1,footer_div1_p2)



//////////////////////////////////////////////////////////
const footer_h3_2 = document.createElement('h3')
const footer_div2_1 =document.createElement('div')
const footer_div2_2 =document.createElement('div')
footer_h3_2.innerHTML = 'We are waiting <br> for your visit'

const footer_div2_p1 =document.createElement('p')
footer_div2_p1.innerHTML = '<img src="./pic/pin.png" >   1 Central Street, Boston <br>(entrance from the store)'

const footer_div2_p2 =document.createElement('p')
footer_div2_p2.innerHTML = '<img src="./pic/pin.png" >   18 South Park, London '
footer_div2.append(footer_h3_2,footer_div2_p1,footer_div2_p2)

footer_h3_2.style.cssText=
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 130%;
color: #FFFFFF;
`

footer_div1_p1.style.cssText =
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 115%;
/* identical to box height, or 23px */

letter-spacing: 0.06em;

/* color-primary */

color: #F1CDB3;
`
footer_div1_p2.style.cssText =
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 115%;
/* identical to box height, or 23px */

letter-spacing: 0.06em;

/* color-primary */

color: #F1CDB3;
`
footer_div2_p1.style.cssText =
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 115%;
/* identical to box height, or 23px */

letter-spacing: 0.06em;

/* color-primary */

color: #F1CDB3;
`
footer_div2_p2.style.cssText =
`
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 115%;
/* identical to box height, or 23px */

letter-spacing: 0.06em;

/* color-primary */

color: #F1CDB3;
`
const modal1 = document.createElement('div')
modal1.classList.add('closed_modal')



const h6 = document.createElement("h6")
h6.innerHTML='ghbdtn'
const x = document.createElement('button')
x.innerHTML='X'

document.body.append(modal1)

const modal_div = document.createElement('div')
const modal_img = document.createElement('img')
const modal_text = document.createElement('div')
const modal_h2 = document.createElement('h2')
const modal_title = document.createElement('p')
const modal_p = document.createElement('p')
const modal_ul = document.createElement('ul')
const modal_li_1 = document.createElement('li')
const modal_li_2 = document.createElement('li')
const modal_li_3 = document.createElement('li')
const modal_li_4 = document.createElement('li')
modal_div.style.cssText=
`
display:flex;
`
learn1.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==0) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    section_1.classList.add('phone')
    })
learn2.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==1) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
learn3.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==2) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
    learn4.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==3) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
    learn5.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==4) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
    learn6.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==5) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
    learn7.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==6) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
    learn8.addEventListener('click', () => {
        info.map((el,a)=> {
            if (a==7) {
                modal_img.src=el.img
                modal_h2.innerHTML=el.name
                modal_title.innerHTML=el.title
                modal_p.innerHTML=el.discription
                modal_li_1.innerHTML=el.age
                modal_li_2.innerHTML=el.inoculations
                modal_li_3.innerHTML=el.diseases
                modal_li_4.innerHTML=el.parasites
            }
        })
    modal_ul.append(modal_li_1,modal_li_2,modal_li_3,modal_li_4)
    modal_text.append(modal_h2,modal_title,modal_p,modal_ul)
    modal_div.append(modal_img,modal_text)
    modal1.append(modal_div,x)
    document.body.style.overflow='hidden'
    modal1.classList.remove('closed_modal')
    modal1.classList.add('modal')
    })
x.addEventListener('click', () => {
    document.body.style.overflow='scroll'
    modal1.classList.remove('modal')
    modal1.classList.add('closed_modal')
})







