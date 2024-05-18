import React from 'react';

const Consulta = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <div id="contato" className="contato">
      <h1>entre em contato.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea name="mensagem" id="mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Consulta;
