import { useEffect, useState } from 'react'
import HitList from './components/hit-list/HitList';
import { getNews } from "./services/news.services";
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({
    page: 0,
    totalPage: 0,
    hits: [],
  });

  useEffect(() => {
    getNews().then((data) => {
      setData({
        hits: data.hits,
        totalPage: data.nbPages,
        page: data.page,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dinh Gia Huy</h1>

      <HitList hits={data.hits} />
    </div>
  );
}

export default App;
