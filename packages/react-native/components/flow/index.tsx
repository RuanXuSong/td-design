import React, { FC, useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import Step from './step';
import { px } from '../helper';

const Flow: FC<FlowProps> = ({ steps = [], size = px(36), current = 0, status = 'process', height }) => {
  /**当前容器的宽度，用于计算线的长度 */
  const [wrapWidth, setWrapWidth] = useState<number>(0);

  /** icon或者自定义组件的总长度，用于计算线的长度 */
  const iconWidth = steps.reduce((pre, cur) => {
    const iconWidth = (cur.size ?? size) + px(4);
    return pre + iconWidth;
  }, 0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setWrapWidth(e.nativeEvent.layout.width);
  };
  /** 单条线的长度 */
  const tailWidth = (wrapWidth - iconWidth) / (steps.length - 1);

  return (
    <View style={{ flexDirection: 'row', height: height }} onLayout={handleLayout}>
      {steps.map((item, i) => {
        return (
          <Step
            key={i}
            last={i === steps.length - 1}
            size={size}
            active={current > i}
            status={current === i + 1 ? status : undefined}
            isCurrent={current === i + 1}
            {...Object.assign(item, {
              tailWidth: tailWidth,
            })}
          />
        );
      })}
    </View>
  );
};

export default Flow;
