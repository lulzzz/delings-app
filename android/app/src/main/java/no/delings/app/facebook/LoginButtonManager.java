package no.delings.app.facebook;

import com.facebook.login.widget.LoginButton;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.ArrayList;
import java.util.List;

public class LoginButtonManager extends SimpleViewManager<LoginButton> {

    public static final String REACT_CLASS = "RCTFacebookLoginButtonAndroid";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public LoginButton createViewInstance(ThemedReactContext context) {
        return new LoginButton(context);
    }

    @Override
    public void updateExtraData(LoginButton root, Object props) {
        super.updateExtraData(root, props);

        List<String> permissions= new ArrayList<String>();
        permissions.add("user_friends");
        permissions.add("email");
        root.setReadPermissions(permissions);

        root.setWidth(200);
        root.setHeight(75);
    }
}
