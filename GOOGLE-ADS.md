# Google Ads — ativação e operação da JN Pinturas

## 1. O que está pronto e o que NÃO está ativo

O site é HTML/CSS/JavaScript estático. `js/main.js` carrega `js/measurement.js`
em todas as seis páginas comerciais e na página `/privacidade/`. O rodapé recebe
“Privacidade” e “Preferências de cookies”, e a primeira visita mostra as opções.
O formulário e os links funcionam mesmo quando a medição é recusada.

**Nenhuma conta, campanha ou tag real foi criada/ativada por este código.**
O identificador `gtmId` está vazio de propósito. Não há IDs fictícios em produção.
Também não foram executados testes de navegador, rede, Tag Assistant ou conversões.
Antes de investir, executar integralmente o checklist deste documento.

Precisam ser confirmados pelo responsável: orçamento mensal, serviços prioritários,
cidades efetivamente atendidas, acesso ao Perfil da Empresa e objetivo comercial.
A estrutura abaixo parte de pintura residencial em Campinas, Valinhos, Paulínia e
Hortolândia, com **R$ 50/dia como sugestão, não como verba autorizada**.

## 2. Consentimento e privacidade

- Modo básico: nenhum GTM/GA4/Ads é carregado por esta integração antes de autorização.
- Estatísticas e medição de anúncios são escolhas independentes, inicialmente desmarcadas.
- `analytics_storage` acompanha estatísticas; `ad_storage` e `ad_user_data` acompanham
  medição de anúncios; `ad_personalization` fica sempre `denied`.
- O consentimento padrão negado e a atualização são enfileirados antes do GTM.
- Sem ping de medição pelo site quando tudo está recusado; sem `noscript` do GTM.
- Escolha em `localStorage`, chave `jn_measurement_consent`, versão 1, validade de
  180 dias. Se o armazenamento estiver bloqueado, vale apenas para a página atual.
- Alterações em uma página já instrumentada atualizam o consentimento e recarregam
  a página. O código tenta apagar cookies próprios conhecidos `_ga*`, `_gid`,
  `_gat*` e `_gcl_*`; isso não apaga dados já recebidos nem cookies de terceiros.
- Não adicionar outros snippets, pixels ou contêineres por fora deste mecanismo.
- Google Fonts e informações técnicas de hospedagem são tratados separadamente
  na página de privacidade; o banner não é um bloqueador de todos os fornecedores.
- A empresa deve revisar o texto de privacidade, bases legais, retenção de dados
  de atendimento e contratos com fornecedores antes de ativar as contas.

## 3. Identificadores reais e publicação

1. Criar/usar uma propriedade GA4 e fluxo Web para `https://www.jnpinturas.com.br`.
   Copiar o ID de medição real `G-…` em Administrador → Fluxos de dados.
2. Criar/usar um contêiner **Web** no Tag Manager. Copiar seu ID real `GTM-…`.
3. No Google Ads, criar ações de conversão de site manuais para WhatsApp e telefone.
   Copiar o ID `AW-…` e o rótulo próprio de **cada** ação nas instruções de tag/GTM.
4. No GTM, configurar as tags e consentimentos da próxima seção, validar e publicar
   a versão do contêiner. Os IDs GA4/Ads ficam no GTM, não duplicados no HTML.
5. Só então preencher `CONFIG.gtmId` em `js/measurement.js` com o ID real do GTM.
   Manter os domínios autorizados `www.jnpinturas.com.br` e `jnpinturas.com.br`.
6. Publicar o site no Lovable, verificar HTTPS, domínio e todas as páginas diretamente.
   A prévia em domínio do Lovable **não carrega o Google**, mesmo com autorização.
   Para homologar, usar ambiente autorizado e contêiner/propriedade de teste separados;
   nunca liberar indiscriminadamente todos os domínios de prévia.
7. Não instalar novamente GTM/GA4 no painel da hospedagem. Não incluir snippets de
   conversão em cada botão: isso duplicaria os eventos compartilhados.

## 4. Contrato de eventos do site

| Evento `dataLayer` | Significado | Conversão sugerida |
|---|---|---|
| `jn_measurement_ready` | Página autorizada e contêiner iniciado | Não é lead |
| `whatsapp_click` | Clique em link da JN ou formulário válido preparado para WhatsApp | Contato inicial |
| `phone_click` | Clique em link `tel:` | Secundária inicialmente |

