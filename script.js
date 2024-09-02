const initTypingAnimation = () => {
    const titleApresentacao = document.querySelector('.titleApresentacao h1')
    const span = document.querySelector('.titleApresentacao span')
    const paragraph = document.querySelector('.titleApresentacao p')

    const typingAnimation = (element, text, delay) => {
        setTimeout(() => {
            element.innerHTML = '' 
            const textToArray = text.split('') 

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 80 * index)
            })
        }, delay)
    }

    typingAnimation(titleApresentacao, 'HTML Semântica ', 0)
    typingAnimation(span, 'Prf: Enilda Aparecida Mendes da Rosa Cáceres', 1600)
    typingAnimation(paragraph, 'Guilherme Machado e Juliana Barbosa', 4200)
}

initTypingAnimation()