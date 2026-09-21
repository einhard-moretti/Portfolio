import { Facebook, Globe, Mail } from "lucide-react";
import { useApp } from "../context/AppContext.jsx";
import { channels, profile } from "../data/profile.js";
import { TikTokIcon, WhatsAppIcon } from "./icons.jsx";
import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";

const CHANNEL_ICONS = { tiktok: TikTokIcon, facebook: Facebook };

function RowIcon({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-base transition-shadow duration-300 group-hover/row:glow-accent">
      <Icon
        size={18}
        aria-hidden="true"
        className="text-muted transition-colors duration-300 group-hover/row:text-accent-strong"
      />
    </span>
  );
}

function RowText({ label, value }) {
  return (
    <span className="min-w-0">
      <span className="block font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover/row:text-accent-strong">
        {label}
      </span>
      <span className="mt-0.5 block truncate text-[15px] text-ink transition-colors duration-300 group-hover/row:text-accent-strong group-hover/row:[text-shadow:0_0_16px_rgb(var(--c-accent)/0.3)]">
        {value}
      </span>
    </span>
  );
}

function RowShell({ children }) {
  return (
    <div className="relative flex items-center gap-4 px-3 py-4 sm:gap-5 sm:px-4">{children}</div>
  );
}

export default function Contact() {
  const { t } = useApp();
  const meta = t.sections.contact;

  const digits = profile.phoneHref.replace(/\D/g, "");

  const rows = [
    {
      key: "whatsapp",
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: profile.phone,
      href: `https://wa.me/${digits}`,
      external: true,
    },
    ...channels.map((channel) => ({
      key: channel.id,
      icon: CHANNEL_ICONS[channel.id] || Globe,
      label: channel.label,
      value: channel.display,
      href: channel.url,
      external: true,
    })),
    {
      key: "gmail",
      icon: Mail,
      label: "Gmail",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
  ];

  return (
    <Section id="contact" eyebrow={meta.eyebrow} title={meta.title} large band clip>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[110px]"
      />

      <Reveal>
        <p className="relative max-w-[52ch] text-lg leading-relaxed text-muted">{meta.body}</p>
      </Reveal>

      <div className="relative mt-12">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted">{meta.links}</p>
        <div className="mt-4 space-y-1">
          {rows.map((row, index) => {
            const content = (
              <>
                <RowIcon icon={row.icon} />
                <RowText label={row.label} value={row.value} />
              </>
            );

            return (
              <Reveal key={row.key} delay={120 + index * 70}>
                <RowShell>
                  {row.href ? (
                    <a
                      href={row.href}
                      {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="group/row flex max-w-full items-center gap-4 rounded-2xl sm:gap-5"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </RowShell>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}