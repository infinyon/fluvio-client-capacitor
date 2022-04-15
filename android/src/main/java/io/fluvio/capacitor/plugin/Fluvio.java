package io.fluvio.capacitor.plugin;

import android.util.Log;

public class Fluvio {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
