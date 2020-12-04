import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

const Products = (props) => {
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
  const res = await fetch("https://morgan-shop.herokuapp.com/")
  const products = await res.json();

  return { props: {products: products, hello: "world"} };
};
