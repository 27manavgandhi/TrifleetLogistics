import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getPost, getRelatedPosts } from '@/lib/constants/blog';
import { constructMetadata } from '@/lib/constants/site';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, blogPostingSchema } from '@/lib/schema';
import { CtaSection } from '@/components/sections/CtaSection';
import { BlogArticle } from '@/components/sections/home/BlogArticle';
import { images } from '@/lib/constants/images';

const blogImages: Record<string, string> = {
  'ftl-vs-ptl-choosing-the-right-logistics-mode': images.truckHighway2,
  'india-toll-and-permit-guide-for-transporters': images.truckNightWheels,
  'building-a-24-7-control-room': images.controlRoom4,
  'fleet-maintenance-for-uptime': images.forkliftWarehouse,
  'cold-chain-pharma-transport-essentials': images.reeferTrucks,
  'future-of-logistics-technology-in-india': images.controlRoom6,
  'reducing-logistics-cost-without-cutting-corners': images.warehouseTruckDock,
  'sustainable-logistics-practices': images.truckSunset,
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return constructMetadata({ title: 'Article Not Found', path: '/blog' });
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author.name],
    tags: post.tags,
  });
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(params.slug, 3);
  const image = blogImages[post.slug] ?? images.truckHighway3;

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]), blogPostingSchema(post)]} />
      <BlogArticle post={post} related={related} image={image} />
      <CtaSection title="Put these insights to work" highlight="Talk to TriFleet about how we can apply this thinking to your freight and your lanes." />
    </>
  );
}
