# Integração do Google Maps com React usando Leaflet

Este repositório demonstra a integração de mapas interativos em um aplicativo React usando a biblioteca Leaflet. Aqui está o motivo pelo qual escolhemos a biblioteca Leaflet para implementar mapas interativos em nosso projeto React:

## Por que Leaflet?

- **Leve e Flexível:** Leaflet é uma biblioteca JavaScript leve e altamente flexível projetada especificamente para criar mapas interativos. Ela é fácil de usar e não adiciona muito peso ao seu projeto, o que a torna uma escolha ideal para aplicativos da web.

- **Comunidade Ativa:** A biblioteca Leaflet possui uma comunidade ativa e uma ampla base de usuários. Isso significa que você pode encontrar uma grande quantidade de recursos, plugins e suporte online.

- **Recursos Avançados:** Leaflet oferece uma série de recursos avançados para criação de mapas interativos, incluindo marcadores personalizados, polígonos, interações de zoom e pan, entre outros.

- **Integração com React:** Leaflet pode ser facilmente integrado em aplicativos React. Existem bibliotecas e componentes prontos que facilitam a incorporação de mapas Leaflet em seus aplicativos React.

# Documentação

Introduction
Core concepts
React Leaflet provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components. As such, it can behave differently from how other React components work, notably:

DOM rendering
React does not render Leaflet layers to the DOM, this rendering is done by Leaflet itself. React only renders a <div> element when rendering the MapContainer component and the contents of UI layers components.

Component properties
The properties passed to the components are used to create the relevant Leaflet instance when the component is rendered the first time and should be treated as immutable by default.

During the first render, all these properties should be supported as they are by Leaflet, however they will not be updated in the UI when they change unless they are explicitly documented as being mutable.

Mutable properties changes are compared by reference (unless stated otherwise) and are applied calling the relevant method on the Leaflet element instance.

Leaflet elements references
Unless stated otherwise, all components exported by React Leaflet support refs exposing the created Leaflet element instance or DOM element (for panes).

This allows applications to access Leaflet's imperative APIs when required, but may create inconsistencies with props being set and should be used carefully.

React context
React Leaflet uses React's context API to make some Leaflet elements instances available to children elements that need it.

Each Leaflet map instance has its own React context, created by the MapContainer component. Other components and hooks provided by React Leaflet can only be used as descendants of a MapContainer.

Lifecycle process
The MapContainer renders a container <div> element for the map. If the placeholder prop is set, it will be rendered inside the container <div>.
The MapContainer instantiates a Leaflet Map for the created <div> with the component properties and creates the React context containing the map instance.
The MapContainer renders its children components.
Each child component instantiates the matching Leaflet instance for the element using the component properties and context, and adds it to the map.
When a child component is rendered again, changes to its supported mutable props are applied to the map.
When a component is removed from the render tree, it removes its layer from the map as needed.
Limitations
Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
The components exposed are abstractions for Leaflet layers, not DOM elements. Some of them have properties that can be updated directly by calling the setters exposed by Leaflet while others should be completely replaced, by setting an unique value on their key property so they are properly handled by React's algorithm.
