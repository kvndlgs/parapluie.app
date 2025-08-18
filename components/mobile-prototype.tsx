import {
  User,
  Bell,
  ShieldCheck,
  Zap,
  Triangle,
  Activity,
  Shield,
  CogFour,
  Eye,
  Users,
  FaceId,
  Image,
  Microphone,
  Home,
  CreditCard,
  Scan,
  Ticket,
  Send,
  Telephone
} from "@mynaui/icons-react";

export default function MobilePrototype() {
  return (
    <div className="antialiased bg-white text-[#1f2330] selection:bg-[#6c0bfe]/20 selection:text-[#1f2330]">
      <div className="min-h-dvh w-full flex items-start justify-center">
        <div className="w-full max-w-sm mx-auto flex flex-col h-dvh">
          <header className="flex pt-5 pr-5 pb-3 pl-5 items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-md flex items-center justify-center bg-[#6c0bfe] text-white text-sm tracking-tight font-semibold shadow-sm ring-1 ring-black/5 font-work-sans"

              >
                S
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-[#6c0bfe] tracking-tight font-work-sans">
                  Senior Financial Safety
                </span>
                <span className="text-xs text-[#9F9DB7] font-work-sans">
                  AI‑Powered Protection
                </span>
              </div>
            </div>
            <button
              className="h-10 w-10 rounded-lg grid place-items-center hover:bg-black/[0.04] active:bg-black/[0.06] transition-colors ring-1 ring-black/5"

            >
              <Bell />
            </button>
          </header>

          <main className="relative flex-1 overflow-hidden">
            <div
              className="absolute inset-0 overflow-y-auto px-5 pb-28 space-y-4"
              id="pages"
            >
              <section  className="space-y-5 hidden">
                <div className="flex items-end justify-between">
                  <div className="">
                    <h1 className="text-[24px] tracking-tight font-semibold">
                      Good morning
                    </h1>
                    <p className="text-sm text-[#9F9DB7] font-work-sans">
                      Your protections are up and watching.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#22c55e] font-work-sans">
                      <ShieldCheck />
                      Active
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-neutral-50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                        <Zap />{" "}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#9F9DB7] font-work-sans">
                        Protection Status
                      </p>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[19px] tracking-tight font-semibold font-work-sans">
                          All clear
                        </h2>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#22c55e]/10 text-[#15803d] ring-1 ring-[#22c55e]/20 font-work-sans">
                          Real‑time
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-xl p-3 ring-1 ring-black/5 bg-[#6c0bfe]/5">
                      <p className="text-[11px] text-[#9F9DB7] font-work-sans">
                        Blocks
                      </p>
                      <p className="text-[16px] font-semibold tracking-tight text-[#6c0bfe] font-work-sans">
                        12
                      </p>
                    </div>
                    <div className="rounded-xl p-3 ring-1 ring-black/5 bg-black/[0.015]">
                      <p className="text-[11px] text-[#9F9DB7] font-work-sans">
                        Alerts
                      </p>
                      <p className="text-[16px] font-semibold tracking-tight font-work-sans">
                        2
                      </p>
                    </div>
                    <div className="rounded-xl p-3 ring-1 ring-black/5">
                      <p className="text-[11px] text-[#9F9DB7] font-work-sans">
                        Resolved
                      </p>
                      <p className="text-[16px] font-semibold tracking-tight font-work-sans">
                        9
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-sm text-[#6c0bfe] hover:underline font-work-sans">
                      View protections
                    </button>
                    <button className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-[#6c0bfe] text-white shadow-sm hover:opacity-95 active:opacity-90 transition font-work-sans">
                      <Scan />
                      Scan message
                    </button>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-[17px] font-semibold tracking-tight mb-2 font-work-sans">
                    Recent alerts
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 rounded-xl p-3 ring-1 ring-black/5 bg-white hover:bg-black/[0.02] transition">
                      <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#cc577c]/10 ring-1 ring-[#cc577c]/20">
                        <Triangle />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-[15px] font-medium font-work-sans">
                            Unusual withdrawal
                          </p>
                          <span className="text-[11px] text-[#9F9DB7] font-work-sans">
                            2h ago
                          </span>
                        </div>
                        <p className="text-sm text-[#9F9DB7] font-work-sans">
                          ATM limit exceeded vs. usual behavior.
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button className="text-xs px-2.5 py-1 rounded-lg ring-1 ring-[#cc577c]/30 text-[#cc577c] bg-[#cc577c]/10 hover:bg-[#cc577c]/15 font-work-sans">
                            Review
                          </button>
                          <button className="text-xs px-2.5 py-1 rounded-lg ring-1 ring-black/10 text-[#1f2330] hover:bg-black/[0.04] font-work-sans">
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl p-3 ring-1 ring-black/5 bg-neutral-50 hover:bg-black/[0.03] transition">
                      <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                        <CreditCard />{" "}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-[15px] font-medium font-work-sans">
                            New payee flagged
                          </p>
                          <span className="text-[11px] text-[#9F9DB7] font-work-sans">
                            Yesterday
                          </span>
                        </div>
                        <p className="text-sm text-[#9F9DB7] font-work-sans">
                          Requires confirmation from caregiver.
                        </p>
                        <div className="mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 font-work-sans">
                            Resolved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl p-3 ring-1 ring-black/5 bg-white hover:bg-black/[0.02] transition">
                      <div className="h-9 w-9 rounded-lg grid place-items-center bg-amber-100 ring-1 ring-amber-200">
                        <Telephone />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-[15px] font-medium font-work-sans">
                            Potential scam call
                          </p>
                          <span className="text-[11px] text-[#9F9DB7] font-work-sans">
                            2d ago
                          </span>
                        </div>
                        <p className="text-sm text-[#9F9DB7] font-work-sans">
                          Reported by community watch.
                        </p>
                        <div className="mt-2">
                          <button className="text-xs px-2.5 py-1 rounded-lg ring-1 ring-black/10 text-[#1f2330] hover:bg-black/[0.04] font-work-sans">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <h3 className="text-[17px] font-semibold tracking-tight mb-2 font-work-sans">
                    Quick actions
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="rounded-xl p-3 ring-1 ring-black/5 bg-white hover:bg-black/[0.02] active:bg-black/[0.04] transition flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-lg grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                        <Scan />{" "}
                      </div>
                      <span className="text-xs font-work-sans">
                        Scan message
                      </span>
                    </button>
                    <button className="rounded-xl p-3 ring-1 ring-black/5 bg-neutral-50 hover:bg-black/[0.03] active:bg-black/[0.05] transition flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-lg grid place-items-center bg-[#cc577c]/10 ring-1 ring-[#cc577c]/20">
                        <Ticket />{" "}
                      </div>
                      <span className="text-xs font-work-sans">
                        Transactions
                      </span>
                    </button>
                    <button className="rounded-xl p-3 ring-1 ring-black/5 bg-white hover:bg-black/[0.02] active:bg-black/[0.04] transition flex flex-col items-center gap-2">
                      <div className="h-10 w-10 rounded-lg grid place-items-center bg-sky-100 ring-1 ring-sky-200">
                        <Users />{" "}
                      </div>
                      <span className="text-xs font-work-sans">
                        Share access
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="hidden space-y-4">
                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-neutral-50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                      <FaceId />{" "}
                    </div>
                    <div>
                      <h2 className="text-[19px] tracking-tight font-semibold font-work-sans">
                        Ask the AI
                      </h2>
                      <p className="text-sm text-[#9F9DB7] font-work-sans">
                        Explain transactions, screen messages, and more.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Is this text a scam?
                    </button>
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Explain this charge
                    </button>
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Summarize bank email
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                        <FaceId />{" "}
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] font-work-sans">
                          Hi! I can scan texts and emails for fraud patterns and
                          explain any transaction in simple terms.
                        </p>
                        <p className="text-xs text-[#9F9DB7] mt-1 font-work-sans">
                          I will never move money without your approval.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sticky bottom-0 left-0 right-0">
                  <div className="rounded-2xl p-2 ring-1 ring-black/5 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-2 px-2">
                      <button
                        className="h-10 w-10 rounded-lg grid place-items-center hover:bg-black/[0.04] ring-1 ring-black/5"
     
                      >
                        <Microphone />{" "}
                      </button>
                      <input
                        type="text"
                        placeholder="Ask about a transaction or paste a message…"
                        className="flex-1 h-10 outline-none placeholder:text-[#9F9DB7] text-[15px]"
                      />
                      <button
                        className="h-10 w-10 rounded-lg grid place-items-center hover:bg-black/[0.04] ring-1 ring-black/5"

                      >
                        <Image />{" "}
                      </button>
                      <button
                        className="h-10 w-10 rounded-lg grid place-items-center bg-[#6c0bfe] text-white hover:opacity-95 ring-1 ring-black/5"
                
                      >
                        <Send />
               
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4 hidden">
                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-[19px] tracking-tight font-semibold font-work-sans">
                        Monitoring
                      </h2>
                      <p className="text-sm text-[#9F9DB7] font-work-sans">
                        Trends and anomalies
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#6c0bfe]/10 text-[#6c0bfe] ring-1 ring-[#6c0bfe]/20 font-work-sans">
                      Live
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="rounded-xl p-3 ring-1 ring-black/5">
                      <div className="h-40 rounded-lg bg-white ring-1 ring-black/5 overflow-hidden">
                        <div className="h-full w-full p-2">
                          <div className="h-full w-full">
                            <div className="">
                              <canvas
                                id="monitoringChart"
                                className="block box-sizing border-box h-0 w-0"
                              ></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-xs text-[#9F9DB7] font-work-sans">
                          Anomaly score, last 14 days
                        </p>
                        <button className="text-xs px-2 py-1 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-neutral-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                          <Eye />{" "}
                        </div>
                        <div className="">
                          <p className="text-[15px] font-medium font-work-sans">
                            Watchlist merchants
                          </p>
                          <p className="text-xs text-[#9F9DB7] font-work-sans">
                            Extra checks for these names
                          </p>
                        </div>
                      </div>
                      <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                        Manage
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] ring-1 ring-black/10 font-work-sans">
                        Zelle
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] ring-1 ring-black/10 font-work-sans">
                        Cash App
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] ring-1 ring-black/10 font-work-sans">
                        Crypto
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#cc577c]/10 ring-1 ring-[#cc577c]/20">
                        <Triangle />{" "}
                      </div>
                      <div className="flex-1">
                        <p className="text-[15px] font-medium font-work-sans">
                          Escalation rules
                        </p>
                        <p className="text-xs text-[#9F9DB7] font-work-sans">
                          Notify caregiver for high-risk events
                        </p>
                      </div>
                      <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section  className="space-y-4">
                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <h2 className="text-[19px] tracking-tight font-semibold font-work-sans">
                    Settings
                  </h2>
                  <p className="text-sm text-[#9F9DB7] font-work-sans">
                    Control notifications and security
                  </p>
                  <div className="mt-3 divide-y divide-black/5">
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-work-sans">
                          Real‑time alerts
                        </p>
                        <p className="text-xs text-[#9F9DB7] font-work-sans">
                          High priority notifications
                        </p>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans"
                    
                      >
                        On
                      </button>
                    </div>
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-work-sans">
                          Sensitive transactions
                        </p>
                        <p className="text-xs text-[#9F9DB7] font-work-sans">
                          Requires confirmation
                        </p>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans"
                
                      >
                        On
                      </button>
                    </div>
                    <div className="py-3 flex items-center justify-between">
                      <div>
                        <p className="text-[15px] font-work-sans">
                          Weekly summaries
                        </p>
                        <p className="text-xs text-[#9F9DB7] font-work-sans">
                          Digest email and caregiver copy
                        </p>
                      </div>
                      <button
                        className="px-3 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans"
                  
                      >
                        Off
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg grid place-items-center bg-emerald-100 ring-1 ring-emerald-200">
                      <ShieldCheck />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium font-work-sans">
                        Two‑factor authentication
                      </p>
                      <p className="text-xs text-[#9F9DB7] font-work-sans">
                        Protect account access
                      </p>
                    </div>
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Configure
                    </button>
                  </div>
                </div>
              </section>

              <section  className="hidden space-y-4">
                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-neutral-50 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl overflow-hidden ring-1 ring-black/5">
                      <img
                        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=1960&amp;auto=format&amp;fit=crop"
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[17px] font-semibold tracking-tight font-work-sans">
                        Evelyn Harper
                      </p>
                      <p className="text-xs text-[#9F9DB7] font-work-sans">
                        Member • Caregiver linked
                      </p>
                    </div>
                    <button
                      className="h-10 w-10 rounded-lg grid place-items-center hover:bg-black/[0.04] ring-1 ring-black/5"
                     
                    >
                      <CogFour />{" "}
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl p-4 ring-1 ring-black/5 bg-white">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#6c0bfe]/10 ring-1 ring-[#6c0bfe]/20">
                          <User />{" "}
                        </div>
                        <div>
                          <p className="text-[15px] font-medium font-work-sans">
                            Caregiver
                          </p>
                          <p className="text-xs text-[#9F9DB7] font-work-sans">
                            emma@family.org
                          </p>
                        </div>
                      </div>
                      <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                        Manage
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg grid place-items-center bg-[#cc577c]/10 ring-1 ring-[#cc577c]/20">
                          <CreditCard />{" "}
                        </div>
                        <div>
                          <p className="text-[15px] font-medium font-work-sans">
                            Linked accounts
                          </p>
                          <p className="text-xs text-[#9F9DB7] font-work-sans">
                            2 banks • 1 card
                          </p>
                        </div>
                      </div>
                      <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                        Manage
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg grid place-items-center bg-sky-100 ring-1 ring-sky-200">
                          <Shield />{" "}
                        </div>
                        <div>
                          <p className="text-[15px] font-medium font-work-sans">
                            Plan
                          </p>
                          <p className="text-xs text-[#9F9DB7] font-work-sans">
                            Protect Plus • Monthly
                          </p>
                        </div>
                      </div>
                      <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                        Upgrade
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Privacy
                    </button>
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] font-work-sans">
                      Help
                    </button>
                    <button className="text-xs px-2.5 py-1.5 rounded-lg ring-1 ring-black/10 hover:bg-black/[0.03] text-rose-600 font-work-sans">
                      Sign out
                    </button>
                  </div>
                </div>
              </section>
            </div>
   
</main>
          <nav
            className="pb-(calc(env(safe-area-inset-bottom) * 8px)) fixed bottom-0 left-0 right-0 mx-auto max-w-sm bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-t border-black/[0.06] px-4 pt-2"
           
          >
            <div className="grid grid-cols-5 gap-1">
              <button
           
                className="group flex flex-col items-center gap-1.5 px-2 py-2 rounded-xl hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[#6c0bfe]/30"

              >
                <Home />{" "}
                <span className="text-[11px] font-medium font-work-sans text-[#9F9DB7]">
                  Home
                </span>
              </button>
              <button
      
                className="group flex flex-col items-center gap-1.5 px-2 py-2 rounded-xl hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[#6c0bfe]/30"
 
              >
                <FaceId />{" "}
                <span className="text-[11px] font-medium text-[#9F9DB7] font-work-sans">
                  AI
                </span>
              </button>
              <button

                className="group flex flex-col gap-1.5 hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[#6c0bfe]/30 rounded-xl pt-2 pr-2 pb-2 pl-2 items-center"
         
              >
                <Activity />{" "}
                <span className="text-[11px] font-medium font-work-sans text-[#9F9DB7]">
                  Monitoring
                </span>
              </button>
              <button
          
                className="group flex flex-col gap-1.5 hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[#6c0bfe]/30 rounded-xl pt-2 pr-2 pb-2 pl-2 items-center"
         
              >
                <CogFour />{" "}
                <span className="text-[11px] font-medium font-work-sans text-[#6c0bfe]">
                  Settings
                </span>
              </button>
              <button

                className="group flex flex-col items-center gap-1.5 px-2 py-2 rounded-xl hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-[#6c0bfe]/30"
  
              >
                <User />
                <span className="text-[11px] font-medium text-[#9F9DB7] font-work-sans">
                  Account
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
