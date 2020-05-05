/**
 * configurazione di webpack con webpack.config.json
 * dist è quello che andrà al server
 *
 *
 * npm i -D html-loader html-webpack-plugin
 * con questi due file, mi permettera di spostare il file idex.html in dist
 * e anche di incostrare in bounded nell'index (cioe il file js)
 *
 * npm i wepack-dev-server: è il server di development di webpack
 * per aggiornare, simile a nodemon
 * ma la cosa importante è che sta su local e non sul percorso del pc
 * ed esegue l'index.html di dist
 *
 * --open ti apre il browser in automatico
 * --port=8080: di default è quella porta, ma lo puoi cambiare
 *
 * creazione di stili
 * globale e non
 * abbiamo bisogno di questi pacchetti
 * npm i -D css-loader style-loader
 *
 * ti crei un file components.css nella cartella css
 *
 * creazione del style globale
 * style.css in src, funziona ma non crea il file in dist
 * far apparire styles.css in dist, dobbiamo installare
 * npm i -D mini-css-extract-plugin
 * e dopo dobbiamo configurare nel webpack.config.js
 * quando installi qualcosa con plugin, vuoldire che devi fare la configurazione
 *
 * per minimizzare il css cioe per production, non basta metter in mode: production
 * bisogna scaricare un plugin
 * npm i -D optimize-css-assets-webpack-plugin
 * ma ancora non mi carica l'immagine
 * dobbiamo installare un altro pacchetto
 * npm i -D file-loader
 *
 * ce bisogno di altro pacchetto
 * npm i copy-webpack-plugin -D
 * ci permette di fare questo
 * import img from "./assets/smile.jpg";
 *
 * "build": "webpack"
 * npm run build esegue in automatico webpack.config.js
 * ma puoi usare qualsiasi file in questo modo:
 * "build": "webpack --config webpack.config.prod.js"
 *
 * semihash
 *  filename: "main.abc.js",
 * si modifica ogni volta che faccio un build
 * serve perche cosi non rimane nel cache del cliente e permetta di fare l'aggiornamento
 * ma di solito si fa con:
 * o filename: "main.[contenHash].js"
 *
 * adesso facciamo la stessa cosa con css
 *
 * perche il nostro sia accettabile da tutti lo dobbiamo mettere
 * in linguaggio ECMAScript5 e lo facciamo con babel
 * https://babeljs.io/setup#installation
 * npm install --save-dev babel-loader @babel/core
 *
 * inserendo nel webpack questa regola
 * { test: /\.js$/, exclude: /node_modules/,
 * use["babel-loader"]
 *
 * ma abbiamo bisogno anche di creare il file .babelrc, quindi ci serve un pacchetto
 * di solito è questo
 * npm install @babel/preset-env --save-dev
 * ma andando alla configurazione del file
 * https://babeljs.io/docs/en/config-files/
 * ce il pachetto preset-minify in
 * https://babeljs.io/docs/en/babel-preset-minify
 *  e installiamo quello
 * npm install babel-preset-minify --save-dev
 * e lo configuriamo il file
 * {
  "presets": ["minify"]
}
 * facciamo npm run build, e cerchiamo la parola const e ancora non l'ha convertito
 * ma il codice è offuscato ma ci sono i commenti
 * usiamo un altro pacchetto (non lo devi fare sempre, se crei un progetto, prendi tutta la configurazione)
 * npm install babel-minify-webpack-plugin --save-dev
 * e lo configuriamo in webpack
 * const MinifyPlugin = require("babel-minify-webpack-plugin");
 * new MinifyPlugin()
 * npm run build e mi fa in ambiente di produzione cioè minimizzato
 * ma ce ancora const
 * per eliminare, dobbiamo installare un altro pachetto
 * babel-preset-env
 * e per utilizzarlo lo dobbiamo configurare nel file di babel ".babelrc"
 *  "@babel/preset-env",
 * npm run build e sparisce const
 * 
 * per pulire la cartella dist lo puoi fare in diversi modi:
 * rm -rf dist && webpack
 * o con un pachetto di webpack
 * npm i clean-webpack-plugin -D
 * e poi lo configuriamo nel file di webpack
 * ma io preferisco la riga di commando, cosi evitiamo di mettere tanti pachetti
 * il vantaggio dle plugin che se non fai nessun cambio, non ti cancella la cartella e/o file
 * 
 * git checkout -- . //comando git per ritornare indietro
 * 
 * non serve seguire cioè inviare a git le cartelle
 * dist e node_modules
 * su github pages possiamo mettere il nostro sito web finche sia html, js, css
 * 
 * git remote add origin https://github.com/fabianex87/wepackConfiguration.git
 * aggiungi un origine remoto al nostro repositorio
 * cioè i nostri cambi andranno a quell'url
 * git push -u origin master
 * carica tutti i miei cambi all'origine cioè a quell'url
 * origin è una maniera per identifiare il repositorio
 * -u stabilisce origin come il mio repositorio nel cloud per default
 * quindi una volta fatto quello, le prossime volte devi fare solo:
 * git push
 * al fare git push ti puo apparire l'alert di git
 * 
 */
