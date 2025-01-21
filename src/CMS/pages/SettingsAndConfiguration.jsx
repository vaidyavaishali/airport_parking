import React, { useState } from "react";
import Sidebar from "../Sidebar";

const SettingsAndConfiguration = () => {
  const [paymentSettings, setPaymentSettings] = useState({
    gatewayName: "",
    apiKey: "",
    apiSecret: "",
  });

  const [smtpSettings, setSmtpSettings] = useState({
    host: "",
    port: "",
    encryption: "",
    from: "",
    name: "",
    username: "",
    password: "",
    testEmail: "",
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSmtpChange = (e) => {
    const { name, value } = e.target;
    setSmtpSettings((prev) => ({ ...prev, [name]: value }));
  };

  const savePaymentSettings = () => {
    console.log("Payment Gateway Settings:", paymentSettings);
    // Add your API call here to save payment settings
  };

  const saveSmtpSettings = () => {
    console.log("SMTP Settings:", smtpSettings);
    // Add your API call here to save SMTP settings
  };

  const sendTestEmail = () => {
    console.log("Sending Test Email to:", smtpSettings.testEmail);
    // Add your API call here to send a test email
  };

  return (
    <Sidebar>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Settings and Configuration</h1>

        {/* Payment Gateway Integration */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Payment Gateway Integration
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gateway Name
              </label>
              <input
                type="text"
                name="gatewayName"
                value={paymentSettings.gatewayName}
                onChange={handlePaymentChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter gateway name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                API Key
              </label>
              <input
                type="text"
                name="apiKey"
                value={paymentSettings.apiKey}
                onChange={handlePaymentChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter API key"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                API Secret
              </label>
              <input
                type="text"
                name="apiSecret"
                value={paymentSettings.apiSecret}
                onChange={handlePaymentChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter API secret"
              />
            </div>
            <button
              onClick={savePaymentSettings}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Settings
            </button>
          </div>
        </div>

        {/* SMTP Configuration */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">SMTP Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Host
              </label>
              <input
                type="text"
                name="host"
                value={smtpSettings.host}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="smtp@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Port
              </label>
              <input
                type="number"
                name="port"
                value={smtpSettings.port}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="587"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Encryption
              </label>
              <select
                name="encryption"
                value={smtpSettings.encryption}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Encryption</option>
                <option value="SSL">SSL</option>
                <option value="TLS">TLS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="email"
                name="from"
                value={smtpSettings.from}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="from@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={smtpSettings.name}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={smtpSettings.username}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="username@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={smtpSettings.password}
                onChange={handleSmtpChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>
            <button
              onClick={saveSmtpSettings}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Settings
            </button>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Test Email
            </label>
            <input
              type="email"
              name="testEmail"
              value={smtpSettings.testEmail}
              onChange={handleSmtpChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="test@example.com"
            />
            <button
              onClick={sendTestEmail}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SettingsAndConfiguration;
