import { Component, PropsWithChildren } from 'react';
import { View, Navigator } from '@tarojs/components';
import clsx from 'clsx';
import './index.less';

interface BlockListProps {
  listData: any[];
  className?: string;
  onItemTap?:(args:{name:string})=>void
}

export default class BlockList extends Component<PropsWithChildren<BlockListProps>> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onItemTap(name:string) {
    const { onItemTap } = this.props;
    if (onItemTap) {
      onItemTap({ name });
    }
  }

  render() {
    const { listData, className } = this.props;
    return (
      <View className={clsx('block-list-container', className)}>
        <View className="block-list">
          {listData.map((item) => {
            return (
              <>
                {item.url ? (
                  <Navigator url={item.url}>
                    <View className="block-item" onClick={this.onItemTap.bind(this,item.name)}>
                      {item.name}
                    </View>
                  </Navigator>
                ) : (
                  <View className="block-item" onClick={this.onItemTap.bind(this,item.name)}>
                    {item.name}
                  </View>
                )}
              </>
            );
          })}
        </View>
      </View>
    );
  }
}