Parâmetros: `contact_channel` (`whatsapp`/`phone`), `contact_placement`, `page_path`,
`page_city`, `service_type`, `jn_analytics_consent` e `jn_ads_consent`.
O evento de inicialização também fornece `page_location` sem query string/hash.
As variáveis permanecem disponíveis no modelo de dados do GTM nos eventos seguintes.
`contact_placement` usa posições fixas (header, footer, floating, seção, content ou
quote_form); não usa texto do botão ou conteúdo digitado.

O formulário válido emite **um** `whatsapp_click` com posição `quote_form`.
Formulário inválido não emite evento; não configurar outra conversão `form_submit`.
Nome, telefone do visitante, imóvel selecionado e descrição **não são enviados**
por esses eventos. Não transmitir `Click URL` do WhatsApp: ela pode conter mensagem
com dados pessoais. Não ativar captura automática de campos ou conversões otimizadas
com dados fornecidos pelo usuário sem outra implementação e revisão de privacidade.
O site ignora repetições da mesma ação/posição por 1,5 s, não deduplica clientes.
Cliques recusados não são guardados nem reenviados após aceitar.

## 5. Configuração exata no GTM

Habilitar a visão geral de consentimento. Criar variáveis da camada de dados,
versão 2, para todos os parâmetros acima, inclusive `page_location`.
Não criar um segundo gerenciador de consentimento que sobrescreva a escolha do site.

**Acionadores de Evento personalizado (condições em todos eles):**

- Inicialização Analytics: nome `jn_measurement_ready`, `jn_analytics_consent` igual
  a booleano `true` (se a interface converter em texto, verificar `true` na prévia).
- Contato Analytics: nome correspondente à regex `^(whatsapp_click|phone_click)$`,
  `jn_analytics_consent` igual a `true`.
- Inicialização Ads: nome `jn_measurement_ready`, `jn_ads_consent` igual a `true`.
- WhatsApp Ads: nome `whatsapp_click`, `jn_ads_consent` igual a `true`.
- Telefone Ads: nome `phone_click`, `jn_ads_consent` igual a `true`.

Nunca usar All Pages, Just Links, envio automático de formulário ou gatilhos
paralelos de clique para essas conversões. Não usar apenas Consent Initialization
para carregar tags: ele não substitui os filtros por finalidade descritos aqui.

### Tags a publicar

| Tag | Acionador | Consentimento adicional obrigatório |
|---|---|---|
| Tag do Google, ID GA4 real | Inicialização Analytics | `analytics_storage` |
| Evento GA4, nome pela variável Event | Contato Analytics | `analytics_storage` |
| Vinculador de conversões | Inicialização Ads | `ad_storage` e `ad_user_data` |
| Tag do Google, ID Ads real (se solicitada pela configuração da conta) | Inicialização Ads | `ad_storage` e `ad_user_data` |
| Acompanhamento de conversões Google Ads, ID e rótulo WhatsApp | WhatsApp Ads | `ad_storage` e `ad_user_data` |
| Acompanhamento de conversões Google Ads, ID e rótulo Telefone | Telefone Ads | `ad_storage` e `ad_user_data` |

Nas tags GA4, informar `page_location` pela variável sanitizada do site e
`page_referrer` vazio, sem URL bruta de consulta ou mensagem. A tag inicial pode
enviar seu `page_view` padrão; não criar outro `page_view` para o mesmo carregamento.
Usar sequenciamento na tag de eventos GA4 para garantir a configuração antes do
evento, se necessário. Enviar nos eventos apenas os parâmetros fixos do contrato.
Registrar `page_city`, `service_type` e `contact_placement` como dimensões
personalizadas de escopo de evento no GA4, se forem usadas em relatórios.

No fluxo Web do GA4, desligar medição otimizada de cliques de saída, interações de
formulário e alterações de histórico; para máxima previsibilidade, desativar a
medição otimizada completa nesta implantação. Não marcar o clique de saída
automático como outra conversão. Desativar Google Signals, coleta de dados
fornecidos pelo usuário e personalização de anúncios; ajustar retenção ao mínimo
necessário (por exemplo, 2 meses para dados de evento) e documentar a decisão.
No GTM/Ads, não habilitar remarketing, conversões otimizadas, decoração entre
domínios nem passagem de parâmetros por URL. Auditar as outras tags do contêiner:
tags sem os filtros e consentimentos acima podem violar a escolha do visitante.

### Conversões no Ads e vínculo GA4

- WhatsApp: ação de site, categoria Contato, contagem **Uma**, sem valor monetário
  inventado. Usar como principal somente depois da validação.
