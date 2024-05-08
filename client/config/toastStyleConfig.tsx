import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastProps,
  ToastShowParams,
} from 'react-native-toast-message';

const padding = 15;

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '#57ff47',
        backgroundColor: '#242636',
        borderColor: '#3b3e57',
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="checkcircle"
          size={24}
          color="#57ff47"
          style={{
            display: 'flex',
            alignSelf: 'center',
            paddingLeft: padding,
          }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#57ff47',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#ff4255',
        backgroundColor: '#242636',
        borderColor: '#3b3e57',
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="closecircle"
          size={24}
          color="#ff4255"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#ff4255',
      }}
    />
  ),
  /*
    Overwrite 'info' type,
    by modifying the existing `ErrorToast` component
  */
  info: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: '#597dff',
        backgroundColor: '#242636',
        borderColor: '#3b3e57',
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="infocirlce"
          size={24}
          color="#597dff"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#597dff',
      }}
    />
  ),

  // Custom warning type
  warning: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: '#fff945',
        backgroundColor: '#242636',
        borderColor: '#3b3e57',
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={24}
          color="#fff945"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#fff945',
      }}
    />
  ),

  // Additional custom type if needed
  customToast: (props: ToastShowParams) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: '#ed66ff',
        backgroundColor: '#242636',
        borderColor: '#3b3e57',
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={24}
          color="#ed66ff"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#ed66ff',
      }}
    />
  ),
};
