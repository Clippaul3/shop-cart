import React from 'react';
import { connect } from 'dva';
//import { getAllProducts } from '../reducers/products';
import ProductList from './ProductList';
import Cart from './Cart';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

class App extends React.Component {
    componentDidMount () {
        const { dispatch } = this.props;

        dispatch({
            type:'products/query'
        });
    }

    render () {
        const { Header, Footer, Sider, Content } = Layout;
        return <div>
        <Layout>
      <Sider >Sider</Sider>
      <Layout>
        <Header><Cart/></Header>
        <Content><ProductList/></Content>
        <Footer></Footer>
      </Layout>
      </Layout>
       
        </div>
    }
}

export default connect()(App);
