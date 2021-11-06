import React, { Component } from 'react';
import { Route } from 'react-router';
import Products from '../Products/Products';
import Details from '../Details/Details';
import Cart from '../Cart/Cart';



class Section extends React.Component {
    render() {
        return (
            <React.Fragment>
               <section>
                   <Route path="/" component={Products} exact />
                   <Route path="/Product/:id" component={Details}  />
                   <Route path="/Cart" component={Cart}  />
               </section>
            </React.Fragment>

        );
    }
}

export default Section;