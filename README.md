# Liberta Cabuçu 2026

Site one-page responsivo para o Liberta Cabuçu 2026.

## Estrutura

- `index.html` — estrutura semântica e conteúdo-base.
- `styles.css` — identidade visual, responsividade e acessibilidade visual.
- `script.js` — countdown, compartilhamento, FAQ, menu mobile e animações.
- `config.js` — **área central de edição** do evento.
- `assets/` — logo/favicons e imagens futuras.

## Como executar

A forma mais simples é abrir `index.html` no navegador.

Para desenvolvimento local, também pode usar qualquer servidor estático, por exemplo:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Antes de publicar

Edite `config.js` e substitua:

1. `startDate` pelo horário oficial de início.
2. `address` pelo endereço completo.
3. `mapsUrl` pela rota/endereço real no Google Maps.
4. links de Instagram, Facebook e WhatsApp.
5. programação.
6. perguntas e respostas do FAQ.

### Logo

A marca exibida atualmente é uma representação tipográfica provisória. Para usar a logo oficial, você pode substituir o bloco `.brand` no `index.html` por uma imagem:

```html
<img src="assets/logo-liberta.svg" alt="Liberta Cabuçu 2026">
```

## Countdown

O contador usa apenas `EVENT_CONFIG.startDate`, em formato ISO com fuso horário. Não existe outra data de término espalhada no código.

Quando a data/hora chega, o contador é substituído automaticamente por:

**É HOJE.**
**O LIBERTA COMEÇOU!**

## Compartilhamento

- WhatsApp gera uma mensagem pronta com o link.
- Copiar link usa a Clipboard API quando disponível.
- O botão Compartilhar usa a Web Share API em dispositivos/navegadores compatíveis.

## Acessibilidade

- HTML semântico.
- Navegação por teclado.
- Skip link.
- `aria-expanded` no menu/FAQ.
- `aria-live` no countdown.
- suporte a `prefers-reduced-motion`.
- contraste e áreas de toque pensados para mobile.

## Imagem Open Graph

Adicione uma imagem `assets/og-image.jpg` em produção para que o compartilhamento em redes sociais tenha uma capa personalizada.
