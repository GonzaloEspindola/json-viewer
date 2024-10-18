# JsonViewer ⌨️💻✨

JsonViewer es un paquete que te permite visualizar de forma estetica y fácil un archivo Json en el navegador

## Características 🚀

- 🎨 **Fácil de usar**: Paquete muy simple de utilizar.
- 🌐 **Personalizable**: Personaliza los estilos con CSS.

## Uso

```javascript
data: {
  method: 'GET',
  url: 'characters',
  value: `[
    {
      "name": "Izuku midoriya",
      "alias": "Deku",
      "birthday": "15/7",
      "height": "166cm",
      "gender": "Male",
      "power": "One for all",
      "status": "alive",
      "family":[
        "Inko Midoriya (mother)",
        "Hisashi Midoriya (father)"
      ]
      },
      {
        "name": "Katsuki bakugo",
        "alias": "Deku",
        "birthday": "15/7",
        "height": "166cm",
        "gender": "Male",
        "power": "One for all",
        "status": "alive",
        "family":[
          "Inko Midoriya (mother)",
          "Hisashi Midoriya (father)"
        ]
      }
  ]`,
},
```

```javascript
new JsonViewer({
  container: document.querySelector('.json-view'),
  baseUrl: 'https://myheroacademia-api.com/',
  method: data.method,
  url: data.url,
  data: data.value,
  theme: 'dark',
  expand: true,
})
```

### Resultado
![Imagen demo del componente JsonViewer](https://res.cloudinary.com/ds3dttn8v/image/upload/f_auto,q_auto/v1/JsonViewer/JsonViewerDemo)

#### Instalación

```javascript
npm install @json-viewer/core
```
