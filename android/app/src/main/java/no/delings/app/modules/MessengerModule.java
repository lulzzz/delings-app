package no.delings.app.modules;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import com.facebook.messenger.MessengerUtils;
import com.facebook.messenger.MessengerThreadParams;
import com.facebook.messenger.ShareToMessengerParams;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

public class MessengerModule extends ReactContextBaseJavaModule {

    private static final String MIME_TYPE_IMAGE_JPEG = "IMAGE_JPEG";
    private static final String MIME_TYPE_IMAGE_GIF = "IMAGE_GIF";
    private static final String MIME_TYPE_IMAGE_PNG = "IMAGE_PNG";
    private static final String MIME_TYPE_IMAGE_WEBP = "IMAGE_WEBP";
    private static final String MIME_TYPE_VIDEO_MP4 = "VIDEO_MP4";
    private static final String MIME_TYPE_AUDIO_MP3 = "AUDIO_MP3";

    // This is the request code that the SDK uses for startActivityForResult. See the code below
    // that references it. Messenger currently doesn't return any data back to the calling
    // application.
    private static final int REQUEST_CODE_SHARE_TO_MESSENGER = 1;

    private final Activity activity;
    private final boolean isPicking;

    public MessengerModule(
            ReactApplicationContext reactContext,
            Activity activity) {
        super(reactContext);
        this.activity = activity;

        // If we received Intent.ACTION_PICK from Messenger, we were launched from a composer shortcut
        // or the reply flow.
        Intent intent = activity.getIntent();

        if (Intent.ACTION_PICK.equals(intent.getAction())) {
            isPicking = true;
            MessengerThreadParams mThreadParams = MessengerUtils.getMessengerThreadParamsForIntent(intent);

            String metadata = mThreadParams.metadata;
            List<String> participantIds = mThreadParams.participants;
        } else {
            isPicking = false;
        }
    }

    @Override
    public String getName() {
        return "MessengerAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(MIME_TYPE_IMAGE_JPEG, "image/jpeg");
        constants.put(MIME_TYPE_IMAGE_GIF, "image/gif");
        constants.put(MIME_TYPE_IMAGE_PNG, "image/png");
        constants.put(MIME_TYPE_IMAGE_WEBP, "image/webp");
        constants.put(MIME_TYPE_VIDEO_MP4, "video/mp4");
        constants.put(MIME_TYPE_AUDIO_MP3, "audio/mpeg");
        return constants;
    }

    @ReactMethod
    public void shareToMessenger(
            String contentUri,
            String mimeType,
            String metadata) {

        // contentUri points to the content being shared to Messenger
        Uri uri = Uri.parse(contentUri);

        ShareToMessengerParams shareToMessengerParams =
            ShareToMessengerParams.newBuilder(uri, mimeType)
                .setMetaData(metadata)
                .build();

        if (isPicking) {

            // If we were launched from Messenger, we call MessengerUtils.finishShareToMessenger to return
            // the content to Messenger.
            MessengerUtils.finishShareToMessenger(activity, shareToMessengerParams);
        } else {

            // Otherwise, we were launched directly (for example, user clicked the launcher icon). We
            // initiate the broadcast flow in Messenger. If Messenger is not installed or Messenger needs
            // to be upgraded, this will direct the user to the play store.
            MessengerUtils.shareToMessenger(
                activity,
                REQUEST_CODE_SHARE_TO_MESSENGER,
                shareToMessengerParams);
        }
    }
}
