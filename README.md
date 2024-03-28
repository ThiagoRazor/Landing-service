# S.I.D Neat & Clean

Este é um site de landing page construído utilizando React.js com um formulário implementado utilizando React Hook Form.

## Recursos

- **[@heroicons/react](https://heroicons.com/react/)**: Ícones customizáveis para React. (v2.0.14)
- **[Firebase](https://firebase.google.com/)**: SDK para Firebase. (v10.5.0)
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações no React. (v9.0.1)
- **[React](https://reactjs.org/)**: Biblioteca principal do React. (v18.2.0)
- **[react-anchor-link-smooth-scroll](https://www.npmjs.com/package/react-anchor-link-smooth-scroll)**: Componente para rolar suavemente para âncoras na página. (v1.0.12)
- **[react-dom](https://reactjs.org/docs/react-dom.html)**: Pacote DOM para React. (v18.2.0)
- **[react-firebase-hooks](https://github.com/csfrequency/react-firebase-hooks)**: Hooks para Firebase em React. (v5.1.1)
- **[react-hook-form](https://react-hook-form.com/)**: Biblioteca para gerenciamento de formulários no React. (v7.43.0)

## Como Rodar Localmente

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2. Instale as dependências utilizando npm:
```sh
  npm install
```
3. Inicie o servidor de desenvolvimento:
```sh
  npm run dev
```
4. O site estará acessível em [http://localhost:3000](http://localhost:3000).

## Como Instalar no Firebase Hosting

1. Certifique-se de ter uma conta no Firebase e ter configurado um projeto.

2. Instale a ferramenta de linha de comando do Firebase globalmente:
```sh
  npm install -g firebase-tools
```


3. Faça login no Firebase:
```sh
  firebase login
```

4. Na raiz do projeto, inicialize o projeto Firebase:
```sh
  firebase init
```

- Selecione as opções relevantes, incluindo Firebase Hosting.
- Escolha o projeto Firebase existente.
- Defina `build` como diretório público.
- Responda "no" à pergunta sobre substituir o arquivo `index.html`.

5. Após inicializar o projeto Firebase, crie uma versão de produção do site:
```sh
  npm run build
```

6. Implante o site com o Firebase:
```sh
  firebase deploy
```
less


7. Após a implantação, o site estará disponível no domínio fornecido pelo Firebase.
