// include this line for mocking react-native-gesture-handler
import React from 'react'
import 'react-native-size-matters'
import 'react-native-calendar-strip';
import 'react-native-incall-manager';
import 'react-native-date-picker'
import 'react-native-location'
import 'react-native'
import 'react-native-twilio-video-webrtc';
import '@react-native-async-storage/async-storage'

jest.mock('react-native-gesture-handler', () => {
});
jest.mock('react-native-size-matters', () => ({
    moderateScale: () => jest.fn(),
    scale: () => jest.fn(),
    verticalScale: () => jest.fn()
}));
jest.mock('react-native-date-picker', () => ({

}))
jest.mock('react-native-version-number', () => ({

}))
jest.mock('react-native-fast-image', () => ({

}))
//
jest.mock('react-native', () => ({
    useWindowDimensions: () => jest.fn(),
    Platform: ({ select: () => ({}) }),
    StyleSheet: {
        create: () => ({})
    },
    NativeModules: {
        TestConnectNative: () => ({})
    },
    Dimensions: ({ get: () => ({}) }),
    AppState: {
        currentState: 'active',
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
    },
}))
//react-native-gifted-chat'
jest.mock('react-native-elements', () => ({

}))
//react-native-stopwatch-timer'
jest.mock('react-native-incall-manager', () => { })
jest.mock('react-native-calendar-strip', () => { })
jest.mock('react-native-twilio-video-webrtc', () => { })
jest.mock('@react-native-async-storage/async-storage', () => { })
jest.mock('@react-native-firebase/messaging', () => ({}))
jest.mock('react-native-material-textfield', () => ({}))
jest.mock('react-native-device-info', () => ({
    hasNotch: () => jest.fn()
}))
jest.mock('react-native-stopwatch-timer', () => ({
}))
jest.mock('@react-native-community/checkbox', () => ({
}))
jest.mock('react-native-countdown-circle-timer', () => ({
}))
jest.mock('react-native-skeleton-placeholder', () => ({
}))
jest.mock('react-native-gifted-chat', () => ({
}))
jest.mock('react-native-image-picker', () => ({
}))
jest.mock('react-native-callkeep', () => ({
}))
jest.mock('react-native-voip-push-notification', () => ({
}))
jest.mock('react-native-location', () => ({
    configure: jest.fn(),
}))
jest.mock('react-native-version-check', () => ({
}))
jest.mock('react-native-background-geolocation', () => ({
}))
jest.mock('react-native-background-timer', () => ({
}))
jest.mock('@notifee/react-native', () => ({
}))
jest.mock('react-native-modal', () => ({
}))
jest.mock('react-native-simple-radio-button', () => ({
}))

jest.mock('react-native-event-listeners', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    removeAllListeners: jest.fn(),
}));
jest.mock('react-native-timeline-flatlist', () => ({
}))
jest.mock('react-native-dialog', () => ({
}))
jest.mock('react-native-material-dropdown', () => ({
}))
jest.mock('react-native-picker-select', () => ({
}))
jest.mock('react-native-linear-gradient', () => { });