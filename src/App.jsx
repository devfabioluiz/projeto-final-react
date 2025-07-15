import Header from './components/organism/Header'
import Footer from './components/organism/Footer'
import Newsletter from './components/organism/Newsletter'
import Carousel from './components/organism/Carousel'
import BoxList from './components/molecules/BoxList'
import Promocoes from './components/molecules/Promocoes'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = [
  {
    id: 1,
    titulo: "Cúpula geométrica moderna",
    url: "https://images.openai.com/thumbnails/url/-K6s5Hicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5xcTEu9051rwhNcvEujsq3NDAI1fWJMgqvMtCtCEzJSw8pL9Atq6ryCErUtUzLd3Mr8y0sc3LMrfJRKwYAtKIpHQ",
    fonte: "publicdomainarchive.com"
  },
  {
    id: 2,
    titulo: "Corredor com luz e sombra",
    url: "https://images.openai.com/thumbnails/url/3yuIvXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4KNIuqCncxSAvNrEjydHKNKMquSgo2SPFxtfQoLwiLMCkxc3XPzUrMCIxKK80JiK-KD0lPLcrwtXBXKwYAznApvg",
    fonte: "publicdomainarchive.com"
  },
  {
    id: 3,
    titulo: "Cenotáfio de Newton (Boullée)",
    url: "https://images.openai.com/thumbnails/url/ZGsB83icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7K9kzzdIn3KAkLyM8Ny4mvKjVL8c8wCw83LXQpCfJ1tzANMNQtKsr0tiwoNwx2SsnI8vBMD3Up9_X1d1QrBgAg8Smx",
    fonte: "publicdomainreview.org"
  },
  {
    id: 4,
    titulo: "Escada espiral antiga",
    url: "https://images.openai.com/thumbnails/url/0euEO3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw529givCC7yNiz1DXJ1iXcMLskMykoxNfJL0w3xi3Aty0nMzIkPKCvPMAjLKi8oNvIoTwrP9HPOLcpVKwYAyiAp5w",
    fonte: "picryl.com"
  }
];


const App = () => {
  return (
    <>
      <Header />
    {/* <Carousel slides={SLIDES} options={OPTIONS} /> */}
      <BoxList />
      <Promocoes /> 
      <Newsletter /> 
      <Footer />
    </>
  );
};

export default App;
