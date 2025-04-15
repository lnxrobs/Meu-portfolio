let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
});

// Visibilidade das seções ao rolar a página
window.addEventListener('scroll', () => {
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        const rect = secao.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            secao.classList.add('visible');
        } else {
            secao.classList.remove('visible');
        }
    });
});

// Torna a primeira seção visível ao carregar a página
window.addEventListener('load', () => {
    const secoes = document.querySelectorAll('section');
    if (secoes.length > 0) {
        secoes[0].classList.add('visible');
    }
});

// Abre e fecha o dropdown de idiomas
document.getElementById('seletor-idioma').addEventListener('click', function() {
    this.classList.toggle('active');
    const dropdown = document.querySelector('.idioma-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Função para mudar o idioma
function mudarIdioma(idioma) {
   

    const traducoes = {
        pt: {
            tituloPrincipal: "Bem-vindo ao Meu Portfólio",
            modoDarkLight: "Modo Escuro & Claro",
            secaoSobre: "Sobre mim",
            secaoFerramentaSkills: "Capacitações",
            contato: "Contato",
            secaoIntro: `Nacionalidade: Brasileiro<br>
                   Idade: 20 anos<br>
                   Atualmente curso Data Science através do programa ONE da Oracle e Alura Latam.<br>
                   Atuei na área cuidando da infraestrutura física e lógica dos setores de Tecnologia Informação (T.I.)`,
            linguagemProg: "Linguagens de Programação",
            devOps: "Desenvolvimento e Operacional",
            sistemOps: "Sistemas Operacionais",
            virtuMach: "Virtualização de Máquinas",
            redeSocial: "Redes Sociais",
        },
        
        en: {
            tituloPrincipal: "Welcome to My Portfolio",
            modoDarkLight: "Dark and Light Mode",
            secaoSobre: "About Me",
            secaoFerramentaSkills: "Skills",
            contato: "Contact",
            secaoIntro: `Nationality: Brazilian<br>
                   Age: 20 years<br>
                   Currently studying Data Science through the ONE program by Oracle and Alura Latam.<br>
                   Worked in the area managing physical and logical infrastructure in IT departments.`,
            linguagemProg: "Programming Languages",
            devOps: "Development and Operations",
            sistemOps: "Operating Systems",
            virtuMach: "Virtual Machine Virtualization",
            redeSocial: "Social Networks",
        },
        
        es: {
            tituloPrincipal: "Bienvenido a Mi Portafolio",
            modoDarkLight: "Modo Oscuro y Claro",
            secaoSobre: "Sobre Mí",
            secaoFerramentaSkills: "Habilidades",
            contato: "Contacto",
            secaoIntro: `Nacionalidad: Brasileño<br>
                   Edad: 20 años<br>
                   Actualmente estudio Ciencia de Datos a través del programa ONE de Oracle y Alura Latam.<br>
                   Trabajé en el área gestionando infraestructura física y lógica en departamentos de TI.`,
            linguagemProg: "Lenguajes de Programación",
            devOps: "Desarrollo y Operaciones",
            sistemOps: "Sistemas Operativos",
            virtuMach: "Virtualización de Máquinas Virtuales",
            redeSocial: "Redes Sociales",
        },
    };
    
    // Aplica a tradução selecionada
    document.querySelectorAll("[data-key]").forEach(el => {
        const chave = el.getAttribute("data-key");
        if (traducoes[idioma] && traducoes[idioma][chave]) {
            el.innerHTML = traducoes[idioma][chave]; // Usa innerHTML para permitir as tags HTML
        }
    });
}

// Event listeners para cada botão de idioma
document.querySelectorAll('.idioma-opcao').forEach(button => {
    button.addEventListener('click', function() {
        const idioma = this.getAttribute('data-linguagem');
        mudarIdioma(idioma);  // Função para mudar o idioma
        document.querySelector('.idioma-dropdown').style.display = 'none';  // Fecha o dropdown após a seleção
        
        // Atualiza a bandeira no botão
        const bandeiraSelecionada = document.getElementById('bandeira-selecionada');
        const bandeira = this.querySelector('img').src; // Pega o src da bandeira clicada
        bandeiraSelecionada.innerHTML = `<img src="${bandeira}" alt="${idioma}" width="25px" />`;
    });
});

// Botão para redirecionar
document.getElementById('portal-button').addEventListener('click', () => {
    const portal = document.getElementById('portal-animation');
    portal.classList.remove('hidden');
  

    setTimeout(() => {
      window.location.href = 'https://lnxrobs.github.io/Meu-portifoliopessoal/my-port-pessoal/';
    }, 800); 
});
