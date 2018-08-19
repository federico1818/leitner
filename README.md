# Leitner

```console
    curl https://fcm.googleapis.com/fcm/send \
     -H "Content-Type: application/json" \
     -H "Authorization: key=your-messaging-SERVER-key" \
     -d '{ "notification": {"title": "Test title", "body": "Test Body", "click_action" : "https://angularfirebase.com"},"to" : "fcmToken_from_firebase"}'
```