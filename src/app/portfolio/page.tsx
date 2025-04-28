import { Column, Flex, Heading } from "@/once-ui/components";
import { Posts } from "@/components/portfolio/Posts";
import { baseURL } from "@/app/resources";
import { portfolio, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = portfolio.title;
  const description = portfolio.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            headline: portfolio.title,
            description: portfolio.description,
            url: `https://${baseURL}/portfolio`,
            image: `${baseURL}/og?title=${encodeURIComponent(portfolio.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {portfolio.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
