import _ from 'lodash'
import myName from './myName'
import './style.css'
import Logo from './iracing-blue-logo.png'

import printMe from './print.js'

function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')

    // Lodash, now imported by this script
    element.innerHTML = myName('Dallas')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    const myIcon = new Image()
    myIcon.src = Logo

    element.appendChild(myIcon)

    return element
}

document.body.appendChild(component())