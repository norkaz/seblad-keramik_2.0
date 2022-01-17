import React from "react";
import { Helmet } from "react-helmet";
import { siteData } from "../data/site/sitedata";
import { useLocation } from "react-router-dom";
import { products } from "../data/products/products";
import Structure from "../components/structure/Structure";
import Grid from "../components/gridLayout/grid/Grid";
import Widget from "../components/gridLayout/widget/Widget";

export default function OrderConfirmation() {
  let location = useLocation();
  const articleId = location.pathname.substring(20);
  const getProductById = (_id) => products.find(({ id }) => id === _id);
  const product = getProductById(articleId);
  return (
    <>
      <Helmet>
        <title>{siteData.name} - Tack för ditt meddelande </title>
        <meta property="og:type" content="content-page" />
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      </Helmet>
      <Structure>
        <Grid>
          <Widget>
            <div className="text-box">
              <h1>Beställning av {product.name} är gjord</h1>
              <p>
                Vi kommer kontakta dig angående leverans och lagersaldo samt
                övriga frågor.
              </p>
            </div>
          </Widget>
        </Grid>
      </Structure>
    </>
  );
}
