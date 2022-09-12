////////////////////Variables//////////////////////////////////////
const $=document
const weightTag=_id('customRange1')
const heightTag=_id('customRange2')
const resultTag=_id('result')
const statusTag=_id('status')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
////////////////////////////////////////////////////////
(function () {
   weightTag.value=0
    heightTag.value=0
})()
function bmiCalculator(weight,height) {
    height=height/100
    return weight / (height*height)
}
function bmiCondition(result) {
    if(result<18.5){
        statusTag.innerHTML='Underweight'
        statusTag.style.color='rgba(1,0,226,0.57)'
    }else if(result>18.5 && result<24.9){
        statusTag.innerHTML='normal'
        statusTag.style.color='green'
    }else if(result>25 && result<29.9){
        statusTag.innerHTML='overweight'
        statusTag.style.color='orange'
    }else if(result>29.9){
        statusTag.innerHTML='obese'
        statusTag.style.color='red'
    }
    resultTag.innerHTML=`${result}`
}
function weightHandler(e) {
    let weightValue=Number(e.target.value)+20
    let heightValue=Number(heightTag.value)+100
    weightTag.parentElement.children[0].innerHTML=`${weightValue}kg`
    let result=bmiCalculator(weightValue,heightValue).toFixed(2)
    bmiCondition(result)
}
function heightHandler(e) {
    let weightValue=Number(weightTag.value)+20
    let heightValue=Number(e.target.value)+100
    heightTag.parentElement.children[0].innerHTML=`${heightValue}cm`
    let result=bmiCalculator(weightValue,heightValue).toFixed(2)
    bmiCondition(result)
}
heightTag.addEventListener('input',heightHandler)
weightTag.addEventListener('input',weightHandler)