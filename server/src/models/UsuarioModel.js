import mysql from 'mysql2/promise';
import db from '../conexao.js';


export async function createUsuario(usuario) {
    const conexao = mysql.createPool(db);
    console.log('UsuarioModel :: createUsuario');


    const sql = 'INSERT INTO usuarios (login,senha,funcao) VALUES (?,?,?);';

    const params = [
        usuario.login,
        usuario.senha,
        usuario.funcao
    ];

    try {
        const retorno = await conexao.query(sql, params);
        return [201, {message:'Usuario Cadastrado'}];
    } catch (error) {
        console.log(error);
        return [500, {message: 'Erro ao cadastrar usuário'}];
    }
}

export async function readUsuario() {
    const conexao = mysql.createPool(db);
    console.log('UsuarioModel :: readUsuario');
    const sql = 'SELECT * FROM usuarios; ';

    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showOneUsuario(id_usuario) {
    const conexao = mysql.createPool(db);

    console.log('Mostrando um Usuario no Model Usuario');

    const sql = `SELECT * FROM  usuarios WHERE id_usuario =?`;
    const params = [id_usuario];

    try {
        const [retorno] = await conexao.query(sql, params);

        if (retorno.length < 1) {
            return [404, {menssage: 'Usuario não encontrado'}];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, {menssage: 'Usuario não encontrado'}];
    }
}