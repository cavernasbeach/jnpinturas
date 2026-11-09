# SEO local — JN Pinturas

## Diagnóstico do código

A página original já possuía HTML estático, título, descrição, hierarquia de títulos,
textos alternativos nas imagens, carregamento prioritário do banner e dados estruturados.
Entretanto, não destacava Campinas e Valinhos no título ou no conteúdo principal;
o schema informava atendimento em todo o Brasil e o canonical era apenas `/`.
O domínio oficial informado pelo proprietário é https://www.jnpinturas.com.br/.
As URLs do código foram atualizadas; isso não conecta o domínio à hospedagem nem publica o site.

Esta análise se limita aos arquivos: não foram medidos tráfego, posição no Google,
Core Web Vitals, respostas HTTP da hospedagem ou a indexação atual.

## Ajustes implementados

- Título e descrição específicos para pintura em Campinas e Valinhos.
- H1, introdução de serviços, contato e rodapé com contexto regional.
- Conteúdo próprio para cada cidade, com links de orçamento pelo WhatsApp.
- Dúvidas visíveis sobre preço, contratação, economia e disponibilidade.
- Uso contextual de “pintor agora”, “pintor barato”, “pintor barato em Campinas”
  e “pintor barato em Valinhos”, sem repetição artificial ou promessas de menor preço.
- Dados estruturados `HousePainter`, com telefone e as duas cidades atendidas.
- Metadados de compartilhamento alinhados ao conteúdo local.
- Permissão de rastreamento em `robots.txt` e de indexação no HTML.
- Remoção de `meta keywords`, que não é usada pelo Google para classificação.
- Remoção do canonical relativo que apontava para a raiz sem identificar o domínio.

Os dados estruturados descrevem o serviço; não garantem resultados enriquecidos.
Não foram criados endereço físico, horários, avaliações, preços ou fotos de obras reais.
As perguntas frequentes atendem ao visitante; sites de pintura não são elegíveis
para os resultados enriquecidos de FAQ reservados pelo Google a sites de saúde
ou governamentais reconhecidos.

## Domínio oficial e publicação

O endereço canônico é **https://www.jnpinturas.com.br/**. O HTML já inclui canonical,
`og:url`, URLs absolutas das imagens sociais e do schema, além da identificação da empresa.
O arquivo `sitemap.xml` contém a página inicial e as cinco páginas de destino e está
referenciado em `robots.txt`. Âncoras da mesma página não são páginas separadas no sitemap.

A publicação e a conexão DNS dependem das contas do proprietário; não foram executadas
por uma alteração no repositório. Para concluir pelo Lovable:

1. Abrir o projeto no Lovable e usar **Publish / Publicar** para publicar a versão atual.
2. Na configuração de domínios do projeto, adicionar **www.jnpinturas.com.br**.
3. No provedor que administra o DNS, cadastrar exatamente os registros e valores
   exibidos pelo Lovable, incluindo eventual verificação. Não adivinhar IPs ou CNAMEs.
   Alterar apenas registros relacionados ao site; preservar os registros de e-mail.
4. Aguardar a verificação do domínio e a emissão do certificado HTTPS pela plataforma.
5. Conectar também **jnpinturas.com.br**, se disponível, e configurar na hospedagem
   o redirecionamento permanente da versão sem www para **https://www.jnpinturas.com.br/**.
6. Conferir que a página responde com HTTP 200 e que `/robots.txt` e `/sitemap.xml`
   entregam os arquivos reais, não o HTML inicial. Caso a plataforma não os publique
   nesses caminhos, ajustar a entrega de arquivos estáticos na hospedagem.
7. Confirmar ausência de bloqueio por senha, cabeçalho HTTP ou configuração da plataforma.

Não foram adicionados códigos fictícios de verificação nem registros DNS presumidos.
A propagação do DNS e o certificado devem ser acompanhados no painel da plataforma.

## Ações na conta do proprietário

### Google Search Console

- Verificar a propriedade do domínio pelo DNS, ou usar a verificação disponível
  para uma propriedade de prefixo de URL.
