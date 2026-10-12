# Tizuey | Link na Bio

Mini site pessoal da marca **Tizuey — Da Bahia para a Nuvem.**
HTML, CSS e JavaScript puro, sem frameworks, pronto para o GitHub Pages.

## Estrutura

```
tizuey-link-na-bio/
├── index.html            conteúdo e agenda de eventos
├── style.css             visual (paleta e fontes no topo)
├── script.js             foto opcional + marca eventos que já passaram
├── README.md             este guia
└── assets/
    ├── logo.png          logo original recortado, fundo transparente
    ├── logo-original.png arquivo original enviado, sem alterações
    ├── favicon.png       ícone da aba (o "T" do logo)
    └── foto-perfil.png   OPCIONAL: coloque sua foto aqui (quadrada)
```

## Dependência externa

Fontes **Sora** e **Manrope**, carregadas do Google Fonts. Se não carregarem, o site usa as fontes do sistema e continua legível.

## Tutorial de publicação no GitHub Pages

1. **Criar conta no GitHub.** Acesse github.com, clique em *Sign up* e confirme o e-mail. O nome de usuário vira parte do endereço do site, então escolha um que você goste.
2. **Criar o repositório público.** Clique em *New repository*. Nome sugerido: `tizuey` (letras minúsculas, sem espaços). Marque **Public** e clique em *Create repository*.
3. **Enviar os arquivos.** Na página do repositório, clique em *uploading an existing file*. Arraste `index.html`, `style.css`, `script.js` e a pasta `assets` (com o logo, o favicon e, se quiser, a foto). Confirme que a pasta `assets` aparece com os arquivos dentro e clique em *Commit changes*.
4. **Ligar o GitHub Pages.** Vá em *Settings*, depois *Pages*. Em *Build and deployment*, escolha *Deploy from a branch*, selecione a branch `main` e a pasta `/ (root)` e clique em *Save*.
5. **Achar o endereço público.** Espere 1 a 3 minutos e atualize a página *Pages*. O endereço aparece no topo, no formato `https://SEU-USUARIO.github.io/tizuey/`.

   **Atenção:** o endereço do *repositório* (`github.com/SEU-USUARIO/tizuey`) é onde ficam os arquivos. O endereço do *site* (`SEU-USUARIO.github.io/tizuey`) é o que as pessoas visitam. Na bio do Instagram vai o segundo.
6. **Testar no celular.** Abra o endereço público no navegador do celular, de preferência fora do seu Wi-Fi também. Toque em cada botão e em cada "Página oficial" e confira se abrem em nova aba.
7. **Problemas comuns.**
   - *Página 404:* espere alguns minutos e confira se o arquivo se chama exatamente `index.html`, na raiz do repositório.
   - *Site sem cores:* o `style.css` não foi enviado ou está dentro de outra pasta.
   - *Logo quebrado:* a pasta precisa se chamar `assets` e o arquivo `logo.png`, tudo em minúsculas.
   - *Mudou algo e não apareceu:* espere 1 a 2 minutos e recarregue com Ctrl+F5 (ou limpe o cache do celular).
   - *Foto não aparece:* o arquivo deve ser `assets/foto-perfil.png`.
8. **Atualizar a agenda.** No repositório, abra `index.html`, clique no lápis (*Edit*) e siga o comentário "COMO ADICIONAR UM EVENTO": copie um bloco `<li class="evento">`, troque nome, categoria, data e link, e preencha `data-fim` com o último dia do evento (`AAAA-MM-DD`). Clique em *Commit changes*. Depois de `data-fim`, o site marca sozinho "A data já passou".
9. **Colocar na bio do Instagram.** Perfil, *Editar perfil*, *Links* (ou *Site*), cole `https://SEU-USUARIO.github.io/tizuey/`.

## Opcional: pré-visualização ao compartilhar

Em `index.html`, procure o comentário `og:image`, descomente a linha e troque pelo seu endereço público.
