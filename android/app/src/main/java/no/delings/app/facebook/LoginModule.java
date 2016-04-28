package no.delings.app.facebook;

import android.app.Activity;
import android.content.Intent;
import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.Profile;
import com.facebook.ProfileTracker;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LoginModule extends ReactContextBaseJavaModule
        implements ActivityEventListener {

    private static final String PERMISSION_PROFILE = "PROFILE";
    private static final String PERMISSION_FRIENDS = "FRIENDS";
    private static final String PERMISSION_EMAIL = "EMAIL";
    private static final String PERMISSION_PUBLISH = "PUBLISH";

    private final CallbackManager callbackManager;

    public LoginModule(ReactApplicationContext reactContext) {
        super(reactContext);

        reactContext.addActivityEventListener(this);
        callbackManager = CallbackManager.Factory.create();
    }

    @Override
    public String getName() {
        return "FacebookLoginAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        return new HashMap<String, Object>(){{
            put(PERMISSION_PROFILE, "public_profile");
            put(PERMISSION_FRIENDS, "user_friends");
            put(PERMISSION_EMAIL, "email");
            put(PERMISSION_PUBLISH, "publish_actions");
        }};
    }

    @Override
    public void onActivityResult(
            final int requestCode,
            final int resultCode,
            final Intent data) {
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }

    @ReactMethod
    public void logIn(final Promise promise) {
        AccessToken accessToken = AccessToken.getCurrentAccessToken();

        if (accessToken != null) {
            Profile profile = Profile.getCurrentProfile();
            promise.resolve(getProfileAsMap(profile));
            return;
        }

        registerLoginCallback(promise);
        logInWithReadPermissions(Arrays.asList(
            getConstants().get(PERMISSION_PROFILE)
        ));
    }

    @ReactMethod
    public void logInWithReadPermissions(
            final ReadableArray permissions,
            final Promise promise) {
        registerLoginCallback(promise);
        // logInWithReadPermissions(permissions.toArrayList());
        logInWithReadPermissions(getPermissionsAsList(permissions));
    }

    @ReactMethod
    public void logInWithPublishPermissions(
            final ReadableArray permissions,
            final Promise promise) {
        registerLoginCallback(promise);
        // logInWithPublishPermissions(permissions.toArrayList());
        logInWithPublishPermissions(getPermissionsAsList(permissions));
    }

    @ReactMethod
    public void logOut(final Promise promise) {
        LoginManager.getInstance().logOut();
        promise.resolve("Du er nå logget ut");
    }

    private void registerLoginCallback(final Promise promise) {
        LoginManager.getInstance().registerCallback(callbackManager,
                new FacebookCallback<LoginResult>() {

            private ProfileTracker profileTracker;

            @Override
            public void onSuccess(LoginResult loginResult) {
                profileTracker = new ProfileTracker() {
                    @Override
                    protected void onCurrentProfileChanged(
                            Profile oldProfile,
                            Profile currentProfile) {
                        if (currentProfile != null) {
                            promise.resolve(getProfileAsMap(currentProfile));
                        }
                        // Will not be called when re-confirming current login!
                        this.stopTracking();
                    }
                };
            }

            @Override
            public void onCancel() {
                promise.resolve("login cancelled");
            }

            @Override
            public void onError(FacebookException exception) {
                promise.reject(exception);
            }
        });
    }

    private List<String> getPermissionsAsList(ReadableArray permissions) {
        List<String> permissionsList = new ArrayList<String>();
        if (permissions != null && permissions.size() > 0) {
            for (int i = 0; i < permissions.size(); i++) {
                if (permissions.getType(i).name() == "String") {
                    String permission = permissions.getString(i);
                    permissionsList.add(permission);
                }
            }
        }
        return permissionsList;
    }

    private WritableMap getProfileAsMap(Profile profile) {
        final WritableMap profileMap = Arguments.createMap();
        if (profile != null) {
            profileMap.putString("id", profile.getId());
            profileMap.putString("first_name", profile.getFirstName());
            profileMap.putString("middle_name", profile.getMiddleName());
            profileMap.putString("last_name", profile.getLastName());
            profileMap.putString("name", profile.getName());
            profileMap.putString("link_uri", profile.getLinkUri().toString());
        }
        return profileMap;
    }

    private void logInWithReadPermissions(List permissions) {
        Activity currentActivity = getCurrentActivity();

        LoginManager.getInstance().logInWithReadPermissions(
            currentActivity,
            permissions);
    }

    private void logInWithPublishPermissions(List permissions) {
        Activity currentActivity = getCurrentActivity();

        LoginManager.getInstance().logInWithPublishPermissions(
            currentActivity,
            permissions);
    }
}
