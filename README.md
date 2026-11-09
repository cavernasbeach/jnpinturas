# JN PINTURAS — Landing Page

Landing page institucional e comercial para a **JN Pinturas**, empresa de pintura
residencial. O objetivo principal do site é **gerar pedidos de orçamento pelo
WhatsApp**, com foco em visitantes vindos de anúncios do Instagram, Facebook e Google.

---

## 1. Identidade visual

| Token | Cor | Uso |
|---|---|---|
| `--white` | `#FFFFFF` | Fundos primários |
| `--black` | `#111111` | Textos, seção de diferenciais, rodapé |
| `--blue` | `#1646C8` | Cor de destaque, ícones, links, CTA |
| `--blue-dark` | `#10369B` | Gradientes de botões, hover, profundidade |
| `--gray` | `#F4F5F7` | Fundos secundários (cards, formulário, galeria) |

**Tipografia:** `Archivo` (display, títulos em caixa alta, pesos 800/900) e
`Manrope` (texto corrido), via Google Fonts.

**Logotipo (tipográfico):** quadrado arredondado com gradiente azul royal contendo as
iniciais **JN** em branco, seguido da palavra **PINTURAS** em letter-spacing amplo e do
subtítulo "Pintura residencial". O mesmo desenho aparece em `images/favicon.svg`.
Variantes: `.logo` (fundo claro) e `.logo-light` (rodapé escuro).

---

## 2. Estrutura da página (seções e IDs)

| # | Seção | Âncora | Conteúdo |
|---|---|---|---|
| 1 | Menu superior | `.site-header` | Logo, navegação (Início, Serviços, Nossos trabalhos, Diferenciais, Contato) e botão **Solicitar orçamento** |
| 2 | Banner principal (hero) | `#inicio` | Foto de sala recém-pintada, título "PINTOR EM CAMPINAS E VALINHOS", subtítulo, 2 CTAs e selo de confiança |
| 3 | Nossos serviços | `#servicos` | 6 cards com foto + botão de orçamento cada |
| 4 | Diferenciais | `#diferenciais` | Fundo escuro/azul royal, 6 ícones SVG, título "MAIS DO QUE PINTAR..." |
| 5 | Galeria de trabalhos | `#trabalhos` | Grade assimétrica com 6 fotos + aviso de imagens ilustrativas |
| 6 | Como funciona | `#como-funciona` | 4 etapas numeradas |
| 7 | Chamada para orçamento | `.cta-band` | Faixa azul royal em destaque |
| 8 | Contato | `#contato` | Dados da empresa + formulário que monta a mensagem do WhatsApp |
| 9 | Rodapé | `.site-footer` | Logo, descrição, navegação, serviços, contato e direitos |

Extras fixos: **botão flutuante de WhatsApp** (`.wa-float`, canto inferior direito,
visível em toda a navegação) e link "pular para o conteúdo" (`.skip-link`).

### Serviços listados
1. Pintura de apartamentos
2. Pintura de casas
3. Pintura de paredes e tetos
4. Massa corrida e preparação
5. Pintura de portas e batentes
6. Repintura e revitalização

### Diferenciais
Atendimento personalizado · Capricho em cada detalhe · Compromisso com prazos ·
Organização e limpeza · Materiais de qualidade · Excelente acabamento.

---

## 3. Integração com WhatsApp

- **Número:** `(19) 99575-0193` → link base `https://wa.me/5519995750193`
- **Todos** os botões de conversão (19 links no total) usam a classe `.wa-link` e o
  atributo `data-text` com a mensagem específica de cada origem.
- `js/main.js` → `initWhatsAppLinks()` monta o `href` final com
  `?text=` + `encodeURIComponent(mensagem)`, garantindo acentuação correta.
- Mensagens automáticas por origem do clique (10 mensagens distintas), por exemplo:
  - Botão principal / menu: _"Olá! Gostaria de solicitar um orçamento para pintura residencial."_
  - Card de apartamento: _"Olá! Tenho interesse em pintura de apartamento. Poderia me enviar um orçamento?"_
  - Card de massa corrida: _"Olá! Preciso de massa corrida e preparação de paredes. Gostaria de um orçamento."_
  - Contato geral: _"Olá! Gostaria de conhecer os serviços da JN PINTURAS."_

### Formulário de contato (`#quoteForm`)
Campos: **Nome**, **Telefone/WhatsApp** (com máscara `(00) 00000-0000`),
**Tipo de imóvel** (select) e **Serviço desejado** (textarea).

Validação no cliente: nome ≥ 2 caracteres, telefone com ≥ 10 dígitos, imóvel
selecionado e descrição ≥ 5 caracteres. Mensagens de erro acessíveis
(`role="alert"`, `aria-invalid`), foco no primeiro campo inválido.

Em caso de sucesso, o formulário abre o WhatsApp com:

