export type Language = 'en' | 'vi';

export type ModuleCategory = 'operations' | 'workforce' | 'comms' | 'commerce';

export type IconName =
  | 'Kanban'
  | 'Users'
  | 'Camera'
  | 'FileText'
  | 'HelpCircle'
  | 'Shield'
  | 'Truck'
  | 'Video'
  | 'Package'
  | 'Globe'
  | 'Share2'
  | 'ClipboardCheck'
  | 'FileCheck'
  | 'Store'
  | 'Building'
  | 'Landmark'
  | 'BookOpen'
  | 'Sparkles'
  | 'Code2'
  | 'Monitor';

export interface ModuleMenuItem {
  id: string;
  title: string;
  shortDesc: string;
  href: string;
  badge?: string;
  category?: ModuleCategory;
  iconName: IconName;
}

