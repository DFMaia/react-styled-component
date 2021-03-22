import React from 'react';
import {Container, Header, Titulo, BemVindo} from './styles';

function App() {
  return (
    <Container>
      <Header>
        <Titulo>Projeto Styled</Titulo>
      </Header>

      <BemVindo cor="00FF00" tamanho={50}>
        Bem Vindo so sistema
      </BemVindo>

    </Container>
  );
}

export default App;

/**
 * <div className="container">
      <header className="header">
        <a className="titulo">Projeto Styled</a>
      </header>

      <h1>Bem vindo ao sistema</h1>
    </div>
 */