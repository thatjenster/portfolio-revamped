import Layout from 'Components/Layout'
import 'Styles/globals.css'
import 'Styles/typography.css'
import 'Styles/colors.css'


const App = ({ Component, pageProps }) => {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
