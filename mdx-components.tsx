import { MDXComponents } from 'mdx/types';
import { HTMLAttributes } from 'react';

const components = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadElement>) => (
    <h1 style={{ color: 'tomato' }} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadElement>) => (
    <h2 style={{ color: 'blue' }} {...props}>
      {children}
    </h2>
  ),
} satisfies MDXComponents;

declare global {
  type MDXProvidedComponents = typeof components;
}
// eslint-disable-next-line no-undef
export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
