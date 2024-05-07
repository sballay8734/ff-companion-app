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
      style={{ borderLeftColor: 'green' }}
      renderLeadingIcon={() => (
        <AntDesign
          name="checkcircle"
          size={24}
          color="green"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'green',
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
      style={{ borderLeftColor: 'red' }}
      renderLeadingIcon={() => (
        <AntDesign
          name="closecircle"
          size={24}
          color="red"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'red',
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
      style={{ borderLeftColor: 'blue' }}
      renderLeadingIcon={() => (
        <AntDesign
          name="infocirlce"
          size={24}
          color="blue"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'blue',
      }}
    />
  ),

  // Custom warning type
  warning: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: '#fcba03' }}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={24}
          color="#fcba03"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: '#fcba03',
      }}
    />
  ),

  // Additional custom type if needed
  customToast: (props: ToastShowParams) => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: 'purple' }}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={24}
          color="purple"
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'purple',
      }}
    />
  ),
};