- Telefone: ação de site de clique, contagem Uma, **secundária** inicialmente.
  Não é rastreamento de chamada concluída nem medição de duração de ligação.
- Formulário: já incluído em WhatsApp; não contar novamente como envio de lead.
- Vincular Ads e GA4 em Administrador → Vinculações de produtos e conferir as
  permissões nas duas contas. Habilitar marcação automática no Google Ads.
- Nesta arquitetura, usar a conversão **nativa do Ads via GTM** para os lances.
  Não importar o mesmo `whatsapp_click` do GA4 como outra conversão principal.
  Se optar pela importação GA4, desativar a equivalente nativa e revalidar tudo.
- Aceitar apenas Analytics não autoriza o envio direto ao Ads. Para respeitar essa
  separação, não importar esses eventos do GA4 para conversões do Ads.
- Revisar janela de conversão e modelo de atribuição disponíveis na conta conforme
  o ciclo comercial; anotar escolhas. Não atribuir receita de contrato ao clique.

A URL de página sanitizada remove parâmetros arbitrários. IDs de clique válidos
só entram na URL enviada ao GA4 quando a medição de anúncios também foi aceita.
O vinculador Ads pode ler a marcação automática da página após autorização.
UTMs livres não são copiadas pelos eventos para evitar dados pessoais em campos
arbitrários; utilizar relatórios do Ads/integração e testar atribuição de um clique
real autorizado. Recusa, bloqueadores e navegação podem limitar a atribuição.

## 6. Campanhas e páginas de destino

Com verba inicial sugerida de R$ 50/dia, começar com **uma campanha de Pesquisa**,
com grupos por intenção, em vez de fragmentar o aprendizado em quatro campanhas.
Se o orçamento autorizado for outro, recalcular antes da publicação. Para referência,
R$ 50 × 30 = R$ 1.500; o limite mensal usual do Ads usa 30,4 dias (R$ 1.520).
O gasto em um dia pode superar o orçamento diário médio conforme regras do Google.

| Grupo | URL final no domínio oficial | Palavras-chave iniciais |
|---|---|---|
| Campinas | `/pintor-em-campinas/` | "pintor em campinas", [pintor campinas], "pintura residencial campinas", "empresa de pintura em campinas" |
| Casas / residencial | `/pintor-em-campinas/` | "pintor residencial", [pintor residencial], "pintura de casas", "pintura interna residencial", "pintura externa residencial", "pintura de paredes", "pintura de teto", "orçamento pintor", "contratar pintor" |
| Apartamentos | `/pintura-de-apartamentos/` | "pintura de apartamento", [pintura de apartamento], "pintor para apartamento", "pintura de apartamento preço" |
| Valinhos | `/pintura-residencial-valinhos/` | "pintor em valinhos", [pintor valinhos], "pintura residencial valinhos" |
| Paulínia | `/pintor-em-paulinia/` | "pintor em paulínia", [pintor paulinia], "pintura residencial paulínia" |
| Hortolândia | `/pintura-residencial-hortolandia/` | "pintor em hortolândia", [pintor hortolandia], "pintura residencial hortolândia" |
| Marca (se houver procura) | `/` | "jn pinturas", [jn pinturas] |

Aspas indicam frase; colchetes indicam exata. Os grupos ficam sujeitos às cidades
segmentadas. Palavras sem cidade precisam de revisão frequente dos termos de busca.
Não usar correspondência ampla nesta etapa nem prometer volume/custo por contato.

Com mais dados e verba, separar campanhas para controlar investimento:
Campinas 50%, casas/apartamentos 25%, região 20%, marca 5%, como referência
ajustável, nunca obrigação. Orçamentos de campanha não se aplicam diretamente a
grupos de anúncios. Excluir termos de marca das não-marca se fizer essa separação.

### Configurações da campanha

- Objetivo: Leads; tipo: Rede de Pesquisa; idioma: Português.
- Cidades: Campinas, Valinhos, Paulínia e Hortolândia. Escolher presença — pessoas
  que estão ou frequentam regularmente os locais — e não apenas interesse.
- Display e parceiros de pesquisa: desativados inicialmente; todos os dispositivos.
- Rotação: otimizar. Programação: alinhar à capacidade real de atendimento;
  recursos de chamada só nos horários em que alguém puder atender.
- Início sem histórico: Maximizar cliques com limite de CPC definido pelo gestor,
  conforme orçamento e mercado; não inventar CPC antes de avaliar a conta.
- Só após conversões validadas e volume útil: avaliar Maximizar conversões.
  CPA desejado depois, com custo por cliente e margem conhecidos.
