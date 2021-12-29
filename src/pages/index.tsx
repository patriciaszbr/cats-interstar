import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

interface Category {
  id: number;
  name: string;
}

interface Data {
  breeds:[];
  id: string;
  url:string;
  width:number;
  height:number;
}

  const Home: NextPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [data, setData] = useState<Data[]>([]);

  const getCategories = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/categories');
    const categories: Category[] = await response.json();
    setCategories(categories);
  };

  const getImages = async (categoryId: number) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${categoryId}`
    );
    const data: Data[] = await response.json();
    setData(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getImages(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      <nav className={styles.category}>
        {categories?.map(category => (
          <p 
            onClick={() => setSelectedCategory(category.id)} 
            key={category.id}
            className={selectedCategory === category.id ? styles.active : ''}
          >
            {category.name}
          </p>
        ))}
      </nav>
      
      <main className={styles.main}>
        <div className={styles.images}>
          {data?.map(item => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.url} alt={`Gatinhos - ${item.id}`} key={item.id} />
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={() => getImages(selectedCategory)}>Cats Reload</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
