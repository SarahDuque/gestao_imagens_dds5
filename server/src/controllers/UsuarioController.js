import { createUsuario, readUsuario, showOneUsuario } from "../models/UsuarioModel.js";



export async function criarUsuario(req, res) {
    console.log('UsuarioController : : Criando Usuario');
    const usuario = req.body;


    if (!usuario.login || !usuario.senha || !usuario.funcao) {
        res.status(400).json({ message: 'Login, senha e funcao são obrigatórios' })
    } else {
        try {
            const [status, resposta] = await createUsuario(usuario);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'UsuarioController : : Erro' });
        }

    }
}

export async function mostrarUsuario(req, res) {
    console.log('UsuarioController : : Mostrando Lista de Usuario');

    try {
        const [status, resposta] = await readUsuario();
        res.status(status).json(resposta);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'UsuarioController : : Erro' });
    }
}

export async function mostrarUmaUsuario(req, res) {
    console.log('UsuarioController : : Mostrando Um Usuario');

    const { id_usuario } = req.params;

    try {
        const [status, resposta] = await showOneUsuario(id_usuario);
        res.status(status).json(resposta);
    } catch (error) {
        res.status(500).json({message: 'Erro ao mostrar um usuario'});
    }
}
