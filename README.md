# ***Passeio Carioca***

## **Resumo do App:**
- Para ver um resumo geral do App [Clique aqui.](https://github.com/GuiBMA/Front-End/blob/main/ResumodoAppPasseioCarioca.md)

## **5W2H para o Feed de Notícias:**

- **O Quê?** O feed de notícias será semelhante ao Instagram no que se refere ao design e à dinâmica de navegação, e permitirá aos usuários visualizar postagens sobre os imóveis, eventos e anúncios de descontos em bares e restaurantes.

- **Como?** O feed será rankeado por atualização mais recente. A publicação contará com um arquivo de imagem e um texto localizado abaixo da imagem. Apenas o administrador publicará imóveis, anúncios e comentários solicitados pelos usuários. O usuário poderá curtir e comentar (solicitar publicação de comentário).

- **Quem?** Os usuários serão turistas, visitantes e moradores interessados em explorar a rica arquitetura e história dos imóveis no Rio de Janeiro.

- **Por Quê?** O feed de notícias permitirá ao usuário obter as últimas atualizações sobre imóveis, eventos e descontos em bares e restaurantes e deixar seus comentários sobre a história dos locais, enriquecendo a comunidade e a experiência de outros usuários.

- **Onde?** Dentro do aplicativo web "Passeio Carioca".

- **Quando?** O usuário irá utilizar o sistema quando estiver buscando notícias turísticas para inspiração de viagens, destacando destinos históricos e culturais, locais icônicos e conexões com figuras famosas, tornando as viagens mais significativas e autênticas.

## **Requisitos para o Feed de Notícias:**

### **Requisitos Funcionais para o Feed de Notícias:**

| **Requisitos Funcionais** |
| --- |
| O sistema deve exibir postagens de forma organizada e cronológica para os usuários. |
| O sistema deve permitir aos usuários filtrar as postagens por categorias, como "Imóveis Históricos", "Eventos" e "Descontos em Restaurantes". |
| O sistema deve permitir aos usuários deixar comentários nas postagens para interagir com outros usuários e fornecer feedback. |
| O sistema deve permitir aos administradores criar e publicar postagens no feed de notícias, incluindo texto, imagens, links e comentários solicitados pelos usuários. |
| O sistema deve permitir aos administradores definir a visibilidade das postagens (pública, somente para usuários cadastrados, etc.). |
| O sistema deve permitir aos administradores editar ou remover suas próprias postagens, se necessário. |

### **Requisitos Não Funcionais para o Feed de Notícias:**

| **Requisitos Não Funcionais** |
| --- |
| O sistema deve permitir aos usuários compartilhar postagens do feed em redes sociais populares, como Facebook, Twitter e Instagram. |
| O sistema deve permitir aos usuários optar por receber notificações de novas postagens ou comentários nas postagens que os interessam. |
| O sistema deve ser compatível com dispositivos móveis, tablets e desktops. |
| O sistema deve funcionar em todos os browsers. |
| O sistema deve ser acessível a todas as pessoas, incluindo aquelas com deficiências, seguindo diretrizes de acessibilidade da web. |
| O sistema deve ser capaz de lidar com picos de tráfego durante eventos ou períodos de alta demanda sem degradação significativa do desempenho. |
| O sistema deve ser desenvolvido em React. |

## **Propósito do Feed de Notícias:**
  - O feed de notícias permitirá ao usuário obter as últimas atualizações sobre imóveis, eventos e descontos em bares e restaurantes e deixar seus comentários sobre a história dos locais, enriquecendo a comunidade e a experiência de outros usuários.

## **Primeiro Caso de Uso do Feed de Noticias:**

### **Nome:**
  - Visualizar Feed de Notícias no Passeio Carioca

### **Descrição:**
  - Objetivo: O objetivo deste caso de uso é permitir que os usuários registrados no aplicativo Passeio Carioca visualizem o feed de notícias para obter informações atualizadas sobre imóveis, eventos e descontos em bares e restaurantes no Rio de Janeiro.

### **Atores:**
  - Ator Principal: Usuário Cadastrado

### **Pré-condições:**
  - O usuário já está logado na sua conta do Passeio Carioca.
    
  - O usuário tem uma conexão ativa com a internet.
    
  - O aplicativo está funcionando corretamente.

### **Fluxo Principal:**
  - O usuário abre o aplicativo do Passeio Carioca.

  - O sistema exibe a tela inicial do aplicativo.

  - O usuário seleciona a opção "Feed de Notícias" na barra de navegação/menu principal.

  - O sistema carrega o feed de notícias, que inclui postagens relacionadas a imóveis, eventos e descontos em bares e restaurantes no Rio de Janeiro.

  - O usuário rola verticalmente para percorrer todo o  feed de notícias.

  - O sistema exibe as postagens, cada uma contendo:

  - Uma imagem relacionada ao imóvel, evento ou oferta de restaurante.
  
  - Um texto descritivo que fornece informações sobre o item destacado na postagem.

### **Fluxo Alternativo**:
    
  - Se o usuário não tiver uma conexão ativa com a internet, o sistema exibirá uma mensagem de erro e solicitará que o usuário verifique sua conexão antes de continuar.

### Pós-condições:

  - O usuário pode continuar navegando no feed de notícias para obter informações atualizadas sobre imóveis, eventos e ofertas em bares e restaurantes no Rio de Janeiro.

  - O usuário pode interagir com as postagens, deixando curtidas e comentários, para compartilhar suas opiniões e experiências com outros usuários.

## **Segundo Caso de Uso do Feed de Noticias:**

### Nome : 
  - Configurar Notificações de Eventos Locais.

### Ator Principal: 
  - Usuário Registrado.

### Descrição: 
  - Os usuários podem configurar notificações para receber informações em tempo real sobre eventos locais interessantes que estão acontecendo no Rio de Janeiro através do aplicativo Passeio Carioca.

### Pré-condições:

  - O usuário deve estar registrado e ter feito login na sua conta no Passeio Carioca.

  - O aplicativo deve ter permissão para enviar notificações push para o dispositivo móvel do usuário.

### Fluxo Principal de Eventos:

  - O usuário registrado faz login na sua conta no aplicativo Passeio Carioca.

  - O usuário navega até a seção de notificações ou configurações do aplicativo, onde pode gerenciar suas preferências de notificação.

  - O usuário seleciona a opção para receber notificações de eventos locais.

  - O aplicativo apresenta opções de personalização, como escolher tipos específicos de eventos (por exemplo, concertos, festivais, exposições de arte) ou definir um raio de localização para os eventos desejados.

  - O usuário pode escolher receber notificações em tempo real para eventos recém-adicionados ou notificações diárias/resumos com informações sobre eventos futuros.

  - Após definir suas preferências, o usuário salva as configurações.

  - O sistema do Passeio Carioca monitora eventos locais que correspondem às preferências do usuário.

  - Quando um evento que corresponde às preferências do usuário é adicionado ao sistema, o aplicativo envia uma notificação ao dispositivo móvel do usuário, informando sobre o evento e fornecendo detalhes relevantes, como data, hora, local e descrição.

### Fluxos Alternativos:

  - O usuário pode optar por desativar ou modificar suas preferências de notificação a qualquer momento, acessando a seção de configurações do aplicativo.

## **API do mapa**

  - Para acessar a API do Leafet [Clique aqui.](https://react-leaflet.js.org/docs/api-map/)
  - Para acessar Readme do React [Clique aqui.](https://github.com/GuiBMA/Front-End/tree/main/react#readme)

## **Protótipo no Figma**:

  - Para ver o protótipo no Figma [Clique aqui.](https://www.figma.com/file/TZKPPiPGJN272c5gvNoLDU/Untitled?type=design&node-id=0%3A1&mode=design&t=a8n63SUSurKuNbyY-1)

## **Aplicação React**:
  - Acesse a aplicação react. [Clique aqui.](https://github.com/GuiBMA/Front-End/tree/main/react)

## **Quem Somos**:
- Acesse no link ao lado "Quem somos". [Clique aqui.](https://acamaz48.github.io/Front_123/)
