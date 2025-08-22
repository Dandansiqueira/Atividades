const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const titulo = document.getElementById('titulo');
const mensagemDiv = document.getElementById('mensagem');

const usuariosValidos = [
    { id: 'neymar', senha: 'gol123', nome: 'Neymar' },
    { id: 'vidigal', senha: 'vidigal7', nome: 'Vidigal' },
    { id: 'cr7', senha: 'siuu7', nome: 'CR7' }
];

function mostrarMensagem(texto, tipo) {
    mensagemDiv.textContent = texto;
    mensagemDiv.className = tipo; 
    setTimeout(() => {
        mensagemDiv.className = 'oculta'; 
    }, 5000);
}

function verificarCadastro() {
    console.log('Função verificar cadastro chamada');
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();
    const erros = [];

    if (!usuario) {
        erros.push('O campo ID Usuário é obrigatório.');
    }
    if (!senha) {
        erros.push('O campo Senha é obrigatório.');
    }


    let usuarioValido = false;
    let nomeUsuario = '';
    for (let i = 0; i < usuariosValidos.length; i++) {
        if (usuario === usuariosValidos[i].id && senha === usuariosValidos[i].senha) {
            usuarioValido = true;
            nomeUsuario = usuariosValidos[i].nome;
            break;
        }
    }

    if (!usuarioValido && usuario && senha) {
        erros.push('ID Usuário ou Senha inválidos.');
    }

    if (erros.length > 0) {
        let mensagem = 'Erros encontrados:\n' + erros.join('\n');
        mostrarMensagem(mensagem, 'erro');
    } else {
        mostrarMensagem('Login realizado com sucesso!', 'sucesso');
        usuarioInput.value = '';
        senhaInput.value = '';
        titulo.textContent = `Bem-vindo, ${nomeUsuario}!`;
    }
}
