import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card, Layout, Spin } from "antd";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from "bizcharts";
import MyComponent from './mycomponent/MyComponent';
import "antd/dist/antd.css";
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const renderChart = resultSet => (
    <Chart height={400} data={resultSet.chartPivot()} forceFit>
      <Coord type="theta" radius={0.75} />
      <Axis name="Zips.count" />
      <Legend position="bottom" name="category" />
      <Tooltip showTitle={false} />
      <Geom type="intervalStack" position="Zips.count" color="x" />
    </Chart>
  );
  
  const cubejsApi = cubejs(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDkzMDk3NzMsImV4cCI6MTU0OTM5NjE3M30.eXEdfUa_ek2V9MlGTpBMOd_AFfs8laaZj8ZsuM1wqqo",
    { apiUrl: "http://localhost:4000/cubejs-api/v1" }
  );
  
  const { Header, Footer, Sider, Content } = Layout;
  
  const App = () => (
    <div>
    <Layout>
      <Header>
        <h2 style={{ color: "#fff" }}>MongoDB Dashboard</h2>
      </Header>
      <Content style={{ padding: "25px", margin: "25px" }}>
        <Row type="flex" justify="space-around" align="top" gutter={24}>
          <Col span={24} lg={12}>
            <Card title="Zip count by state" style={{ marginBottom: "24px" }}>
              <QueryRenderer
                query={{ measures: ["Zips.count"], dimensions: ["Zips.state"] }}
                cubejsApi={cubejsApi}
                render={({ resultSet, error }) =>
                 (resultSet && renderChart(resultSet)) ||
  (error && error.toString()) || <Spin />
                }
                />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
    <MyComponent/>
    </div>
  );
  
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
