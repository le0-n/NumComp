let n1 = +prompt('Enter first number:  ')
let n2 = +prompt('Enter second number:  ')
let n3 = +prompt('Enter third number:  ')

if ((n1 > n2 && n1 > n3) && (n2 > n3)) {
    alert(`${n1} is the biggest. \n${n1} > ${n2} > ${n3}`)
} else if ((n1 > n2 && n1 > n3) && (n2 < n3)) {
    alert(`${n1} is the biggest. \n${n1} > ${n3} > ${n2}`)
} else if ((n2 > n1 && n2 > n3) && (n1 > n3)) {
    alert(`${n2} is the biggest. \n${n2} > ${n1} > ${n3}`)
} else if ((n2 > n1 && n2 > n3) && (n1 < n3)) {
    alert(`${n2} is the biggest. \n${n2} > ${n3} > ${n1}`)
} else if ((n3 > n1 && n3 > n2) && (n1 > n2)) {
    alert(`${n3} is the biggest. \n${n3} > ${n1} > ${n2}`)
} else if ((n3 > n1 && n3 > n2) && (n1 < n2)) {
    alert(`${n3} is the biggest. \n${n3} > ${n2} > ${n1}`)
}else if (n1 == n2 && n1 != n3) {
    alert(`First "${n1}" equal to Second "${n2}" and no equal to Third "${n3}"`)
}else if (n1 == n3 && n1 != n2) {
    alert(`First "${n1}" equal to Third "${n3}" and no equal to Second "${n2}"`) 
}else if (n1 == n2 && n1 == n3) {
    alert(`First, Second and Third numbers equal to ${n1}`)
}else if (n2 == n1 && n2 != n3) {
    alert(`Second "${n2}" equal to First "${n1}" and no equal to Third "${n3}"`)
}else if (n2 == n3 && n2 != n1) {
    alert(`Second "${n2}" equal to Third "${n3}" and no equal to First "${n1}"`) 
}else if (n3 == n1 && n3 != n2) {
    alert(`Third "${n3}" equal to First "${n1}" and no equal to Second "${n2}"`)
}else if (n3 == n2 && n3 != n1) {
    alert(`Third "${n3}" equal to Second "${n2}" and no equal to First "${n1}"`)
}