import { Component, PropsWithChildren } from "react";
import { View, Table, TableColumn } from "@tarojs/components";
import "./index.less";

export default class Index extends Component<PropsWithChildren> {
  state = {
    dataSource: (() => {
      const result = [] as any[];
      for (let i = 0; i < 5; i++) {
        result.push({
          id: 100306660940 + i,
          time: 2000 + i,
        });
      }
      return result;
    })(),
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { dataSource } = this.state;
    return (
      <View>
        <Table dataSource={dataSource}>
          <TableColumn title="Id" dataIndex="id" />
          <TableColumn title="Time" dataIndex="time" />
        </Table>
      </View>
    );
  }
}
