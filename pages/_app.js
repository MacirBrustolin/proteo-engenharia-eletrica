import Layout from '../components/Layout'
import '../styles/globals.css'
import firebase from '../firebase/clientApp'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