- Enviar o sitemap após sua criação e publicação.
- Inspecionar a URL pública e solicitar indexação uma vez após as alterações.
- Acompanhar “Indexação de páginas”, “Desempenho” e “Core Web Vitals”.
- Medir cliques, impressões e consultas por cidade; não apenas uma posição isolada.

### Perfil da Empresa no Google

- Criar ou reivindicar o perfil verdadeiro da JN Pinturas e concluir a verificação.
- Usar a categoria disponível mais adequada ao serviço de pintor, com telefone e site
  consistentes com a página, além das áreas reais de atendimento.
- Se o negócio atende no imóvel do cliente e não recebe público no endereço,
  configurar como empresa de área de serviço, sem exibir endereço residencial.
- Publicar fotos reais, serviços e horários verdadeiros.
- Solicitar avaliações espontâneas de clientes reais, sem compra ou incentivo condicionado.

### Conteúdo e confiança

- Substituir gradualmente as imagens ilustrativas por fotos autorizadas de serviços reais.
- Acrescentar relatos reais de obras, cidade, escopo do serviço e resultados, com autorização.
- Não criar páginas quase idênticas para muitas cidades ou textos ocultos com palavras-chave.
- Manter telefone, nome e site consistentes em perfis e diretórios legítimos.
- Avaliar o site publicado no PageSpeed Insights em celular antes de decidir ajustes de desempenho.

## Reforço de SEO nesta revisão

- Descrição da busca mais concisa e alinhada ao conteúdo da página.
- Dados estruturados em um grafo que conecta o site, a página, a empresa,
  as cidades atendidas e o catálogo de seis serviços com o mesmo prestador.
- Contato para orçamentos associado ao telefone e WhatsApp já exibidos na página.
- Sem endereço, preços, horários, avaliações ou certificações inventados.
  O schema descreve a empresa, mas não garante elegibilidade para resultados
  enriquecidos de negócio local, que possuem requisitos próprios do Google.
- Permissão explícita para prévias de imagens grandes e trechos de texto e vídeo,
  sujeita à decisão do mecanismo de busca.
- Preload da imagem principal, mantendo a prioridade alta existente para iniciar
  sua transferência mais cedo. O impacto real deve ser medido no site publicado.
- Texto alternativo da imagem no compartilhamento pelo Twitter/X.
- Novas perguntas visíveis em “Dúvidas sobre pintura e orçamento” sobre prazo,
  massa corrida e cuidados com umidade, sem prometer solução de infiltrações.
- Canonical, sitemap e robots preservados no domínio oficial com www.

### Checklist de ativação e acompanhamento no Google

1. Publicar as alterações e concluir a conexão do domínio com HTTPS no Lovable.
   Definir www como principal e configurar o redirecionamento permanente das
   demais versões na hospedagem; o canonical sozinho não faz redirecionamentos.
2. Abrir https://search.google.com/search-console/ e adicionar a propriedade de
   domínio `jnpinturas.com.br`. Publicar no DNS o TXT exato fornecido pelo Google
   e concluir a verificação; nenhum código fictício foi adicionado ao site.
3. Em “Sitemaps”, enviar `https://www.jnpinturas.com.br/sitemap.xml` após conferir
   que esse endereço entrega XML e que `/robots.txt` entrega texto no site público.
4. Inspecionar `https://www.jnpinturas.com.br/`, executar o teste da URL publicada
   e solicitar indexação. Não é necessário repetir a solicitação diariamente.
5. Criar ou atualizar o Perfil da Empresa em https://www.google.com/business/.
   Confirmar categoria, áreas de serviço, telefone, site e informações reais.
   A presença no mapa depende desse perfil, não apenas do código do site.
6. Validar a página pública no Schema Markup Validator e no teste de resultados
   avançados do Google. Ter schema válido não garante recursos visuais na busca.
7. Medir a versão móvel em https://pagespeed.web.dev/ e acompanhar no Search
   Console cliques, impressões, consultas e páginas indexadas ao longo das semanas.
   Consultas iniciais de interesse: “pintor em Campinas”, “pintor em Valinhos”,
   “pintura de apartamento em Campinas” e “pintura residencial em Valinhos”.

Esta revisão foi feita nos arquivos do repositório. Não foram executados testes
HTTP, de desempenho ou de resultados avançados, nem acessadas as contas Google
ou as configurações de publicação/DNS do proprietário.

