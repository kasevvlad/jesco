const boxs = document.querySelectorAll('.tabcontent')
const btns = document.querySelectorAll('.tablinks')

for (let index = 0; index < btns.length; index++) {
    const btn = btns[index]
    const box = boxs[index]

    btn.addEventListener('click', (e) => {
		console.log(btn); 
	 
        boxs.forEach((element) => {
            element.classList.remove('active')
        })
        btns.forEach((element) => {
            element.classList.remove('active')
        })
        btn.classList.add('active')
        box.classList.add('active')
    })
};

