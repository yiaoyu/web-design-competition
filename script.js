let navBar//导航栏
let navs = []//导航栏内容
let finalParas = []//尾页段落
let container//背景容器
let content//主体
let p1Hint//下滑提示
let hasNav = false//是否显示导航栏
let currentPage = 0//目前页数
const pageHeight = 768//每页高度
let sections = []//页元素
let pageStores = [0,0,0,0]//每页展示的故事
let pageStoresElement = []//获取元素
let dot1Element=[]
let dot2Element=[]
let dot3Element=[]
let dot4Element=[]
let dotBarElement = [dot1Element,dot2Element,dot3Element,dot4Element]//显示当前故事的序号
const storeWidth = 682//每个故事宽度
let ageNames = []//标签名
window.addEventListener("wheel",throttle(wheelEvent,800))
window.addEventListener("keydown",throttle(keyEvent,800))
window.addEventListener("mousemove",changeNav)
let page1Interval = window.setInterval(showPage1,500)
let page2Interval = window.setInterval(showPage2,500)
let page3Interval = window.setInterval(showPage3,500)
let page4Interval = window.setInterval(showPage4,500)
let page5Interval = window.setInterval(showPage5,500)
let page6Interval = window.setInterval(showPage6,500)
let autoPlayInterval = window.setInterval(autoPlay,8000)
let isAutoPlay = true
window.onload = function(){
    navBar = document.getElementById("nav")
    navs[0] = document.getElementById("nav1")
    navs[1] = document.getElementById("nav2")
    navs[2] = document.getElementById("nav3")
    navs[3] = document.getElementById("nav4")
    navs[4] = document.getElementById("nav5")
    navs[5] = document.getElementById("nav6")
    navs[0].style.background = "rgba(255, 0, 0,0.5)"
    container = document.getElementById("container")
    content = document.getElementById("content")
    p1Hint = document.getElementById("hint")
    sections[0] = document.getElementById("s1")
    sections[1] = document.getElementById("s2")
    sections[2] = document.getElementById("s3")
    sections[3] = document.getElementById("s4")
    sections[4] = document.getElementById("s5")
    sections[5] = document.getElementById("s6")
    pageStoresElement[0] = document.getElementById("st1")
    pageStoresElement[1] = document.getElementById("st2")
    pageStoresElement[2] = document.getElementById("st3")
    pageStoresElement[3] = document.getElementById("st4")
    dot1Element[0] = document.getElementById("st1n1")
    dot1Element[1] = document.getElementById("st1n2")
    dot1Element[2] = document.getElementById("st1n3")
    dot1Element[3] = document.getElementById("st1n4")
    dot2Element[0] = document.getElementById("st2n1")
    dot2Element[1] = document.getElementById("st2n2")
    dot2Element[2] = document.getElementById("st2n3")
    dot2Element[3] = document.getElementById("st2n4")
    dot3Element[0] = document.getElementById("st3n1")
    dot3Element[1] = document.getElementById("st3n2")
    dot3Element[2] = document.getElementById("st3n3")
    dot3Element[3] = document.getElementById("st3n4")
    dot4Element[0] = document.getElementById("st4n1")
    dot4Element[1] = document.getElementById("st4n2")
    dot4Element[2] = document.getElementById("st4n3")
    dot4Element[3] = document.getElementById("st4n4")
    dot1Element[0].style.color="rgb(177, 189, 189)"
    dot2Element[0].style.color="rgb(177, 189, 189)"
    dot3Element[0].style.color="rgb(177, 189, 189)"
    dot4Element[0].style.color="rgb(177, 189, 189)"
    finalParas[0] = document.getElementById("fp1")
    finalParas[1] = document.getElementById("fp2")
    finalParas[2] = document.getElementById("fp3")
    finalParas[3] = document.getElementById("fp4")
    ageNames[0] = document.getElementById("s2-age-name")
    ageNames[1] = document.getElementById("s3-age-name")
    ageNames[2] = document.getElementById("s4-age-name")
    ageNames[3] = document.getElementById("s5-age-name")
}
function keyEvent(){
    //方向键翻页
    let e = event
    if(e.key == "ArrowUp"){
        pageUp()
    }
    if(e.key == "ArrowDown"){
        pageDown()
    }
}
function wheelEvent(){
    //滚动翻页
    let e = event
    if (e.wheelDelta > 0) { //向上滚动
        pageUp()
    }else { //向下滚动
        pageDown()
    }
}
function changeNav(){
    //显示或隐藏导航栏
    let e = event
    if(e.pageY<=70){
        navBar.style.transform = "translateY(0px)"
    }else{
        navBar.style.transform = "translateY(-60px)"
    }
}
function showPage1(){
    if(currentPage == 0){
        //触发一次后关闭定时器
        clearInterval(page1Interval)
        setTimeout(_=>{
            p1Hint.style.visibility = "visible" 
        },2000)
    }
}
function showPage2(){
    if(currentPage == 1){
        //触发一次后关闭定时器
        clearInterval(page2Interval)
        setTimeout(_=>{
            sections[1].style.opacity = 1
            ageNames[0].style.opacity = 0
        },2000)
    }
}
function showPage3(){
    if(currentPage == 2){
        //触发一次后关闭定时器
        clearInterval(page3Interval)
        setTimeout(_=>{
            sections[2].style.opacity = 1
            ageNames[1].style.opacity = 0
        },2000)
    }
}
function showPage4(){
    if(currentPage == 3){
        //触发一次后关闭定时器
        clearInterval(page4Interval)
        setTimeout(_=>{
            sections[3].style.opacity = 1
            ageNames[2].style.opacity = 0
        },2000)
    }
}
function showPage5(){
    if(currentPage == 4){
        //触发一次后关闭定时器
        clearInterval(page5Interval)
        setTimeout(_=>{
            sections[4].style.opacity = 1
            ageNames[3].style.opacity = 0
        },2000)
    }
}
function showPage6(){
    if(currentPage == 5){
        //触发一次后关闭定时器
        clearInterval(page6Interval)
        setTimeout(_=>{
            finalParas[0].style.opacity = 1
        },1000)
        setTimeout(_=>{
            finalParas[1].style.opacity = 1
        },3000)
        setTimeout(_=>{
            finalParas[2].style.opacity = 1
        },5000)
        setTimeout(_=>{
            finalParas[3].style.opacity = 1
        },7000)
    }
}
function throttle(func,delay){
    //节流，防止一次翻多个页面
    let timer
    return function(){
        if(timer){
            return
        }else{
            func()
            timer = setTimeout(_ =>{
                timer=null
            },delay)
        }
    }
}
function pageUp(){
    //向上翻页
    if(currentPage!=0){
        navs[currentPage].style.background = ""
        currentPage--
        changeBG()
        content.style.transform = `translate(0px, -${currentPage*pageHeight}px)`
        navs[currentPage].style.background = "rgba(255, 0, 0,0.5)"
    }
}
function pageDown(){
    //向下翻页
    if(currentPage!=5){
        navs[currentPage].style.background = ""
        currentPage++
        changeBG()
        content.style.transform = `translate(0px, -${currentPage*pageHeight}px)`
        navs[currentPage].style.background = "rgba(255, 0, 0,0.5)"
    }
}
function pageJump(pageId){
    //跳转
    navs[currentPage].style.background = ""
    currentPage = pageId
    changeBG()
    content.style.transform = `translate(0px, -${currentPage*pageHeight}px)`
    navs[currentPage].style.background = "rgba(255, 0, 0,0.5)"
}
function changeBG(){
    container.style.backgroundImage = `url("./background/${currentPage}.jpg")`
}
// store函数的page(2-4页)，不等于currentPage(1-6页)，
function storeLeft(page){
    //故事向左翻页
    if(isAutoPlay){
        //清除自动翻页
        isAutoPlay = false
        clearInterval(autoPlayInterval)
        setTimeout(_ =>{
            autoPlayInterval = window.setInterval(autoPlay,8000)
            isAutoPlay = true
        },8000)
    }
    if(pageStores[page]!=0){
        dotBarElement[page][pageStores[page]].style.color="azure"
        pageStores[page]--
        dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
        pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
    }else{
        dotBarElement[page][pageStores[page]].style.color="azure"
        pageStores[page] = 3
        dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
        pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
    }
}
function storeRight(page){
    //故事向右翻页
    if(isAutoPlay){
        //清除自动翻页
        isAutoPlay = false
        clearInterval(autoPlayInterval)
        setTimeout(_ =>{
            autoPlayInterval = window.setInterval(autoPlay,8000)
            isAutoPlay = true
        },8000)
    }
    if(pageStores[page]!=3){
        dotBarElement[page][pageStores[page]].style.color="azure"
        pageStores[page]++
        dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
        pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
    }else{
        dotBarElement[page][pageStores[page]].style.color="azure"
        pageStores[page] = 0
        dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
        pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
    }
}
function storeJump(page,store){
    //故事跳转
    if(isAutoPlay){
        //清除自动翻页
        isAutoPlay = false
        clearInterval(autoPlayInterval)
        setTimeout(_ =>{
            autoPlayInterval = window.setInterval(autoPlay,8000)
            isAutoPlay = true
        },8000)
    }
    dotBarElement[page][pageStores[page]].style.color="azure"
    dotBarElement[page][store].style.color="rgb(177, 189, 189)"
    pageStores[page] = store;
    pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
}
function autoPlay(){
    //自动播放图片
    let page = currentPage - 1;
    if(currentPage > 0 && currentPage < 5){
        if(pageStores[page]!=3){
            dotBarElement[page][pageStores[page]].style.color="azure"
            pageStores[page]++
            dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
            pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
        }else{
            dotBarElement[page][pageStores[page]].style.color="azure"
            pageStores[page] = 0
            dotBarElement[page][pageStores[page]].style.color="rgb(177, 189, 189)"
            pageStoresElement[page].style.transform = `translate(-${pageStores[page]*storeWidth}px, 0px)`
        }
    }
}