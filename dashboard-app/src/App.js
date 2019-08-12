import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Layout, Spin, Statistic, Table } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from "bizcharts";
import moment from "moment";
import { Line, Bar, Pie } from "react-chartjs-2";

const AppLayout = ({ children }) => (
  <Layout>
    <Layout.Header>
      <div
        style={{
          float: "left"
        }}
      >
        <h2
          style={{
            color: "#fff",
            margin: 0,
            marginRight: "1em"
          }}
        >
          My Dashboard
        </h2>
      </div>
    </Layout.Header>
    <Layout.Content
      style={{
        padding: "0 25px 25px 25px",
        margin: "25px"
      }}
    >
      {children}
    </Layout.Content>
  </Layout>
);

const Dashboard = ({ children }) => (
  <Row type="flex" justify="space-around" align="top" gutter={24}>
    {children}
  </Row>
);

const DashboardItem = ({ children, title }) => (
  <Col span={24} lg={12}>
    <Card
      title={title}
      style={{
        marginBottom: "24px"
      }}
    >
      {children}
    </Card>
  </Col>
);

const stackedChartData = resultSet => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ", "),
        color: resultSet.axisValuesString(yValues, ", "),
        measure: m && Number.parseFloat(m)
      }))
    )
    .reduce((a, b) => a.concat(b));
  return data;
};

const areaRender = ({ resultSet }) => (
  <Chart
    scale={{
      x: {
        tickCount: 8
      }
    }}
    height={400}
    data={stackedChartData(resultSet)}
    forceFit
  >
    <Axis name="x" />
    <Axis name="measure" />
    <Tooltip
      crosshairs={{
        type: "y"
      }}
    />
    <Geom type="areaStack" position={`x*measure`} size={2} color="color" />
  </Chart>
);

const API_URL = "http://localhost:4000";
const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjU2MDgyMzEsImV4cCI6MTU2NTY5NDYzMX0.TS33FGNoq5XiDfo5_HyrxgDZxHLkOrVACJlhb7aNSh0",
  {
    apiUrl: API_URL + "/cubejs-api/v1"
  }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

const COLORS_SERIES = ["#FF6492", "#141446", "#7A77FF"];

const pieRender = ({ resultSet }) => {
  const data = {
    labels: resultSet.categories().map(c => c.category),
    datasets: resultSet.series().map(s => ({
      label: s.title,
      data: s.series.map(r => r.value),
      backgroundColor: COLORS_SERIES,
      hoverBackgroundColor: COLORS_SERIES
    }))
  };
  const options = {};
  return <Pie data={data} options={options} />;
};

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Dashboard>
          <DashboardItem>
            <QueryRenderer
              query={{
                measures: ["Orders.count"],
                timeDimensions: [],
                filters: []
              }}
              cubejsApi={cubejsApi}
              render={renderChart(areaRender)}
            />
          </DashboardItem>
          <DashboardItem>
            <QueryRenderer
              query={{
                measures: ["Orders.totalAmount", "Orders.count"],
                timeDimensions: [],
                filters: []
              }}
              cubejsApi={cubejsApi}
              render={renderChart(pieRender)}
            />
          </DashboardItem>
        </Dashboard>
      </AppLayout>
    </div>
  );
}

export default App;
