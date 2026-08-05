"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
}

export default function ObfuscatedEmail({
  user,
  domain,
  className,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Assemble the email address on the client after hydration
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  const handleInteraction = () => {
    if (!email) {
      setEmail(`${user}@${domain}`);
    }
  };

  const fullEmail = email || `${user}@${domain}`;

  return (
    <a
      href={email ? `mailto:${fullEmail}` : "#"}
      onMouseEnter={handleInteraction}
      focus-visible="true"
      onFocus={handleInteraction}
      onClick={(e) => {
        handleInteraction();
        e.currentTarget.href = `mailto:${user}@${domain}`;
      }}
      className={className}
    >
      {email || `${user} [at] ${domain.replace(".", " [dot] ")}`}
    </a>
  );
}
