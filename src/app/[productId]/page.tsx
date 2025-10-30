// TODO: Export the name of each product as the page title
export function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  console.log(params);
}

export default function Page() {
  return <div>Page</div>;
}
