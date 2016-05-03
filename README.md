# DelingsApp

## Setup
Follow these guides:
- https://facebook.github.io/react-native/docs/getting-started.html#content
- https://facebook.github.io/react-native/docs/android-setup.html#content

Run this command (only once):
```
npm install -g react-native-cli
```

## Build
Installing dependencies:
- `cd delings-app`
- `npm install`

Starting the app on Android:
- `react-native run-android`

Starting the app on iOS:
- `react-native run-ios`

## Release
Follow these guides:
- https://facebook.github.io/react-native/docs/signed-apk-android.html#content
- https://developers.facebook.com/docs/android/getting-started/#release-key-hash

Generate a release key hash for Facebook:
```
keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64
```

*Do not enable Proguard without extensive testing.*

Generating the release APK on Android:
- `cd android`
- `./gradlew assembleRelease`

Testing the release build on Android:
- `cd android`
- `./gradlew installRelease`

Use HockeyApp for distribution.
