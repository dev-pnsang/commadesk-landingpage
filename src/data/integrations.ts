export interface IntegrationApp {
  id: string;
  name: string;
  desc: string;
  descVi?: string;
  descEn?: string;
}

export const INTEGRATION_APPS: IntegrationApp[] = [
  {
    id: 'teams',
    name: 'Microsoft Teams',
    desc: 'Collaboration & unified chat',
    descVi: 'Hợp tác & trò chuyện hợp nhất đa kênh',
    descEn: 'Collaboration & unified chat',
  },
  {
    id: 'gmail',
    name: 'Gmail',
    desc: 'Business email & communication',
    descVi: 'Thư điện tử doanh nghiệp & thông báo tự động',
    descEn: 'Business email & communication',
  },
  {
    id: 'loom',
    name: 'Loom',
    desc: 'Video feedback & communication',
    descVi: 'Ghi hình phản hồi & trao đổi công việc trực quan',
    descEn: 'Video feedback & communication',
  },
  {
    id: 'meet',
    name: 'Google Meet',
    desc: 'Seamless video meetings',
    descVi: 'Họp trực tuyến liền mạch & chia sẻ màn hình',
    descEn: 'Seamless video meetings',
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    desc: 'Email & schedule management',
    descVi: 'Lịch biểu & hòm thư quản trị tập trung',
    descEn: 'Email & schedule management',
  },
];
