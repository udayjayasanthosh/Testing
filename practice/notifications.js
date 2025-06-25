import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export default function AutoNotification() {
  useEffect(() => {
    const scheduleDailyNotification = async () => {
      if (!Device.isDevice) {
        Alert.alert("Error", "Must use a physical device for push notifications.");
        return;
      }

      // Request notification permissions
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Enable notifications in settings.");
        return;
      }

      // Clear old notifications to prevent duplicates
      await Notifications.cancelAllScheduledNotificationsAsync();

      // Get current date and set 4:27 PM for today
      let now = new Date();
      let triggerTime = new Date();
      triggerTime.setHours(16, 27, 0, 0); // Set to 4:27 PM (16:27:00)

      // If current time is already past 4:27 PM, schedule for tomorrow
      if (now > triggerTime) {
        triggerTime.setDate(triggerTime.getDate() + 1);
      }

      // Schedule notification
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🔔 Reminder!",
          body: "This is your notification at 4:27 PM.",
          sound: "default",
        },
        trigger: {
          // Use the date object for daily notifications
          date: triggerTime,
          repeats: true, // Ensures it repeats daily
        },
      });

      console.log(`Notification scheduled for ${triggerTime}`);
    };

    scheduleDailyNotification();
  }, []);

  return <View />;
}