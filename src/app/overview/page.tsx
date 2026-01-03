export default function OverviewPage() {
    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-20 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">
            {/* Top App Bar */}
            <header className="sticky top-0 z-40 flex w-full items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                    <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-[24px]">menu</span>
                    </button>
                </div>
                <h1 className="text-lg font-bold tracking-tight">Resumen Financiero</h1>
                <div className="flex items-center gap-2">
                    <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-[24px]">notifications</span>
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#101922]"></span>
                    </button>
                    <div className="size-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <img
                            alt="Portrait of a male executive in a suit"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXqVa5apBidRao-ZRQsm-eJ_cqAtH3PcQ3-KifXcNrHByWgQjWxmZofawXvhScxg5y36H4_XEWb0YBr0d7u3aSeJbNuCg-z6wP8vHXl3AdqTWWVJYb5Q7Y1W9tuNNS11La5kAXU6o8qm6Cj2AKwGhebsY_4uvxyN1i9szr6d0_Zo953k445Pok0Fi5CLE4tYGIXktRRN5qygzfrxR9Ple8NGVhjpEiFhqbpDKXQG2ZgUd5dijhlhuFfE1veGWcDkDWXY4-7d-ipuOF"
                        />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col gap-6 p-4">
                {/* Welcome & Date Filter */}
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Buenos días, Alejandro</p>
                        <h2 className="text-2xl font-bold leading-tight">Visión General</h2>
                    </div>
                    {/* Chips: Horizontal Scroll */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                        <button className="group flex h-9 shrink-0 items-center gap-2 rounded-full bg-primary px-4 shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-95">
                            <span className="text-sm font-bold text-white">Este Mes</span>
                            <span className="material-symbols-outlined text-white text-[18px]">keyboard_arrow_down</span>
                        </button>
                        <FilterChip label="Mes Pasado" />
                        <FilterChip label="Q3 2023" />
                        <FilterChip label="YTD" />
                    </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <OverviewKpiCard
                        title="Ingresos Totales"
                        value="$124,500"
                        change="12%"
                        icon="attach_money"
                        iconBg="bg-blue-100 dark:bg-blue-900/30"
                        iconColor="text-primary"
                        isPositive
                    />
                    <OverviewKpiCard
                        title="Beneficio Neto"
                        value="$45,200"
                        change="5%"
                        icon="account_balance_wallet"
                        iconBg="bg-purple-100 dark:bg-purple-900/30"
                        iconColor="text-purple-600 dark:text-purple-400"
                        isPositive
                    />
                    <OverviewKpiCard
                        title="Burn Rate"
                        value="$12,000"
                        change="2%"
                        icon="local_fire_department"
                        iconBg="bg-orange-100 dark:bg-orange-900/30"
                        iconColor="text-orange-600 dark:text-orange-400"
                        isPositive={false}
                    />
                    <OverviewKpiCard
                        title="Cash on Hand"
                        value="$350k"
                        change="8%"
                        icon="savings"
                        iconBg="bg-teal-100 dark:bg-teal-900/30"
                        iconColor="text-teal-600 dark:text-teal-400"
                        isPositive
                    />
                </div>

                {/* Main Chart Section */}
                <div className="flex flex-col rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="mb-6 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">Flujo de Caja vs Gastos</h3>
                            <button className="text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                            </button>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-slate-900 dark:text-white">$124.5k</span>
                            <span className="text-sm font-medium text-slate-500">vs $80k gastos</span>
                        </div>
                    </div>
                    {/* Chart Area */}
                    <div className="relative h-48 w-full">
                        <div className="absolute inset-0 flex flex-col justify-between text-xs font-medium text-slate-400">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`border-b ${i === 5 ? 'border-solid' : 'border-dashed'} border-slate-200 dark:border-slate-700 w-full h-0`}></div>
                            ))}
                        </div>
                        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#137fec" stopOpacity="0.3"></stop>
                                    <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path d="M0,80 Q10,75 20,60 T40,50 T60,40 T80,30 T100,20 V100 H0 Z" fill="url(#chartGradient)"></path>
                            <path d="M0,80 Q10,75 20,60 T40,50 T60,40 T80,30 T100,20" fill="none" stroke="#137fec" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                            <path d="M0,90 Q15,85 30,80 T60,75 T90,65 T100,60" fill="none" stroke="#94a3b8" strokeDasharray="4,4" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                        <div className="absolute top-[20%] right-[20%] flex flex-col items-center">
                            <div className="size-3 rounded-full border-2 border-white bg-primary shadow-sm dark:border-background-dark"></div>
                            <div className="absolute bottom-full mb-2 w-max rounded-md bg-slate-900 px-2 py-1 text-xs font-bold text-white shadow-lg dark:bg-white dark:text-slate-900">
                                $98,400
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between px-1 text-xs font-medium text-slate-400">
                        {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map(m => <span key={m}>{m}</span>)}
                    </div>
                </div>

                {/* Breakdown List */}
                <div className="flex flex-col gap-4">
                    <h3 className="px-1 text-base font-bold text-slate-900 dark:text-white">Desglose de Gastos</h3>
                    <div className="flex flex-col gap-3">
                        <BreakdownItem label="Nómina y RRHH" sub="65% del presupuesto" value="$52,000" percentage={65} color="bg-indigo-500" icon="group" iconBg="bg-indigo-100 dark:bg-indigo-900/30" iconColor="text-indigo-600 dark:text-indigo-400" />
                        <BreakdownItem label="Marketing" sub="105% (Excedido)" value="$15,400" percentage={100} color="bg-rose-500" icon="ads_click" iconBg="bg-pink-100 dark:bg-pink-900/30" iconColor="text-pink-600 dark:text-pink-400" subColor="text-rose-500" />
                        <BreakdownItem label="Servidores & IT" sub="42% del presupuesto" value="$8,250" percentage={42} color="bg-cyan-500" icon="dns" iconBg="bg-cyan-100 dark:bg-cyan-900/30" iconColor="text-cyan-600 dark:text-cyan-400" />
                    </div>
                </div>

                {/* Alert Card */}
                <div className="mt-2 flex items-start gap-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 p-4 border border-amber-100 dark:border-amber-900/30">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-500">warning</span>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold text-amber-900 dark:text-amber-400">Alerta de Presupuesto</p>
                        <p className="text-xs text-amber-800/80 dark:text-amber-200/60 leading-relaxed">
                            El departamento de Marketing ha excedido su presupuesto mensual en un 5% debido a la campaña de LinkedIn.
                        </p>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
                <div className="flex h-16 items-center justify-around px-2">
                    <NavButton icon="grid_view" label="Resumen" href="/" />
                    <NavButton icon="bar_chart" label="Reportes" active href="/overview" />
                    <div className="relative -top-5">
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">add</span>
                        </button>
                    </div>
                    <NavButton icon="receipt_long" label="Transacc." href="/transactions" />
                    <NavButton icon="settings" label="Ajustes" />
                </div>
            </nav>
        </div>
    );
}

