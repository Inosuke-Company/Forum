# Fórum Adrenaline — redesign

Aplicação React/TypeScript baseada no redesign disponível no Figma.

## Stack
React + TypeScript + Vite + React Router + Lucide React.

## Desenvolvimento
`npm install`
`npm run dev`

## Build
`npm run build`

## O que foi extraído do Figma
A inspeção do MCP encontrou a página `📱 Protótipo Mobile` com múltiplos frames, incluindo:
- `forum_home` — `223:737` e `378:25`
- `forum_pesquisa_resultado` — `413:2`
- `notificações` — `346:2`
- menus `tres-pontinhos`
- `forum_feed` — `333:77`
- `forum_membros` — `324:2`
- fluxos `forum_novo tópico` / `forum_novo`
- `forum_resposta` — `302:176`
- `forum_perfil` — `240:2`
- telas de pesquisa `232:11408` e variantes.

Esses IDs foram usados como inventário de telas para orientar a implementação. O MCP atingiu o limite de chamadas do plano Starter durante a rodada de extração de contextos de alta fidelidade; por isso, não foi correto inventar detalhes visuais das telas cujo design-context completo não pôde ser recuperado.

## Comportamento
A aplicação deixou de ser apenas um conjunto de mockups:
- navegação real entre as telas;
- pesquisa funcional;
- criação de tópico com persistência em `localStorage`;
- abertura de tópico e formulário de resposta;
- feed e membros;
- notificações;
- menus de contexto;
- perfil existente do Figma ligado à navegação.

## Assets
Nenhuma URL temporária do Figma é usada como dependência permanente. Os assets binários do Figma ainda precisam ser materializados localmente quando o MCP permitir a transferência.

## Próxima etapa
Recuperar os `get_design_context` restantes após a janela de limite do MCP e fazer a validação visual tela a tela, substituindo aproximações por componentes e assets exatos do Figma.