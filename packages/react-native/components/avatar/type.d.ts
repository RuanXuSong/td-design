/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈英杰
 * @Date: 2020-11-25 15:22:33
 * @LastEditors: 陈英杰
 * @LastEditTime: 2020-11-26 18:10:49
 */

export interface AccessoryProps {
  // 图标大小
  size?: number;
  // 使用图片时的值
  url?: string | number;
  // 使用icon是的name
  icon?: iconProps;
  // 使用自定义组件
  component?: ReactNode;
  //挂件垂直方向位置
  top?: boolean;
  //挂件水平方向位置
  left?: boolean;
}
export interface AvatarGroupProps {
  //最大显示数量
  max?: number;
  //头像的间距
  spacing?: number;
  //数量的背景
  backgroundColor?: string;
  //数量的文字的样式
  textStyle?: TextStyle;
}

export interface AvatarProps {
  //点击头像
  onPress?: () => void;
  //点击时的透明度
  activeOpacity?: number;
  // 头像大小
  size?: number;
  //图片路劲
  url?: string | number;
  // 头像弧度
  borderRadius?: number;
  // 标题显示在头像中的文字不能与source一起用
  title?: string;
  //是否为圆形
  circular?: boolean;
  //title时的背景
  backgroundColor?: string;
  //title文字的样式
  textStyle?: TextStyle;
  //容器的样式
  containerStyle?: ViewStyle;
}
