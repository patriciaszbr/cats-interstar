import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

type Data = {
  breeds:[];
  id: string;
  url:string;
  width:number;
  height:number;
};

const Home: NextPage = () => {
  const [data, setData] = useState<Data[]>([]);

  const getImage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}images/search`);
    console.log({response});
    
    const data: Data[] = await response.json();
    setData(data);
    console.log({data});
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    
    <div className={styles.container}>
      
      <img src={data[0]?.url} alt="Gatinhos"/> 
      <p>{data[0]?.width}</p>
      <p>{data[0]?.height}</p>


      </div>
  )
}

export default Home
