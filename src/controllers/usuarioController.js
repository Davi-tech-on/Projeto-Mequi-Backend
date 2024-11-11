const { PrismaClient} = require("@prisma/client");
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function listarTodosUsuarios() {
    try {
       return await prisma.usuarios.findMany();
    } catch (error)  {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}

async function listarUmUsuario(id) {
    try {
       return await prisma.usuarios.findFirst({
        where:{
            usuario_id: Number(id)
        } 
       });
    } catch (error)  {
        return {
            severity: 'error',
            detail: error.message
        }
    }
}

async function criarUsuario(dados) {
    try {
     return await bcrypt.hash(dados.usuario_senha, 10).then(async (senha_segura) => {
        let dados_seguros = { ...dados, usuario_senha: senha_segura}
        return await prisma.usuarios.create ({
            data: dados_seguros
        })
      })
        
    } catch (error) {
        return{
            severity: 'error',
            detail: error.message
        }
    }
}

module.exports = {
    listarTodosUsuarios,
    listarUmUsuario,
    criarUsuario
}