- Não ativar automaticamente recomendações que ampliem redes, palavras ou verba.

### Negativas iniciais e cuidados

Adicionar como negativas de frase, verificando termos de pesquisa e variantes:
"curso", "cursos", "vaga", "vagas", "emprego", "empregos", "salário", "salario",
"grátis", "gratis", "faça você mesmo", "como pintar", "apostila", "máquina de pintura",
"maquina de pintura", "concurso". Negativas não cobrem automaticamente todas as
variantes. Revisar semanalmente e evitar bloquear pesquisas comerciais legítimas.
**Não negativar isoladamente "tinta"**: pode impedir procura por pintor com material.
Negativar consultas de compra como "comprar tinta", "loja de tintas" e "venda de tinta"
quando confirmada a irrelevância. Não excluir automaticamente preço, barato ou orçamento.

## 7. Anúncios responsivos e recursos

Usar um anúncio responsivo por grupo inicialmente, com destino coerente com o texto.
Títulos abaixo têm até 30 caracteres; adaptar cidade/serviço e reconferir o limite
no editor. Não usar inserção automática de cidade ou alegações não comprovadas.

1. Pintor em Campinas
2. JN Pinturas em Campinas
3. Pintura Residencial
4. Pintura de Casas
5. Pintura de Apartamentos
6. Orçamento pelo WhatsApp
7. Renove Sua Casa
8. Pintura de Paredes e Tetos
9. Pintura Interna e Externa
10. Planeje Sua Pintura
11. Pintor em Valinhos
12. Pintor em Paulínia
13. Pintor em Hortolândia
14. Consulte a Disponibilidade
15. Conte Seu Projeto à JN Pinturas

Não misturar títulos de cidades diferentes no mesmo anúncio. Usar apenas os
pertinentes ao grupo e completar com variações de serviço. Descrições (até 90 caracteres):

- Pintura de casas e apartamentos em Campinas. Peça seu orçamento pelo WhatsApp.
- Conte quais ambientes deseja renovar. Envie fotos e detalhes para avaliar seu projeto.
- Paredes, tetos e repintura residencial. Combine o escopo e consulte a disponibilidade.
- Atendimento em Valinhos, Paulínia e Hortolândia. Fale com a JN Pinturas pelo WhatsApp.

A última descrição é para grupos regionais; nas demais, manter a localidade do grupo.
Não anunciar como portfólio real as imagens ilustrativas atuais nem prometer
liderança no Google, menor preço, atendimento imediato ou resultado garantido.

**Sitelinks** (apontar para URLs completas do domínio oficial):

| Texto | Destino |
|---|---|
| Pintura em Campinas | `/pintor-em-campinas/` |
| Pintura de Apartamentos | `/pintura-de-apartamentos/` |
| Atendimento Regional | `/#atendimento` (conferir âncora antes de publicar) |
| Solicitar Orçamento | `/#contato` |

Se a âncora regional não corresponder à seção publicada, usar uma das páginas de
cidade. Frases de destaque possíveis: “Casas e apartamentos”, “Orçamento pelo WhatsApp”,
“Atendimento regional”. Snippet estruturado com cabeçalho Serviços: pintura de casas,
pintura de apartamentos, paredes e tetos, repintura. Recurso de chamada:
**+55 19 99575-0193**, com disponibilidade confirmada pelo responsável.
Cliques no recurso de chamada dentro do anúncio não passam pelo site: configurar
sua medição separadamente no Ads e não confundir com `phone_click` do site.

## 8. Perfil da Empresa, Search Console e operação

- Criar/reivindicar o Perfil da Empresa e verificar a propriedade no Google.
- Nome verdadeiro: JN Pinturas; categoria Pintor (ou equivalente disponível).
  Não acrescentar palavras-chave ao nome comercial.
- Informar telefone e site oficiais, serviços e cidades realmente atendidas.
- Se não recebe clientes presencialmente, configurar área de atendimento e ocultar
  endereço residencial. Não inventar ponto comercial ou horário.
- Publicar fotos reais autorizadas; as imagens atuais do site são ilustrativas.
- Solicitar avaliações autênticas, sem compra, incentivos ou seleção apenas de
  clientes satisfeitos; responder avaliações e publicar trabalhos regularmente.
- Vincular o Perfil da Empresa ao Ads para recursos de local somente se elegível.
- Verificar domínio no Search Console e enviar `https://www.jnpinturas.com.br/sitemap.xml`.
  O cadastro e a indexação dependem das contas Google e da publicação, não do commit.

