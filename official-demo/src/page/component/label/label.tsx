import { Component, PropsWithChildren } from "react";
import {
  View,
  Text,
  Label,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "@tarojs/components";

import "./label.less";

export default class LabelExample extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page">
        <View className="page-section">
          <View className="page-section-title">Checkbox</View>
          <View className="page-section-demo">
            <CheckboxGroup>
              <View>
                <Label>
                  <Checkbox value="AngularJS" />
                  <Text> AngularJS</Text>
                </Label>
              </View>
              <View>
                <Label>
                  <Checkbox value="React" />
                  <Text> React</Text>
                </Label>
              </View>
            </CheckboxGroup>
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">Radio</View>
          <View className="page-section-demo">
            <RadioGroup>
              <View>
                <Radio id="AngularJS" value="AngularJS" />
                <Label for="AngularJS">AngularJS</Label>
              </View>
              <View>
                <Radio id="React" value="React" />
                <Label for="React">React</Label>
              </View>
            </RadioGroup>
          </View>
        </View>

        <View className="page-section">
          <View className="page-section-title">
            Label中有多个 Checkbox ，点击后只选中一个
          </View>
          <View className="page-section-demo">
            <Label>
              <Checkbox value="选中我">选中我</Checkbox>
              <Checkbox value="选中我">选不中</Checkbox>
              <Checkbox value="选中我">选不中</Checkbox>
              <Checkbox value="选中我">选不中</Checkbox>
              <View>
                <Text>Click Me</Text>
              </View>
            </Label>
          </View>
        </View>
      </View>
    );
  }
}
