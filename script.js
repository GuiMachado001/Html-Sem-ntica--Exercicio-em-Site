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


window.addEventListener('DOMContentLoaded', (event) => {
    const sr = ScrollReveal({ reset: true }, {mobile: true,});

    sr.reveal('.containerMainIntroducao', {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 3000,
        reset: false,
        mobile: true,
    });

    sr.reveal('.containerTitleSemantica', {
        distance: '3000px',
        origin: 'top',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });
    sr.reveal('.mainSemantica', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });
    sr.reveal('#titleTag', {
        distance: '3000px',
        origin: 'top',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });
    sr.reveal('.containerConteudoTags', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });

    sr.reveal('.containerDescTag h1, .containerDescTag h2', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });

    sr.reveal('.card', {
        distance: '3000px',
        origin: 'top',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });
});