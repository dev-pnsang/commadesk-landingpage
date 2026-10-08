'use client';

import React from 'react';
import Link from 'next/link';
import { ModuleIcon } from '@/components/ui/ModuleIcon';
import { IconName } from '@/i18n/types';
import { ChevronDownIcon, GridIcon, LayersIcon, ShieldCheckIcon, BookOpenIcon, GlobeIcon } from '@/components/ui/UIIcons';

export interface SubmenuItemData {
  id?: string;
  title: string;
  desc?: string;
  shortDesc?: string;
  href: string;
  iconName: IconName;
  badge?: string;
}

interface NavbarSubmenuItemProps {
  item: SubmenuItemData;
  onClick: () => void;
  variant?: 'desktop' | 'mobile';
}

export function NavbarSubmenuItem({ item, onClick, variant = 'desktop' }: NavbarSubmenuItemProps) {
  const description = item.desc || item.shortDesc;

  if (variant === 'mobile') {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-white text-slate-700 hover:text-black transition-all border border-transparent hover:border-slate-200/70 text-left w-full"
      >
        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 shadow-2xs text-[#FF4D38] group-hover:bg-[#FF4D38]/10 group-hover:border-[#FF4D38]/30 flex items-center justify-center shrink-0 mt-0.5 transition-all">
          <ModuleIcon name={item.iconName} className="w-3.5 h-3.5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1.5">
            <span className="text-xs font-bold text-slate-900 group-hover:text-[#FF4D38] truncate">
              {item.title}
            </span>
            {item.badge && (
              <span className="text-[8.5px] font-bold px-1.5 py-0.5 rounded-md bg-[#FF4D38]/10 text-[#FF4D38] uppercase shrink-0">
                {item.badge}
              </span>
            )}
          </div>
          {description && (
            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
              {description}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group flex items-start gap-2 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100/80 transition-all text-left w-full"
    >
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white border border-slate-200/80 shadow-2xs text-[#FF4D38] group-hover:bg-[#FF4D38]/10 group-hover:border-[#FF4D38]/30 flex items-center justify-center shrink-0 transition-all mt-0.5">
        <ModuleIcon name={item.iconName} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span className="text-[11.5px] sm:text-xs font-bold text-gray-900 group-hover:text-[#FF4D38] transition-colors truncate">
            {item.title}
          </span>
          {item.badge && (
            <span className="text-[8px] font-extrabold px-1.5 py-0.2 rounded-md bg-[#FF4D38]/10 text-[#FF4D38] transition-colors uppercase tracking-wider shrink-0">
              {item.badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-[10px] sm:text-[10.5px] text-gray-500 line-clamp-1 mt-0.5 leading-snug break-words">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

interface MobileAccordionTriggerProps {
  type: 'modules' | 'solutions' | 'resources';
  title: string;
  count?: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileAccordionTrigger({
  type,
  title,
  count,
  isOpen,
  onToggle,
}: MobileAccordionTriggerProps) {
  const renderIcon = () => {
    switch (type) {
      case 'modules':
        return <GridIcon className="w-4 h-4" />;
      case 'solutions':
        return <LayersIcon className="w-4 h-4" />;
      case 'resources':
        return <BookOpenIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full group flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all cursor-pointer ${
        isOpen
          ? 'bg-slate-100/90 text-slate-950 font-bold'
          : 'text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/60 font-semibold'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/60">
          {renderIcon()}
        </div>
        <span className="text-sm tracking-tight">{title}</span>
        {typeof count === 'number' && (
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#FF4D38]/10 text-[#FF4D38]">
            {count}
          </span>
        )}
      </div>
      <ChevronDownIcon
        className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-slate-900' : ''
        }`}
      />
    </button>
  );
}
