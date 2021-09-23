import Head from "next/head";
import BreadCrumbs from "../../../../components/expressPage/BreadCrumbs";
import ExpressHeader from "../../../../components/generalComponents.js/ExpressHeader";
import ProductDescription from "../../../../components/expressPage/ProductDescription";

function Product() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Portal || Shop </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/MM_Logo.png" />
      </Head>
      <ExpressHeader portal />
      <BreadCrumbs title="Home" subTitle="Product Decsription" href="/portal" />
      <ProductDescription />
    </div>
  );
}

export default Product;