```
Olá! Gostaria de solicitar um orçamento para pintura residencial.

Nome: <nome>
Telefone: <telefone>
Tipo de imóvel: <imóvel>
Serviço desejado: <descrição>
```

> Os dados **não** são gravados no site nem enviados a nenhum servidor — seguem
> apenas para o WhatsApp do cliente/empresa. Nenhum dado sensível é armazenado.

---

## 4. Estrutura de arquivos

```
index.html                 Página única (todas as seções + SEO + JSON-LD)
css/style.css              Estilos, tokens de cor, responsividade, animações
js/main.js                 Menu mobile, scrollspy, reveal, WhatsApp, formulário
images/
  favicon.svg              Logotipo JN
  hero-sala-pintada.jpg    Banner principal
  servico-apartamentos.jpg
  servico-casas.jpg
  servico-paredes-tetos.jpg
  servico-massa-corrida.jpg
  servico-portas-batentes.jpg
  servico-repintura.jpg
  galeria-sala.jpg
  galeria-quarto.jpg
  galeria-apartamento.jpg
  galeria-paredes.jpg
  galeria-sala-2.jpg
  galeria-fachada.jpg
```

---

## 5. Funcionalidades em JavaScript

| Função | Descrição |
|---|---|
| `initWhatsAppLinks()` | Injeta a URL do WhatsApp com mensagem codificada em todos os `.wa-link` |
| `initMenu()` | Drawer mobile com backdrop, trava de scroll, fechamento por ESC, clique fora, link interno e retorno ao desktop; devolve o foco ao botão |
| `initScrollUI()` | Sombra no cabeçalho ao rolar + *scrollspy* que marca o link da seção visível |
| `initReveal()` | Animações de entrada via `IntersectionObserver` (respeita `prefers-reduced-motion`) |
| `initForm()` | Máscara de telefone, validação, feedback e abertura do WhatsApp |
| `initYear()` | Atualiza o ano do rodapé automaticamente |

---

## 6. SEO e acessibilidade

- Título, descrição e textos principais voltados a pintor em Campinas e Valinhos.
- `robots` com indexação permitida e prévias grandes de imagem; `robots.txt` público.
- Open Graph e Twitter Card com descrições locais e imagem existente.
- JSON-LD `HousePainter` com telefone, Campinas e Valinhos como áreas atendidas e catálogo de serviços, sem endereço, preços ou avaliações inventados.
- Seção de atendimento por cidade e dúvidas sobre orçamento, economia e disponibilidade imediata, sem promessa de menor preço ou atendimento no mesmo dia.
- `meta keywords` removida: o Google não a utiliza para classificação. Os termos relevantes estão no conteúdo visível.
- Domínio oficial: **https://www.jnpinturas.com.br/**. Canonical, URLs sociais e dados estruturados usam esse endereço; `sitemap.xml` foi criado e referenciado em `robots.txt`. Conexão DNS e publicação ainda precisam ser concluídas na plataforma; veja **SEO.md**.
- Hierarquia semântica: um único `<h1>`, `<section>` com IDs, `<nav>`, `<article>`, `<footer>`.
- `alt` descritivo em todas as imagens; textos apenas para leitores de tela em ícones.
- Foco visível (`:focus-visible`), skip-link, `aria-expanded`/`aria-controls` no menu.
- `prefers-reduced-motion` desativa animações; CSS de impressão oculta menu e botão flutuante.

---

## 7. Responsividade

Breakpoints: `1080px` (grids de 3 → 2 colunas), `900px` (menu drawer, hero
empilhado, contato em coluna única), `720px` (cards, features e etapas em coluna
única; galeria 2 colunas; botão flutuante compacto) e `400px` (ajustes do logo).

Verificado com medição real em viewport de **390px**: `scrollWidth == clientWidth
== 390`, sem overflow horizontal; drawer abre em `L55–R390` e fecha corretamente.
`html { overflow-x: clip }` isola o drawer posicionado fora da tela.

---

## 8. Substituir as imagens ilustrativas

A galeria e os cards usam fotografias de banco de imagens (licença livre).
**Não** há depoimentos nem fotos de serviços efetivamente realizados pela JN Pinturas.
Para trocar por fotos reais:

1. Substitua os arquivos em `images/` mantendo os mesmos nomes de arquivo
   (ou atualize os `src` no `index.html`), preferencialmente em `.jpg` com
   largura máxima de ~1400px e compressão otimizada.
2. Atualize o texto `alt` para descrever o trabalho real.
3. Ajuste as legendas `<figcaption>` da galeria.
4. Ao publicar fotos reais, remova o aviso "Imagens ilustrativas" em `.gallery-foot`.

---

## 9. Próximos passos sugeridos

