import { MDXComponents } from 'mdx/types';

const components = {
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
} satisfies MDXComponents;

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
