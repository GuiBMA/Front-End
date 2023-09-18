# ***Passeio Carioca***

## Descrição do Aplicativo:
  O Passeio Carioca é um aplicativo web que combina a funcionalidade do Instagram com o Google Maps, criando uma experiência única para turistas e visitantes que desejam explorar a rica história arquitetônica do Rio de Janeiro. O objetivo principal do aplicativo é fornecer informações detalhadas sobre imóveis históricos, pontos de interesse e eventos acontecendo na cidade, especialmente na zona sul até o recreio.

### Funcionalidades Principais:
  1- **Mapa Geolocalizado:** Ao iniciar o aplicativo, os usuários são apresentados a um mapa do Rio de Janeiro com vários pontos de interesse marcados em azul.

  2- **Pontos de Interesse:** Cada ponto de interesse no mapa corresponde a um imóvel histórico ou local turístico. Os dados sobre esses pontos vêm do cadastro feito pelos administradores.

  3- **História do Imóvel:** Ao clicar em um ponto de interesse no mapa, os usuários podem acessar informações detalhadas sobre o imóvel, incluindo sua história, curiosidades e detalhes arquitetônicos.

  4- **Feed de Notícias:** O aplicativo possui um feed de notícias semelhante ao Instagram, onde são exibidas postagens sobre os imóveis, eventos e anúncios de descontos em bares e restaurantes próximos aos pontos de interesse.

  5- **Comentários dos Usuários:** Os usuários têm a capacidade de interagir com o aplicativo, deixando comentários sobre a história do local. Esses comentários passam pela aprovação do administrador antes de serem publicados.

  6- **Anúncios e Descontos:** O aplicativo permite que o administrador publique anúncios, incluindo descontos em estabelecimentos próximos aos pontos turísticos, enriquecendo a experiência dos usuários.

  7- **Ranking de Clientes Fieis:** O aplicativo mantém um ranking dos usuários mais ativos e fiéis, incentivando a participação e a exploração contínua da cidade.

  8- **API do Google Maps:** O aplicativo utiliza a API do Google Maps para exibir informações geolocalizadas e pontos de interesse.

### Como Usar:
  Ao iniciar o aplicativo, você será recebido com um mapa do Rio de Janeiro.

  Clique em um ponto de interesse azul no mapa para acessar informações detalhadas sobre o imóvel ou local turístico correspondente.

  Explore o feed de notícias para obter as últimas atualizações sobre imóveis, eventos e descontos em bares e restaurantes.

  Deixe seus comentários sobre a história dos locais, enriquecendo a comunidade e a experiência de outros usuários.

### Desenvolvimento Técnico:
  **Linguagem:** O aplicativo foi desenvolvido utilizando a linguagem React.

  **Administração de Conteúdo:** Somente o administrador tem a capacidade de adicionar ou remover imóveis e publicar anúncios.

  **Origem dos Dados:** Os dados sobre os imóveis e pontos de interesse vêm do cadastro feito pelos administradores e da API do Google Maps.


### 5W2H para o Feed de Notícias:

- **O Quê?** O feed de notícias será semelhante ao Instagram no que se refere ao design e à dinâmica de navegação, e permitirá aos usuários visualizar postagens sobre os imóveis, eventos e anúncios de descontos em bares e restaurantes.

- **Como?** O feed será rankeado por atualização mais recente. A publicação contará com um arquivo de imagem e um texto localizado abaixo da imagem. Apenas o administrador publicará imóveis, anúncios e comentários solicitados pelos usuários. O usuário poderá curtir e comentar (solicitar publicação de comentário).

- **Quem?** Os usuários serão turistas, visitantes e moradores interessados em explorar a rica arquitetura e história dos imóveis no Rio de Janeiro.

- **Por Quê?** O feed de notícias permitirá ao usuário obter as últimas atualizações sobre imóveis, eventos e descontos em bares e restaurantes e deixar seus comentários sobre a história dos locais, enriquecendo a comunidade e a experiência de outros usuários.

- **Onde?** Dentro do aplicativo web "Passeio Carioca".

- **Quando?** O usuário irá utilizar o sistema quando estiver buscando notícias turísticas para inspiração de viagens, destacando destinos históricos e culturais, locais icônicos e conexões com figuras famosas, tornando as viagens mais significativas e autênticas.

### Requisitos Funcionais para o Feed de Notícias:

   - Exibição de Postagens: o sistema deve exibir postagens de forma organizada e cronológica para os usuários.
   - Filtragem por Categoria: o sistema deve permitir aos usuários filtrar as postagens por categorias, como "Imóveis Históricos", "Eventos" e "Descontos em Restaurantes".
   - Comentários e Interação: o sistema deve permitir aos usuários deixar comentários nas postagens para interagir com outros usuários e fornecer feedback.
   - Publicação de Postagens: o sistema deve permitir aos administradores criar e publicar postagens no feed de notícias, incluindo texto, imagens, links e comentários solicitados pelos usuários.
   - Controle de Privacidade: o sistema deve permitir aos administradores definir a visibilidade das postagens (pública, somente para usuários cadastrados, etc.).
   - Edição e Remoção de Postagens: o sistema deve permitir aos administradores editar ou remover suas próprias postagens, se necessário.

### Requisitos Não Funcionais para o Feed de Notícias:

   - Desempenho Rápido: o sistema deve ser carregado rapidamente, minimizando os tempos de carregamento das postagens e imagens. (?) VAGO
   - Segurança de Dados: As informações do feed de notícias, incluindo comentários dos usuários, devem ser protegidas e armazenadas de forma segura. (?) DIZ RESPEITO AO FEED?
   - Escalabilidade: o sistema deve ser escalável para acomodar um grande número de postagens e interações à medida que o aplicativo cresce. (?) VAGO. DIZ RESPEITO AO FEED?
   - Integração com Redes Sociais: o sistema deve permitir aos usuários devem compartilhar postagens do feed em redes sociais populares, como Facebook, Twitter e Instagram.
   - Notificações: o sistema deve permitir aos usuários optar por receber notificações de novas postagens ou comentários nas postagens que os interessam.
   - Compatibilidade de Dispositivos: o sistema deve ser acessível e exibido corretamente em dispositivos móveis, tablets e desktops. (?) VAGO
   - Acessibilidade: o sistema deve ser acessível a todas as pessoas, incluindo aquelas com deficiências, seguindo diretrizes de acessibilidade da web. (?) COMO?
   - Resposta a Picos de Tráfego: o sistema deve ser capaz de lidar com picos de tráfego durante eventos ou períodos de alta demanda sem degradação significativa do desempenho. (?) VAGO. DIZ RESPEITO AO FEED?
   - Armazenamento de Conteúdo: As postagens e imagens do feed de notícias devem ser armazenadas de forma eficiente e com backup regular. (?) DIZ RESPEITO AO FEED?

### Propósito do Feed de Notícias:
  - O feed de notícias permitirá ao usuário obter as últimas atualizações sobre imóveis, eventos e descontos em bares e restaurantes e deixar seus comentários sobre a história dos locais, enriquecendo a comunidade e a experiência de outros usuários.