## Páginas de destino para Pesquisa do Google Ads e SEO local

A etapa de páginas de destino acrescenta cinco documentos HTML independentes, com
conteúdo disponível sem JavaScript. O projeto é estático: cada URL corresponde a
uma pasta com `index.html`, sem depender de rotas de React ou de um banco de dados.
Os links internos e os canonicals usam a versão com barra final.

| URL de destino | Intenção e conteúdo específico |
|---|---|
| `https://www.jnpinturas.com.br/pintor-em-campinas/` | Contratar pintor em Campinas; escopo, imóvel ocupado, acesso e orçamento |
| `https://www.jnpinturas.com.br/pintura-residencial-valinhos/` | Pintura residencial em Valinhos; troca de cores, superfícies internas e externas |
| `https://www.jnpinturas.com.br/pintor-em-paulinia/` | Contratar pintor em Paulínia; preparação da base, altura e condições de acesso |
| `https://www.jnpinturas.com.br/pintura-residencial-hortolandia/` | Renovação em Hortolândia; mudança, imóvel ocupado e entrega de chaves |
| `https://www.jnpinturas.com.br/pintura-de-apartamentos/` | Serviço de apartamentos; regras do condomínio, proteção, vistoria e cronograma |

Cada página possui título, descrição e canonical próprios, Open Graph, um H1,
perguntas frequentes específicas, links para as outras páginas e dados estruturados
`WebPage`, `Service` e `BreadcrumbList`. Não foram criadas avaliações, preços,
endereços físicos ou certificações. As imagens existentes continuam identificadas
como ilustrativas, não como prova de trabalhos realizados.

A página inicial agora apresenta as quatro cidades em “Onde atendemos”, com links
para as páginas detalhadas e para pintura de apartamentos. O banner, os metadados,
o contato, o rodapé e as áreas do prestador no schema acompanham a abrangência
regional solicitada. O sitemap contém seis URLs ao todo.

Os botões abrem o WhatsApp existente com mensagens contextualizadas por cidade ou
serviço; existe um botão fixo nas páginas novas e telefone clicável na seção final.
Esse comportamento não configura uma conversão no Google Ads. Cliques não comprovam
que uma conversa foi enviada, um orçamento foi solicitado ou um contrato foi fechado.

### Validação obrigatória na hospedagem antes de anunciar

1. Publicar a alteração e abrir cada uma das cinco URLs diretamente, além de navegar
   pelos links de “Onde atendemos” na página inicial. Recarregar cada página para
   confirmar que ela entrega o documento correto, com HTTP 200, e não a página inicial.
2. Confirmar o carregamento de `/css/style.css`, `/css/landing.css`, `/js/main.js` e
   das imagens em cada URL, inclusive em celular. A hospedagem precisa publicar as
   pastas estáticas; se aplicar fallback de página única, ajustar a publicação para
   servir cada `index.html`. Não usar uma URL que ainda não entregue a página correta
   como destino de anúncio.
3. Verificar a entrega de XML no sitemap e reenviá-lo ao Search Console. Inspecionar
   as cinco URLs e solicitar indexação. O Google decide se e quando indexar.
4. Testar os links de WhatsApp e telefone, conferir o número e a mensagem por origem.
   Confirmar as cidades e a disponibilidade real de atendimento antes da veiculação.
5. Validar dados estruturados e desempenho nas ferramentas do Google após publicar.

Esta etapa não acessa contas Google, não cria nem ativa campanhas, não instala tags
de medição e não configura o Perfil da Empresa. A próxima etapa do plano trata da
preparação de conversões e das campanhas; a ativação depende dos identificadores
reais e das configurações nas contas do proprietário. Não foram realizados testes
HTTP, de navegador, de desempenho ou de publicação a partir deste acesso.

## Expectativas

Nenhuma configuração garante a primeira página ou um prazo de indexação. O Google
controla o rastreamento e a classificação, considerando concorrência, relevância,
qualidade, reputação e localização. As mudanças melhoram a base técnica e o conteúdo;
a publicação, a confirmação do domínio e as ações nas contas Google continuam necessárias.
