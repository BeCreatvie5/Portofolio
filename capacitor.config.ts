import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'website',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
