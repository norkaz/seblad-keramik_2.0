import React from "react";
import Product from "../../../components/controls/product/Product";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { siteData } from "../../../data/site/sitedata";

export default function ProductPage(props) {
  let location = useLocation();
  const id = location.pathname.substring(18);
  const splat = id || null;
  if (splat == null) {
    return (
      <>
        <Helmet>
          <title>{siteData.name} - Sidan kunde hittas </title>
          <meta property="og:type" content="404" />
        </Helmet>
        <p>Ingen produkt hittades</p>
      </>
    );
  } else {
    return <Product splat={splat} />;
  }
}
