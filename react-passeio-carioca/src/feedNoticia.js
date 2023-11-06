import React from 'react';

const NewsFeedItem = () => {

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <button onClick={() => console.log('Back clicked')}>Voltar</button>
      <h2>Edifício Natal</h2>
      <img src={require("./imagens/Visconde de Pirajá, nº 336.png")} alt="Edifício Natal" style={{width: '25em', height: '25em'}} />
      <p>Com vocês o Edifício Natal, um dos prédios em estilo art déco mais belos do Brasil. Após a demolição do lendário Convento da Ajuda, no início do século passado, começaram a ser erguidas construções com inspiração francesa. Algumas delas ganharam cinemas em suas lojas no térreo. Assim surgiu a Cinelândia.O Edifício Natal, projetado por Ricardo Wriedt, ficou pronto em 1927, e logo em seguida foi inaugurado o Cine Pathé, com uma sala de dois pavimentos e quase mil lugares.A entrada para o cinema era através da Praça Floriano, n°45, e a do Edifício Natal fica nos fundos do prédio, na Rua Álvaro Alvim, n° 48.O cinema, de propriedade da família do fotógrafo Marc Ferrez, funcionou no local por 70 anos, até ser fechado em 1998.O prédio em seguida foi restaurado mantendo as características originais, como o piso dos andares, ferragens e mármores das escadas, janelase principalmente, a fachada com um dos coroamentos mais lindos da cidade.</p>
      <button onClick={() => console.log('Mapa')}>Botão para o mapa</button>
      <div>
        <button onClick={() => console.log('Curtir')}>Botão de curtir</button>
        <button onClick={() => console.log('Compartilhar')}>Botão de compartilhar</button>
        <button onClick={() => console.log('Comentar')}>Botão de comentar</button>
      </div>
    </div>
  );
};

export default NewsFeedItem;

