import {
  TouchableWithoutFeedbackProps,
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleProp,
  TextStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React from 'react';

export const UnstyledButton: React.FC<TouchableWithoutFeedbackProps> = props => {
  const { children, style, ...other } = props;
  return Platform.select({
    ios: (
      <TouchableOpacity style={style} {...other} activeOpacity={other.onPress ? 0.7 : 1}>
        <React.Fragment>{children}</React.Fragment>
      </TouchableOpacity>
    ),
    android: (
      <TouchableNativeFeedback {...other}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    ),
    default: (
      <TouchableOpacity style={style} {...other} activeOpacity={other.onPress ? 0.7 : 1}>
        <React.Fragment>{children}</React.Fragment>
      </TouchableOpacity>
    ),
  });
};

export const Button: React.FC<
  TouchableWithoutFeedbackProps & {
    title: string;
    titleStyles?: StyleProp<TextStyle>;
  }
> = ({ style, title, titleStyles, ...props }) => (
  <UnstyledButton style={[styles.btn, style]} {...props}>
    <Text style={titleStyles}>{title}</Text>
  </UnstyledButton>
);

export const ImageButton: React.FC<
  TouchableWithoutFeedbackProps & {
    source: ImageSourcePropType;
    iconStyle?: StyleProp<ImageStyle>;
  }
> = ({ children, source, iconStyle, ...props }) => (
  <UnstyledButton {...props}>
    <Image style={iconStyle} source={source} />
    {children}
  </UnstyledButton>
);

const styles = StyleSheet.create({
  btn: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#F1F3F6',
    borderRadius: 4,
  },
});
