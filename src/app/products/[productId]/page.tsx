import { Metadata } from "next";
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
type Props = {
  params: {
    productId: string;
  };
};
export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about the product {params.productId}</h1>;
}
