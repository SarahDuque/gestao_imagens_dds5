import React, { useEffect, useState } from 'react'

function GestaoImagem() {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        carregarImagens()
    },[]);

    async function carregarImagens() {
        try {
            const resposta = await fetch('http://localhost:5000/imagem',{
                method:'GET',
                headers:{
                    'content-Type':'application/json'
                }
            });

            if (!resposta) {
                throw new Error('Erro ao buscar imagens');
            }
            const consuta = await resposta.json();
            setImagens(consuta);
        } catch (error) {
            console.log('Erro ao buscar imagens', error)
        }
    }
    return (
        <div>
            <h1>gestaoImagem</h1>
            <ul>
                {imagens.map((imagem)=>(
                    <li key={imagem.id_imagem}>
                    <img src={`http://localhost:5000/public/${imagem.caminho}`}
                    alt={imagem.descricao} /></li>
                ))}
            </ul>
        </div>
    )
}

export default GestaoImagem