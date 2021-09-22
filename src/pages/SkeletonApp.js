import React, { useEffect, useState } from 'react';

import { Card } from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import { Header } from '../components/Header';
import { SkeletonCard } from '../components/SkeletonCard';
import { Wrapper } from '../components/Wrapper';

import { posts } from '../utils/data';

export const SkeletonApp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    let loadingTime = setTimeout(() => {
      setData(posts);
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loadingTime);
    };
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <CardContainer>
          {loading && posts.map((post) => <SkeletonCard key={post.title} />)}
          {!loading && data.map((post) => <Card key={post.title} {...post} />)}
        </CardContainer>
      </Wrapper>
    </>
  );
};
