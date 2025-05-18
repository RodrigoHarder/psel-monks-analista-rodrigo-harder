import styles from './App.module.scss'
import { Album } from './components/Album'
import { ImageCards } from './components/image-cards'
import { Header } from './components/Header'
import { PromoApp } from './components/promo-app'
import { Tags } from './components/tags'
import { TextCards } from './components/text-cards'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <ImageCards />
        <Album />
        <PromoApp />
        <Tags />
        <TextCards/>
      </main>
      <Footer/>
    </>
  )
}

export default App
