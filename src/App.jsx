import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNews} from './newsSlice';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';



export default function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);



  return (
    <>
      <Navbar />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <News articles={articles} />}
      <Footer />
    </>
    
  )
}