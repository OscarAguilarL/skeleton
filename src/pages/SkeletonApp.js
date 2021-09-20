import React from 'react';

import { Card } from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import { Header } from '../components/Header';
import { Wrapper } from '../components/Wrapper';

import { posts } from '../utils/data';

export const SkeletonApp = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <CardContainer>
          {posts.map((post) => (
            <Card key={post.title} {...post} />
          ))}
        </CardContainer>
      </Wrapper>
    </>
  );
};
