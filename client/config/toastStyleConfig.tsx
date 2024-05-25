import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastProps,
  ToastShowParams,
} from 'react-native-toast-message';

const padding = 15;
const backgroundColor = '#1e2a3b'; // base100
const borderColor = '#374254';

const successBorderLeftColor = '#2dd4bf'; // success
const successTextColor = '#2dd4bf'; // success
const successIconColor = '#2dd4bf'; // success

const errorBorderLeftColor = '#fb7085'; // error
const errorTextColor = '#fb7085'; // error
const errorIconColor = '#fb7085'; // error

const infoBorderLeftColor = '#0ba5e9'; // info
const infoTextColor = '#0ba5e9'; // info
const infoIconColor = '#0ba5e9'; // info

const warningBorderLeftColor = '#f4bf50'; // warning
const warningTextColor = '#f4bf50'; // warning
const warningIconColor = '#f4bf50'; // warning

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  // TODO: Screen shouldn't be clickable while toast is shown (Maybe)

  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: successBorderLeftColor,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="checkcircle"
          size={24}
          color={successIconColor}
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
        color: successTextColor,
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
        borderLeftColor: errorBorderLeftColor,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="closecircle"
          size={24}
          color={errorIconColor}
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      renderTrailingIcon={() => (
        <View style={styles.trailingIconContainer}>
          <TouchableOpacity onPress={() => Toast.hide()}>
            <AntDesign name="close" size={20} color="#374254" style={styles.trailingIcon} />
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: errorTextColor,
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
        borderLeftColor: infoBorderLeftColor,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="infocirlce"
          size={24}
          color={infoIconColor}
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      renderTrailingIcon={() => (
        <View style={styles.trailingIconContainer}>
          <TouchableOpacity onPress={() => Toast.hide()}>
            <AntDesign name="close" size={20} color="#374254" style={styles.trailingIcon} />
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: infoTextColor,
      }}
    />
  ),

  // Custom warning type
  warning: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{
        borderLeftColor: warningBorderLeftColor,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      }}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={24}
          color={warningIconColor}
          style={{ display: 'flex', alignSelf: 'center', paddingLeft: padding }}
        />
      )}
      renderTrailingIcon={() => (
        <View style={styles.trailingIconContainer}>
          <TouchableOpacity onPress={() => Toast.hide()}>
            <AntDesign name="close" size={20} color="#374254" style={styles.trailingIcon} />
          </TouchableOpacity>
        </View>
      )}
      contentContainerStyle={{
        paddingHorizontal: padding,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: warningTextColor,
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
      renderTrailingIcon={() => (
        <View style={styles.trailingIconContainer}>
          <TouchableOpacity onPress={() => Toast.hide()}>
            <AntDesign name="close" size={20} color="#3b3e57" style={styles.trailingIcon} />
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
  trailingIconContainer: {
    // backgroundColor: 'red',
    height: '80%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    borderLeftWidth: 1,
    borderLeftColor: '#374254',
  },
  trailingIcon: {},
});
