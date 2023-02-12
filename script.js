let n1 = +prompt('Enter first number:  ')
let n2 = +prompt('Enter second number:  ')
let n3 = +prompt('Enter third number:  ')

if ((n1 > n2 && n1 > n3) && (n2 > n3)) {
    alert(`${n1} is the biggest and ${n1} > ${n2} > ${n3}`)
} else if ((n1 > n2 && n1 > n3) && (n2 < n3)) {
    alert(`${n1} is the biggest and ${n1} > ${n3} > ${n2}`)
} else if ((n2 > n1 && n2 > n3) && (n1 > n3)) {
    alert(`${n2} is the biggest and ${n2} > ${n1} > ${n3}`)
} else if ((n2 > n1 && n2 > n3) && (n1 < n3)) {
    alert(`${n2} is the biggest and ${n2} > ${n3} > ${n1}`)
} else if ((n3 > n1 && n3 > n2) && (n1 > n2)) {
    alert(`${n3} is the biggest and ${n3} > ${n1} > ${n2}`)
} else if ((n3 > n1 && n3 > n2) && (n1 < n2)) {
    alert(`${n3} is the biggest and ${n3} > ${n2} > ${n1}`)
}