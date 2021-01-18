const spans=document.queryselectorall('h1 span')
span.foreach(span=>span.addventListner('mouseover',fuction(e){
	span.classList.add('animated'.'rubberBand')
}))
span.foreach(span=>span.addventListner('mouseover',fuction(e){
	span.classList.remove('animated'.'rubberBand')
}))
const htmlBar=document.queryselector('.bar-html')
const cssBar=document.queryselector('.bar-css')
const jsBar=document.queryselector('.bar-javascript')
const reactBar=document.queryselector('.bar-react')

var t1=new TimelineLite()

t1.fromto(htmlBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease: Power4.easeOut})
	 .fromto(cssBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease: Power4.easeOut})
	 .fromto(jsBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(75% - 6px)',ease: Power4.easeOut})
	 .fromto(reactBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(70% - 6px)',ease: Power4.easeOut})

const contoller =new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
	triggerElement: '.skills',
	triggerHook:0
})
.setTween(t1)
.addTo(contoller)

const showRequiredCategory = event => {
	const getId = event.id
	const links = document.queryselectorall('.work-category button')
	for(i=0;i<links.length;i++){
		if(links[i].hasAttribute('class')){
			links[i].classList.remove('active')
		}
	}

	event.classList.add('active')
	const getCategory=document.queryselector('.category-${getId}')
	const categories=document.queryselectorall('div[class ^= "category-"]')
	for(i=0;i<categories.length;i++){
		if(categories[i].hasAttribute('class')){
			categories[i].classList.remove('showCategory')
			categories[i].classList.add('hideCategory')
		}
	}

	getCategory.classList.remove('hideCategory')
	getCategory.classList.add('showCategory')
}