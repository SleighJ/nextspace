export const revalidate = 1200; // not necessary, just for ISR demonstration

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async({ params }: Props) => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;
  const  { title, content } = post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default BlogPostPage