Registrar contatos em planilha/CRM de acesso restrito: data, canal, cidade, serviço,
origem declarada, qualificado ou não, proposta, contrato e receita efetiva. Não
incluir esses dados no `dataLayer`. Um clique pode não abrir conversa: contabilizar
contatos reais separadamente. Comparar custo por contato qualificado, orçamento e
contrato; não otimizar apenas pelo número de cliques. Importação de conversões
offline exige outro fluxo de identificação, consentimento e implementação, não
está incluída nesta etapa.

**Rotina de 90 dias:**
- Dias 1–7: confirmar estratégia, publicar, testar consentimento e conversões,
  configurar contas e Perfil da Empresa. Não investir antes da validação.
- Dias 8–30: ativar Pesquisa com verba aprovada, revisar termos semanalmente,
  negativas, geografia, dispositivos e qualidade dos contatos.
- Dias 31–60: comparar cidades e anúncios; testar lances por conversão somente
  com dados confiáveis e avaliar páginas de destino.
- Dias 61–90: ampliar apenas onde houver retorno; correspondência ampla/Smart
  Bidding e Performance Max são testes futuros condicionados a dados e materiais.

## 9. Checklist obrigatório de homologação

No domínio autorizado e com o contêiner de teste/publicado correto, usar navegador,
DevTools (rede, cookies, armazenamento), Tag Assistant e DebugView do GA4. Não
confiar só em abrir o WhatsApp ou em ver o evento na camada de dados.

- [ ] Home, cinco destinos e `/privacidade/` abrem diretamente e após recarregar,
  sem fallback para outra página, erros JavaScript, 404 em CSS/JS ou overflow mobile.
- [ ] Banner aparece sem escolha anterior; botões têm acesso por teclado e não
  impedem permanentemente acessar o WhatsApp; rodapé reabre preferências.
- [ ] Antes da escolha e após recusar todos: nenhuma solicitação GTM/GA4/Ads,
  nenhum cookie de medição novo, links e formulário continuam funcionando.
- [ ] Só Analytics: eventos no GA4, nenhuma tag/conversão Ads; só Ads: tags Ads,
  nenhuma tag/evento GA4. Personalização permanece negada em todos os casos.
- [ ] Aceitar ambos: um `jn_measurement_ready` por carregamento e um page_view,
  sem contêiner duplicado nem configurações GA4 paralelas.
- [ ] Após aceitar, testar header, cards, links de texto, seções, rodapé e botão
  fixo na home e nos cinco destinos: um evento WhatsApp por ação, contexto correto.
- [ ] Telefone nas páginas de destino: um `phone_click`, sem afirmar chamada concluída.
- [ ] Formulário inválido: nenhum evento; válido: um WhatsApp com `quote_form`,
  mensagem abre normalmente e nenhum campo digitado aparece nas requisições de medição.
- [ ] Conferir nas requisições e Tag Assistant que não há mensagem, nome, telefone
  do visitante, Click URL bruta, query arbitrária ou URL de referência não sanitizada.
- [ ] Cliques anteriores à autorização não reaparecem como conversões depois de aceitar.
- [ ] Repetição rápida não duplica em menos de 1,5 s; ações futuras continuam medindo.
- [ ] Rejeitar após aceitar: atualização negada, recarga, cookies próprios conhecidos
  removidos e nenhuma tag carregada na nova página. Testar escolha parcial também.
- [ ] Preferência persiste entre páginas e visitas; expiração/versão antiga volta
  a pedir autorização. Armazenamento bloqueado não quebra o orçamento.
- [ ] Prévia Lovable nunca envia medição real; bloqueador de anúncios não quebra links.
- [ ] GA4 DebugView confirma nomes e parâmetros; Ads confirma ação/ID/rótulo corretos
  após processamento. Testar atribuição com clique real autorizado, não só evento manual.
- [ ] Uma única origem de conversão principal por ação; telefone secundário;
  nenhum `form_submit` ou clique de saída importado duplicando o WhatsApp.
- [ ] Confirmar verba, regiões, presença geográfica, redes desligadas, termos negativos,
  horários, recursos de chamada, aprovação dos anúncios e revisão da privacidade.

Somente depois dos testes publicar/ativar as campanhas. Diagnósticos do Ads podem
levar tempo para atualizar; bloqueio, recusa e ausência de clique de anúncio podem
explicar falta de atribuição, mas não substituem inspeção das tags. Este repositório
não dá acesso nem executa configurações nas contas Google ou no painel do Lovable.