import Link from "next/link";

function NavButton({ icon, label, active = false, href = "#" }: { icon: string, label: string, active?: boolean, href?: string }) {
    return (
        <Link href={href} className={`flex flex-col items-center justify-center gap-1 w-16 ${active ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary transition-colors'}`}>
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
            <span className="text-[10px] font-medium">{label}</span>
        </Link>
    );
}

function FilterChip({ label }: { label: string }) {
    return (
        <button className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        </button>
    );
}

function OverviewKpiCard({ title, value, change, icon, iconBg, iconColor, isPositive }: { title: string, value: string, change: string, icon: string, iconBg: string, iconColor: string, isPositive: boolean }) {
    return (
        <div className="flex flex-col gap-1 rounded-2xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-start justify-between">
                <div className={`flex size-8 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </div>
                <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${isPositive ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'}`}>
                    <span className="material-symbols-outlined text-[14px]">{isPositive ? 'trending_up' : 'trending_down'}</span> {change}
                </span>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
            <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
        </div>
    );
}

function BreakdownItem({ label, sub, value, percentage, color, icon, iconBg, iconColor, subColor = 'text-slate-500' }: { label: string, sub: string, value: string, percentage: number, color: string, icon: string, iconBg: string, iconColor: string, subColor?: string }) {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{label}</span>
                        <span className={`text-xs font-medium ${subColor}`}>{sub}</span>
                    </div>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{value}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}
