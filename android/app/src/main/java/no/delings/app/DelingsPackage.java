package no.delings.app;

import no.delings.app.modules.MessengerModule;

import android.app.Activity;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class DelingsPackage implements ReactPackage {

    private final Activity activity;

    public DelingsPackage(Activity activity) {
        this.activity = activity;
    }

    @Override
    public List<NativeModule> createNativeModules(
                                ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
            new MessengerModule(reactContext, activity)
        );
    }

    @Override
    public List<ViewManager> createViewManagers(
                                ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }
}
