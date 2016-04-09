package no.delings.app.facebook;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import com.facebook.messenger.MessengerUtils;
import com.facebook.messenger.MessengerThreadParams;
import com.facebook.messenger.ShareToMessengerParams;
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

    private final boolean isPicking;

    public MessengerModule(ReactApplicationContext reactContext) {
        super(reactContext);

        // If we received Intent.ACTION_PICK from Messenger, we were launched from a composer shortcut
        // or the reply flow.

        // Intent intent = getCurrentActivity().getIntent();
        //
        // if (Intent.ACTION_PICK.equals(intent.getAction())) {
        //     isPicking = true;
        //
        //     MessengerThreadParams threadParams = MessengerUtils.getMessengerThreadParamsForIntent(intent);
        //     String metadata = threadParams.metadata;
        //     List<String> participantIds = threadParams.participants;
        // } else {
        //     isPicking = false;
        // }
        isPicking = false;
    }

    @Override
    public String getName() {
        return "FacebookMessengerAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        return new HashMap<String, Object>(){{
            put(MIME_TYPE_IMAGE_JPEG, "image/jpeg");
            put(MIME_TYPE_IMAGE_GIF, "image/gif");
            put(MIME_TYPE_IMAGE_PNG, "image/png");
            put(MIME_TYPE_IMAGE_WEBP, "image/webp");
            put(MIME_TYPE_VIDEO_MP4, "video/mp4");
            put(MIME_TYPE_AUDIO_MP3, "audio/mpeg");
        }};
    }

    @ReactMethod
    public void shareToMessenger(
            final String contentUri,
            final String mimeType,
            final String metadata) {

        // contentUri points to the content being shared to Messenger
        Uri uri = Uri.parse(contentUri);

        ShareToMessengerParams shareToMessengerParams =
            ShareToMessengerParams.newBuilder(uri, mimeType)
                .setMetaData(metadata)
                .build();

        Activity currentActivity = getCurrentActivity();
        if (isPicking) {

            // If we were launched from Messenger, we call MessengerUtils.finishShareToMessenger to return
            // the content to Messenger.
            MessengerUtils.finishShareToMessenger(
                currentActivity,
                shareToMessengerParams);
        } else {

            // Otherwise, we were launched directly (for example, user clicked the launcher icon). We
            // initiate the broadcast flow in Messenger. If Messenger is not installed or Messenger needs
            // to be upgraded, this will direct the user to the play store.
            MessengerUtils.shareToMessenger(
                currentActivity,
                REQUEST_CODE_SHARE_TO_MESSENGER,
                shareToMessengerParams);
        }
    }
}
