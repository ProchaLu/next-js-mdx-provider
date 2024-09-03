'use client';

import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import { HTMLAttributes } from 'react';
import Content from './message.mdx';

const components = {
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadElement>) => (
    <h3 style={{ color: 'purple' }} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: HTMLAttributes<HTMLHeadElement>) => (
    <h4 style={{ color: 'yellow' }} {...props}>
      {children}
    </h4>
  ),
} satisfies MDXComponents;

export default function MDXComponent() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
}
