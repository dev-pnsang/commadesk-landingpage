export type Language = 'en' | 'vi';

export interface ModuleMenuItem {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  badge?: string;
  iconName: 'Kanban' | 'Users' | 'Camera' | 'FileText' | 'HelpCircle' | 'Shield' | 'Truck' | 'Video';
}
