# SEO local — JN Pinturas

## Diagnóstico do código

A página original já possuía HTML estático, título, descrição, hierarquia de títulos,
textos alternativos nas imagens, carregamento prioritário do banner e dados estruturados.
Entretanto, não destacava Campinas e Valinhos no título ou no conteúdo principal;
o schema informava atendimento em todo o Brasil e o canonical era apenas `/`.
O repositório não informa o domínio público oficial.

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

## Pendência técnica: confirmar o domínio oficial

Depois de definir onde o site estará publicado:

1. Escolher uma única versão HTTPS do endereço (com ou sem www).
2. Configurar redirecionamentos permanentes das versões alternativas na hospedagem.
3. Adicionar canonical absoluto da página inicial no HTML, incluindo eventual subpasta.
4. Adicionar `og:url` e converter as URLs das imagens sociais e do schema em absolutas.
5. Criar `sitemap.xml` com a URL canônica da página inicial e referenciá-lo em `robots.txt`.
   Âncoras da mesma página não devem ser cadastradas como páginas diferentes.
6. Garantir que `/robots.txt` e `/sitemap.xml` retornem seus arquivos reais, não o HTML
   da página inicial. Isso depende também da configuração da hospedagem.
7. Conferir que o site público responde com HTTP 200 e não possui bloqueio de indexação
   imposto por cabeçalhos HTTP, senha ou configuração da plataforma.

Não foi usado o endereço do repositório GitHub como se fosse o endereço do site.
Não foram adicionados códigos fictícios de verificação ou um sitemap com domínio inventado.

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
