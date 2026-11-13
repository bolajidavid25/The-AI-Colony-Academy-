"use client";

import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function NotificationsTab() {
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  function handleUnsubscribeAll() {
    setSecurityAlerts(false);
    setEmailNotifications(false);
    setPushNotifications(false);
    setNotificationMsg("Unsubscribed from optional notifications.");
    setTimeout(() => setNotificationMsg(null), 3000);
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <h2 className="text-sm font-bold text-[#154535]">Notification</h2>

      {/* Main Settings Card */}
      <div className="rounded-[20px] bg-[#F9F9F9] p-6 sm:p-8">
        {/* ── Notifications Header ── */}
        <div>
          <h3 className="text-sm font-bold text-[#154535]">Notifications</h3>
          <p className="mt-0.5 text-xs text-[#94A3B8]">
            You will get only notification what have enabled.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Row 1: Security Alerts ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="pr-4">
            <h4 className="text-sm font-bold text-[#154535]">Security Alerts</h4>
            <p className="mt-0.5 text-xs text-[#94A3B8]">
              You will get only those email notification what you want.
            </p>
            <p className="mt-4 text-xs text-[#94A3B8]">
              Email me whenever encounter unusual activity
            </p>
          </div>
          <div className="pt-1">
            <ToggleSwitch
              checked={securityAlerts}
              onChange={setSecurityAlerts}
              ariaLabel="Security alerts toggle"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Row 2: Email Notifications ── */}
        <div className="flex items-center justify-between gap-4">
          <div className="pr-4">
            <h4 className="text-sm font-bold text-[#154535]">
              Email Notifications
            </h4>
            <p className="mt-0.5 text-xs text-[#94A3B8]">
              Receive email updates about your activity
            </p>
          </div>
          <div>
            <ToggleSwitch
              checked={emailNotifications}
              onChange={setEmailNotifications}
              ariaLabel="Email notifications toggle"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Row 3: Push Notifications ── */}
        <div className="flex items-center justify-between gap-4">
          <div className="pr-4">
            <h4 className="text-sm font-bold text-[#154535]">
              Push Notifications
            </h4>
            <p className="mt-0.5 text-xs text-[#94A3B8]">
              Receive email updates about your activity
            </p>
          </div>
          <div>
            <ToggleSwitch
              checked={pushNotifications}
              onChange={setPushNotifications}
              ariaLabel="Push notifications toggle"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-b border-[#E2E8F0]" />

        {/* ── Unsubscribe & Footer note ── */}
        <div>
          <button
            type="button"
            onClick={handleUnsubscribeAll}
            className="cursor-pointer text-xs font-semibold text-[#FF5D2A] underline hover:text-[#e54f1f]"
          >
            Unsubscribe from all of the above
          </button>
          {notificationMsg && (
            <p className="mt-1 text-xs font-medium text-[#31CA92] animate-in fade-in">
              {notificationMsg}
            </p>
          )}

          <p className="mt-2 text-xs text-[#94A3B8]">
            Please note: you&apos;ll still receive important administrative
            emails,such as password resets.
          </p>
        </div>
      </div>
    </div>
  );
}
