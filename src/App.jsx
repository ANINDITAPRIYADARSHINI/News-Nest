import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';



export default function App() {

  const [content, setContent] = React.useState([])
  const [active, setActive] = React.useState(1)
  const [category, setCategory] = React.useState("general")


  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=676679172889468eb61d7745e93052cc`)
    .then(res => res.json())
    .then(data => setContent(data.articles))
  }, [category])


  return (
    <>
      <Navbar />
      <News content={content} />
      <Footer />
    </>
    
  )
}