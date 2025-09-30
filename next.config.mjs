import nextra from 'nextra';

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/'
});

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.BASE_PATH ?? '',
  images: {
    unoptimized: true,
  },
});