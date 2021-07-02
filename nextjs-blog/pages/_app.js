
/*
グローバルCSSはこのコンポーネントで読み込んで利用する

*/

import '../styles/global.css'

const App = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default App;