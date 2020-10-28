---
title: "[Capacitor Tutorial] Convert react app into Android/ios app"
date: "2020-07-10"
draft: false
path: "/blog/capacitor"
---

### what is the Capacitor?
A capacitor is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android, and the web. We call these apps "Native Progressive Web Apps" and they represent the next evolution beyond Hybrid apps.

Within five command line, we can convert any react app into Native progressive app

<b> note </b>: This tutorial won't work if your app is using any hardware device(eg. storage, GPS, Camera, etc.). Implementation of Hardware devices requires additional Plugins.

Prerequisite-:
* Node
* Npm
* Android-Studio/Xcode
* Code Editor

So let's get started by creating a sample react project<br />
`npx create-react-app demo - use-npm`

To implement a capacitor we require to install its core dependency and cli


`npm install - save @capacitor/core @capacitor/cli`


Now run below command this will ask you App Name and package name (package name should com.nameofPackge.com) after that it will create a capacitor.config file

`npx cap init`


Open your capacitor.config file change www to build

<b>"webDir" : "www" - - - > "webDir" : "build" </b>

Then run the build command

`npm run build`

Add the platform you want to add for your application, running below command create packages for Android, ios and electron

`npx cap add android`

`npx cap add ios`

`npx cap add electron`

then run, below command will trigger Android Studio/Xcode, it will automatically build your project
```
npx cap open android  //or
npx cap open ios      //or
npx cap open electron
```

how to implement Live reloading/ Hot Reloading ?

run npm start, copy the URL on which your app is running in capacitor.config.json
```
"server": {
 "url": "http://192.168.42.88:8100"
 //Place your App URL on which your Application is running
 }
```
Now open android->app->src->main->AndroidManifest.xml and add this line

`android:usesCleartextTraffic="true"`
Now Application Tag looks like this

```
<application
android:usesCleartextTraffic="true" //Line added
android:allowBackup="true"
android:icon="@mipmap/ic_launcher"
android:label="@string/app_name"
android:roundIcon="@mipmap/ic_launcher_round"
android:supportsRtl="true"
android:theme="@style/AppTheme">
```
run 
Then execute the final Command

`npm run build`

To test this execute npm start and npx cap open android in two different terminals, now the application is ready to develop
Note: when your application is completed remove the server address
Thank You!