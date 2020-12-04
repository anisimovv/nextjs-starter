import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

interface Props {}

const Products = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <section>
        <ul>
          {props.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/")
  const products = await res.json();

  return { props: {products: products, hello: "world"} };
};
