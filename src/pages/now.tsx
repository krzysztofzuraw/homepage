import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const Now: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now" />
      <article className="prose slashed-zero tabular-nums">
        <h1>What I'm doing now</h1>
        <p>
          Make sure to check out <Link to="https://nownownow.com/">nownownow.com</Link> for a list
          of everyone’s <code className="language-text">/now</code> pages!
        </p>
        <ul>
          <li>Taking break from twitter</li>
          <li>Recovering from RSI in my right hand</li>
          <li>Reading books & magazines</li>
          <li>Working on this website</li>
          <li>Learning to type using Colemak DH layout</li>
        </ul>
        <time dateTime="2021-02-27">Last updated on 2020-02-27</time>
      </article>
    </Layout>
  );
};

export default Now;
