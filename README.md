# Fórum Adrenaline — redesign

Implementação inicial do redesign a partir do arquivo Figma.

## Stack
React + TypeScript + Vite + React Router + Lucide React

## Desenvolvimento
npm install
npm run dev

## Build
npm run build

## Estado da integração Figma
O MCP expõe diretamente a página 📱 Protótipo Mobile e o frame 240:2 — forum_perfil. Essa tela foi convertida em uma rota funcional /perfil, incluindo navegação inferior e estado básico de seguir.

As páginas 🖥️ Protótipo Desktop, 🎨 Elementos Visuais e ✏️ Sitemap e Outros Rascunhos aparecem no documento, mas o MCP retorna essas páginas sem nós-filhos neste momento. Elas não foram inventadas no código.

Os assets binários são identificados pelo Figma, mas os URLs fornecidos pelo MCP são temporários e não puderam ser materializados pelo ambiente atual. Nenhum URL temporário foi gravado como dependência permanente.
