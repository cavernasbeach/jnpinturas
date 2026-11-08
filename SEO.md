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
O arquivo `sitemap.xml` contém a página inicial e está referenciado em `robots.txt`.
Âncoras da mesma página não são páginas separadas no sitemap.

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

## Expectativas

Nenhuma configuração garante a primeira página ou um prazo de indexação. O Google
controla o rastreamento e a classificação, considerando concorrência, relevância,
qualidade, reputação e localização. As mudanças melhoram a base técnica e o conteúdo;
a publicação, a confirmação do domínio e as ações nas contas Google continuam necessárias.
