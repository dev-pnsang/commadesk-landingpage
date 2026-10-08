'use client';

import React from 'react';

export interface ShowcaseTabItem<T extends string = string> {
  id: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface ShowcaseTabBarProps<T extends string = string> {
  tabs: ShowcaseTabItem<T>[];
  activeTab: T;
  onChange: (id: T) => void;
  className?: string;
  compact?: boolean;
}

export function ShowcaseTabBar<T extends string = string>({
  tabs,
  activeTab,
  onChange,
  className = '',
  compact = false,
}: ShowcaseTabBarProps<T>) {
  return (
    <div
      className={`flex items-center gap-1 p-1 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-2xs ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`inline-flex items-center gap-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
            } ${
              isActive
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-black hover:bg-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={`text-[9px] font-bold px-1 py-0.2 rounded-md ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export interface ShowcaseCardProps {
  title?: string;
  liveIndicator?: boolean;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function ShowcaseCard({
  title,
  liveIndicator = true,
  headerRight,
  children,
  className = '',
  bodyClassName = '',
}: ShowcaseCardProps) {
  const hasHeader = Boolean(title || headerRight);

  return (
    <div
      className={`relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-3 sm:p-5 border border-slate-200/80 text-left font-sans select-none ${className}`}
    >
      {hasHeader && (
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
          {title ? (
            <div className="flex items-center gap-2">
              {liveIndicator && (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              )}
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                {title}
              </span>
            </div>
          ) : (
            <div />
          )}

          {headerRight && <div>{headerRight}</div>}
        </div>
      )}

      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
