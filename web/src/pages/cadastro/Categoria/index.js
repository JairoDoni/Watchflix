import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

export default function CadastroCategoria(){
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>
      <Link to="/cadastro/categoria">
        Cadastro Categoria
      </Link>
    </PageDefault>
  )
}
