# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## LIEN DU GUIDE DE LA CREATION DE TELEMGRAM MINI APP (TMA)
https://docs.ton.org/v3/guidelines/dapps/tma/tutorials/app-examples 

## Configuration d'un bot pour l' application
https://docs.ton.org/v3/guidelines/dapps/tma/tutorials/step-by-step-guide#setting-up-a-bot-for-the-app

## LIEN DE LA DOCUMENTATION DE NGROK
https://dashboard.ngrok.com/get-started/setup/windows

## Nous devons ajouter @vitejs/plugin-basic-sslun plugin :
npm install @vitejs/plugin-basic-ssl

## Maintenant, nous devons changer vite.config.ts. Ajouter l'importation :
import basicSsl from '@vitejs/plugin-basic-ssl';

## Et ajoutez le plugin
export default defineConfig({
   plugins: [react(), basicSsl()]
});

## COMMAND POUR LANCER LE SERVEUR
npm run dev --host

## Vous pouvez utiliser ngrokpour exposer votre serveur local à Internet avec un certificat SSL.
ngrok http 5173

## COMMANDES POUR PUSHER LE PROJET SUR GITHUB
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<votre_nom_utilisateur>/<nom_du_dépôt>.git
git push -u origin main
## FIN COMMANDES POUR PUSHER LE PROJET SUR GITHUB