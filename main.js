// Definindo a classe Contatos
class Contatos {
    constructor(nome, email, telefone, comentario) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario
    }
}

// Definindo a classe GerenciadorContatos
class GerenciadorContatos {
    // Inicializa a lista de contatos vazia
    constructor() {
        this.contatos = []
    }

    adicionarContatos(contato) {
        //Adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos(){
        const listaContatos = document.getElementById('contato-lista')

        // Limpa a lista de contatos
        listaContatos.innerHTML = ''

        // Para cada novo contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.comentario}`

            listaContatos.appendChild(li)
        }
    }
}
// Cria um objeto da classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// Cria os elementos necessarios
const contatoForm = document.getElementById('contato-form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const comentarioText = document.getElementById('comentario')
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const comentario = comentarioText.value;

    // Criando o objeto de classe Contato
    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContatos(contato)

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    comentarioText.value = ''
})

mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block'
})

ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none'
})