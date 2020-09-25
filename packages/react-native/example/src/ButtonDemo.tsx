import React from 'react';
import { Button, WhiteSpace } from '@td-design/react-native';

export default () => {
  return (
    <>
      <Button title="大按钮" size="large" type="primary" />
      <WhiteSpace />
      <Button title="中按钮" size="middle" type="primary" onPress={() => console.log(2)} />
      <WhiteSpace />
      <Button title="小按钮" size="small" type="primary" onPress={() => console.log(3)} />
      <WhiteSpace />
      <Button title="圆按钮" size="small" type="primary" shape="round" onPress={() => console.log(4)} />
      <WhiteSpace />
      <Button title="默认线框样式" onPress={() => console.log(5)} />
      <WhiteSpace />
      <Button title="link 样式" type="link" onPress={() => console.log(6)} />
      <WhiteSpace />
      <Button title="text 样式" type="text" onPress={() => console.log(7)} />
      <WhiteSpace />
      <Button title="ripple 样式" type="ripple" onPress={() => console.log(8)} />
      <WhiteSpace />
      <Button disabled title="primary 禁用" type="primary" onPress={() => console.log(9)} />
      <WhiteSpace />
      <Button disabled title="线框禁用" onPress={() => console.log(10)} />
      <WhiteSpace />
      <Button disabled title="text禁用" type="text" onPress={() => console.log(11)} />
      <WhiteSpace />
      <Button disabled title="link禁用" type="link" onPress={() => console.log(12)} />
      <WhiteSpace />
      <Button
        title="背景渐变"
        backgroundColor={['secondaryColor', 'primaryColor']}
        type="primary"
        onPress={() => console.log(13)}
      />
      <WhiteSpace />
      <Button
        title="自定义渐变"
        backgroundColor={['secondaryColor', 'primaryColor']}
        type="primary"
        onPress={() => console.log(14)}
        linearGradientProps={{
          start: { x: 1, y: 0 },
          end: { x: 0, y: 1 },
          colors: ['#F49E81', '#FFDD94'],
        }}
      />
      <WhiteSpace />
      <Button
        title="背景渐变禁用"
        disabled
        backgroundColor={['secondaryColor', 'primaryColor']}
        type="primary"
        onPress={() => console.log(15)}
      />
      <WhiteSpace />
      <Button title="loading 按钮" loading type="primary" onPress={() => console.log(16)} />
      <WhiteSpace />
      <Button title="线框 loading" loading />
      <WhiteSpace />
      <Button title="link loading" type="link" loading />
      <WhiteSpace />
      <Button onPress={() => console.log(17)}>children 写法</Button>
    </>
  );
};
