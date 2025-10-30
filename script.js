// Menu Hambúrguer
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.nav-mobile');

menuHamburguer.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

// Popup PIX
const apoiarBtn = document.getElementById('apoiarBtn');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closeBtn');
const copyBtn = document.getElementById('copyBtn');
const pixKey = document.getElementById('pixKey');
const thankYouMessage = document.getElementById('thankYouMessage');

apoiarBtn.addEventListener('click', () => {
    popupOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    thankYouMessage.style.display = 'block';
    
    // Tocar som de agradecimento
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
    audio.play();
    
    // Fechar popup após 3 segundos
    setTimeout(() => {
        popupOverlay.classList.remove('active');
        thankYouMessage.style.display = 'none';
    }, 3000);
});

copyBtn.addEventListener('click', () => {
    const textToCopy = pixKey.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => {
            copyBtn.textContent = 'Copiar Chave';
        }, 2000);
    });
});

// Fechar popup ao clicar fora
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});







// FAQ Animation
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Optional: Open first item by default
document.querySelector('.faq-item').classList.add('active');








// Lightbox para galeria (adicionar ao arquivo JS existente)
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('click', function() {
        // Criar lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        // Clonar a imagem clicada
        const imgClone = this.querySelector('img').cloneNode();
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        
        // Adicionar título e descrição
        const title = this.querySelector('h3').textContent;
        const desc = this.querySelector('p').textContent;
        
        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';
        
        const lightboxTitle = document.createElement('h3');
        lightboxTitle.textContent = title;
        lightboxTitle.style.color = '#fff';
        lightboxTitle.style.marginBottom = '10px';
        
        const lightboxDesc = document.createElement('p');
        lightboxDesc.textContent = desc;
        lightboxDesc.style.color = 'rgba(255,255,255,0.9)';
        
        lightboxContent.appendChild(imgClone);
        lightboxContent.appendChild(lightboxTitle);
        lightboxContent.appendChild(lightboxDesc);
        lightbox.appendChild(lightboxContent);
        
        // Botão de fechar
        const closeBtn = document.createElement('span');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '20px';
        closeBtn.style.right = '20px';
        closeBtn.style.color = '#fff';
        closeBtn.style.fontSize = '2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = '10';
        
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        
        // Fechar lightbox
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    });
});








// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio (substituir por código real de envio)
        const nome = this.querySelector('input[name="nome"]').value;
        const email = this.querySelector('input[name="email"]').value;
        
        // Validação simples
        if (nome && email && this.querySelector('input[name="politica"]').checked) {
            // Mostrar mensagem de sucesso
            alert(`Obrigado por assinar nossa newsletter, ${nome}! Você receberá nossas atualizações no e-mail ${email}.`);
            
            // Resetar formulário
            this.reset();
            
            // Aqui você adicionaria o código real para enviar os dados
            // Exemplo com Fetch API:
            /*
            fetch('sua-api-de-newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email }),
            })
            .then(response => response.json())
            .then(data => {
                alert('Inscrição realizada com sucesso!');
                this.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Ocorreu um erro. Por favor, tente novamente.');
            });
            */
        } else {
            alert('Por favor, preencha todos os campos e aceite a política de privacidade.');
        }
    });
}








// Footer Newsletter Form
const footerForm = document.querySelector('.footer-form');

if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Obrigado por assinar nossa newsletter!');
            this.reset();
            
            // Aqui você pode adicionar o código para enviar o e-mail
            // Exemplo:
            // fetch('/newsletter', {
            //     method: 'POST',
            //     body: JSON.stringify({ email }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Inscrição realizada com sucesso!');
            //     this.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Ocorreu um erro. Por favor, tente novamente.');
            // });
        } else {
            alert('Por favor, insira um endereço de e-mail válido.');
        }
    });
}


const toggleButtons = document.querySelectorAll(".toggle-btn");
toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".category-card");
    card.classList.toggle("active");
  });
});


