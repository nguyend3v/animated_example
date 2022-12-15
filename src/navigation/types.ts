import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum ScreensName {
  Home = 'Home',
  Settings = 'Settings',
  User = 'User',
}

type RootStackParamList = {
  [ScreensName.Home]: undefined;
  [ScreensName.Settings]: undefined;
  [ScreensName.User]: undefined;
};

type RouteName = keyof RootStackParamList;

type ScreenProps<T extends keyof RootStackParamList, I extends string | undefined = undefined> = NativeStackScreenProps<
  RootStackParamList,
  T,
  I
>;

type RouteList = { name: RouteName }[];

type RootRouteProps<Route extends keyof RootStackParamList> = RouteProp<RootStackParamList, Route>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type { RootStackParamList, RouteName, RouteList, ScreenProps, RootRouteProps };
