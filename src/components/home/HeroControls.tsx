"use client";

import {
  Box,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Play,
  Rotate3d,
  Ruler,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MpskinCommandAction, TourViewMode } from "@/config/matterport";
import { cn } from "@/lib/utils";

interface HeroControlsProps {
  isTourActive: boolean;
  /** MPSKIN_READY mesajı alınana kadar mod butonları devre dışıdır */
  isBridgeReady: boolean;
  activeMode: TourViewMode;
  measurementActive: boolean;
  isFullscreen: boolean;
  onPlay: () => void;
  onCommand: (action: MpskinCommandAction) => void;
  onFullscreenToggle: () => void;
  className?: string;
}

interface ControlButton {
  key: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  active: boolean;
  disabled: boolean;
  pressable: boolean;
  hideOnMobile?: boolean;
}

/**
 * Sitenin özel tur kumandası. Tur açıkken MPskin köprüsüne postMessage
 * komutları gönderir; MPskin'in kendi araç çubukları kullanılmaz.
 */
export function HeroControls({
  isTourActive,
  isBridgeReady,
  activeMode,
  measurementActive,
  isFullscreen,
  onPlay,
  onCommand,
  onFullscreenToggle,
  className,
}: HeroControlsProps) {
  const modeDisabled = !isTourActive || !isBridgeReady;

  const controls: ControlButton[] = [
    {
      key: "play",
      icon: Play,
      label: "Örnek Matterport turunu başlat",
      onClick: onPlay,
      active: !isTourActive,
      disabled: false,
      pressable: false,
    },
    {
      key: "inside",
      icon: Rotate3d,
      label: "3D gezinme görünümüne geç",
      onClick: () => onCommand("MODE_INSIDE"),
      active: isTourActive && activeMode === "INSIDE",
      disabled: modeDisabled,
      pressable: true,
    },
    {
      key: "dollhouse",
      icon: Box,
      label: "Dollhouse görünümüne geç",
      onClick: () => onCommand("MODE_DOLLHOUSE"),
      active: isTourActive && activeMode === "DOLLHOUSE",
      disabled: modeDisabled,
      pressable: true,
    },
    {
      key: "floorplan",
      icon: LayoutGrid,
      label: "Kat planı görünümüne geç",
      onClick: () => onCommand("MODE_FLOORPLAN"),
      active: isTourActive && activeMode === "FLOORPLAN",
      disabled: modeDisabled,
      pressable: true,
      hideOnMobile: true,
    },
    {
      key: "measure",
      icon: Ruler,
      label: "Ölçüm modunu aç veya kapat",
      onClick: () => onCommand("MEASUREMENT_TOGGLE"),
      active: isTourActive && measurementActive,
      disabled: modeDisabled,
      pressable: true,
      hideOnMobile: true,
    },
    {
      key: "fullscreen",
      icon: isFullscreen ? Minimize2 : Maximize2,
      label: isFullscreen ? "Tam ekrandan çık" : "Siteyi tam ekrana geçir",
      onClick: onFullscreenToggle,
      active: false,
      disabled: false,
      pressable: false,
    },
  ];

  return (
    <div
      role="toolbar"
      aria-label="3D tur kontrolleri"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border-subtle",
        "bg-surface/75 p-1.5 shadow-lg backdrop-blur-md",
        className,
      )}
    >
      {controls.map((control) => {
        const Icon = control.icon;
        return (
          <button
            key={control.key}
            type="button"
            title={control.disabled ? "Tur hazırlanıyor" : control.label}
            aria-label={control.label}
            aria-pressed={control.pressable ? control.active : undefined}
            disabled={control.disabled}
            onClick={control.onClick}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full transition-all duration-200 sm:size-11",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              control.hideOnMobile && "max-sm:hidden",
              control.disabled && "opacity-40",
              control.active
                ? "bg-accent text-accent-foreground shadow-[0_6px_18px_-6px_var(--ring)]"
                : "text-muted",
              !control.disabled &&
                !control.active &&
                "hover:bg-surface-2 hover:text-foreground",
            )}
          >
            <Icon className="size-[18px]" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