- Publicar a versão atual pelo botão **Publish / Publicar** no Lovable e adicionar **www.jnpinturas.com.br** nas configurações de domínios. No provedor DNS, copiar exatamente os registros exibidos pela plataforma; aguardar a verificação e o HTTPS. Veja o passo a passo em **SEO.md**.
- Trocar as imagens ilustrativas por fotografias reais dos trabalhos.
- Incluir depoimentos reais (somente com autorização dos clientes).
- Seguir o checklist de Search Console e Perfil da Empresa em **SEO.md**, enviando **https://www.jnpinturas.com.br/sitemap.xml** após a publicação. Campinas e Valinhos já estão indicadas como regiões de atendimento; não publicar endereço residencial se não houver atendimento ao público.
- Ativar o contêiner real do Google Tag Manager e configurar GA4/Ads conforme **GOOGLE-ADS.md**. A medição está preparada, mas permanece desativada até inserir o ID real e publicar as tags com os filtros de consentimento.
- Validar as conversões de WhatsApp e telefone antes de investir. Meta Pixel não foi instalado.

---

## 10. Páginas de destino por cidade e serviço

Além da página inicial, o site possui cinco páginas HTML estáticas independentes:

- `/pintor-em-campinas/` → `pintor-em-campinas/index.html`
- `/pintura-residencial-valinhos/` → `pintura-residencial-valinhos/index.html`
- `/pintor-em-paulinia/` → `pintor-em-paulinia/index.html`
- `/pintura-residencial-hortolandia/` → `pintura-residencial-hortolandia/index.html`
- `/pintura-de-apartamentos/` → `pintura-de-apartamentos/index.html`

As páginas reutilizam `css/style.css` e `js/main.js`, com componentes adicionais em
`css/landing.css`. Possuem conteúdo específico, perguntas frequentes, metadados e
canonical próprios, dados estruturados de serviço e breadcrumb, links entre páginas,
telefone clicável e WhatsApp com mensagem contextualizada e botão fixo. Os textos e
links estão no HTML, sem depender de JavaScript para indexação ou navegação.

A seção “Onde atendemos” e o rodapé da página inicial levam às páginas novas.
O sitemap lista as seis URLs. O atendimento regional indicado é Campinas, Valinhos,
Paulínia e Hortolândia, com disponibilidade a confirmar conforme o projeto.
As imagens continuam ilustrativas e não devem ser apresentadas como portfólio real.

Antes de anunciar, a publicação precisa servir cada pasta com seu `index.html` e
os arquivos compartilhados. Testar acesso direto e recarregamento de todas as URLs,
conferindo que não retornam a página inicial por fallback. Ver checklist em **SEO.md**.
Não foram executados testes de navegador, HTTP ou hospedagem nesta etapa.

## 11. Status

**Concluído no código:** página inicial, cinco páginas de destino, integração WhatsApp,
formulário com validação e máscara na home, menu responsivo, SEO com domínio oficial,
canonical e sitemap, galeria preparada para fotos reais e documentação. Medição de
cliques preparada com consentimento por finalidade e página de privacidade.

**A confirmar fora do repositório:** publicação das páginas, conexão DNS e HTTPS.
Também pendentes: imagens e depoimentos reais, identificador real do GTM, publicação
das tags, homologação e configuração das contas Google. O código não ativa campanhas.

## 12. Medição, privacidade e campanhas

- `js/main.js` carrega o módulo local `js/measurement.js` em todas as páginas.
- `js/measurement.js` apresenta as preferências, lembra a escolha por até 180 dias e
  só carrega o GTM após autorização para alguma finalidade e no domínio oficial.
  `CONFIG.gtmId` está vazio propositalmente; o Google não está ativo nesta entrega.
- `css/measurement.css` cuida do banner e dos controles de privacidade, com botões
  para recusar, salvar escolhas separadas de Analytics/Ads ou aceitar os opcionais.
- `/privacidade/` explica o formulário, fornecedores, medição, revogação e contato.
  Os links “Privacidade” e “Preferências de cookies” são inseridos no rodapé por JS.
- Eventos preparados: `whatsapp_click` e `phone_click`, sem campos do formulário
  nem mensagem do WhatsApp. Formulário válido conta como uma ação de WhatsApp;
  não equivale a conversa iniciada, pedido confirmado ou serviço contratado.
- A prévia Lovable não carrega tags reais. Links de WhatsApp e telefone continuam
  funcionando quando a pessoa recusa a medição ou usa bloqueadores.

**Manual de ativação: [GOOGLE-ADS.md](GOOGLE-ADS.md)** — onde obter IDs reais, tags,
acionadores e filtros de consentimento no GTM, vínculo GA4/Ads, conversões sem
contagem duplicada, campanhas, palavras-chave, negativas, anúncios e recursos,
Perfil da Empresa, rotina de 90 dias e checklist de testes antes de anunciar.
O orçamento descrito é uma sugestão e precisa de aprovação do responsável.

Não foram executados testes de navegador, Tag Assistant, rede ou contas Google
nesta etapa. É necessário publicar e homologar o conjunto site + contêiner antes
de investir em anúncios. A empresa deve revisar a política e o tratamento de dados.
