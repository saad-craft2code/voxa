"use client";

import { useState, createContext, useContext, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

type BookDemoContextType = {
  open: () => void;
  close: () => void;
};

const BookDemoContext = createContext<BookDemoContextType | null>(null);

export function useBookDemo() {
  const ctx = useContext(BookDemoContext);
  return ctx ?? { open: () => {}, close: () => {} };
}

const WHATSAPP_NUMBER = "923426660462"; // international format, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Voxa team — I'd like to book a live demo of your AI voice agents / automation bots."
);
const EMAIL_ADDRESS = "info@aguss.co";
const EMAIL_SUBJECT = encodeURIComponent("Book a Voxa demo");
const EMAIL_BODY = encodeURIComponent(
  "Hi Voxa team,\n\nI'd like to book a live demo.\n\nName:\nCompany:\nUse case:\nPreferred time:\n\nThanks."
);
const PHONE_TEL = "+923426660462";

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookDemoContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-luxe border border-border overflow-hidden"
            >
              {/* Header */}
              <div className="relative p-7 sm:p-8 pb-6 border-b border-border">
                <button
                  onClick={close}
                  aria-label="Close"
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground hover:text-ink hover:border-brand/40 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-brand/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-ring" />
                  Book a demo
                </span>
                <h3 className="mt-4 font-display text-3xl font-extrabold text-ink tracking-tight">
                  Let's talk.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-medium leading-relaxed">
                  Pick whichever channel suits you. We usually reply within 4 hours.
                </p>
              </div>

              {/* Options */}
              <div className="p-7 sm:p-8 space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-ink text-base flex items-center gap-2">
                      WhatsApp
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                        Fastest
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5 truncate">
                      Chat with us · +92 342 6660462
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
                  className="group flex items-center gap-4 rounded-2xl border border-brand/20 bg-brand-soft p-4 hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-brand group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-ink text-base">Email</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5 truncate">
                      info@aguss.co
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white shadow-soft group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-ink text-base">Phone</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5 truncate">
                      Direct line · +92 342 6660462
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Footer */}
              <div className="px-7 sm:px-8 py-4 bg-mist/40 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-medium">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  Powered by <span className="font-bold text-ink">Agus Systems</span>
                  · Islamabad · Chicago
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookDemoContext.Provider>
  );
}
