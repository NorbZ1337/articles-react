import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from './Articles.module.scss';

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div style={{ padding: '20px 40px' }}>
      <Header />
      <h1>Articles</h1>

      {loading && 'Loading...'}

      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a href="/">Read now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
