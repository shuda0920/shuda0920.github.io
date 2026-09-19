import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
await build({entryPoints:['src/main.jsx'],bundle:true,minify:true,jsxFactory:'h',inject:['src/i18n/runtime.jsx'],outfile:'js/portfolio.js',loader:{'.js':'jsx'},define:{'process.env.NODE_ENV':'"production"'}});
execFileSync(process.execPath,['node_modules/@tailwindcss/cli/dist/index.mjs','-i','src/style.css','-o','css/portfolio.css','--minify'],{stdio:'inherit'});
