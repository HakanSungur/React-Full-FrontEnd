import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>

      
      <Grid>
        <Grid.Row>
          <GridColumn width="4">
            <Categories />
          </GridColumn>
          <GridColumn width="12">
            {/* exact ile diğer adreslerin ana sayfayı getirmesini önlüyoruz. */}
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route  path="/cart" component={CartDetail} />
            <Route  path="/product/add" component={ProductAdd} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
