'use client';

import { MDXProvider } from '@mdx-js/react';
import Content from './message.mdx';

const H1 = (props) => <h1 style={{ color: 'tomato' }} {...props} />;
const H2 = (props) => <h2 style={{ color: 'rebeccapurple' }} {...props} />;

export default function Home() {
  return (
    <MDXProvider
      components={{
        h1: H1,
        h2: H2,
      }}
    >
      <Content />
    </MDXProvider>
  );
}
