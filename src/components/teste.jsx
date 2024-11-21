import React, { useState } from 'react';

function MeuComponente() {
  // Declarando uma variável de estado chamada "contador" e sua função de atualização "setContador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
