export interface IntegrationApp {
  id: string;
  name: string;
  desc: string;
}

export const INTEGRATION_APPS: IntegrationApp[] = [
  { id: 'teams', name: 'Microsoft Teams', desc: 'Collaboration & unified chat' },
  { id: 'gmail', name: 'Gmail', desc: 'Business email & communication' },
  { id: 'loom', name: 'Loom', desc: 'Video feedback & communication' },
  { id: 'meet', name: 'Google Meet', desc: 'Seamless video meetings' },
  { id: 'outlook', name: 'Microsoft Outlook', desc: 'Email & schedule management' },
];
