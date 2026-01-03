import Link from "next/link";

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
            {/* Top App Bar */}
            <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-primary/20 shadow-sm"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdjvpgQyTr3bwQxwdUFNNd_kEL8PptoFqZ9Jt1TU4KgINi5mlBRbV0UI6Q4w3xYjUskAfW5_mUoCtUEq5e9UZbPphq6YZ6CAPlo2e6Na0efUPuEc2vY6H3XGmwgNZcfvkjqIvYQvzyZ_XmIEfQvMn4h40Zm09T4-aiSVpg7T2hER0oQDMdR7K3HhNS_e7kQH_vBxnZC1Omjqf_6DPmvWT_jwe6gKb2ncRHFGEj8DfJ35O-r673rPFOpcRIC6-VTAH7_fyFEpArdaub")' }}
                        ></div>
                        <div>
                            <p className="text-xs font-medium text-text-sec-light dark:text-text-sec-dark">Buenos días,</p>
                            <h2 className="text-base font-bold leading-tight">Alejandro</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-text-main-light dark:text-text-main-dark relative">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Date Filters */}
            <div className="w-full overflow-x-auto no-scrollbar py-4 pl-4">
                <div className="flex gap-2 pr-4 min-w-max">
                    <button className="flex h-9 items-center justify-center rounded-full bg-primary px-4 shadow-lg shadow-primary/20 transition-all">
                        <p className="text-white text-sm font-bold">Este mes</p>
                    </button>
                    <FilterChip label="Trimestre" />
                    <FilterChip label="Año actual" />
                    <FilterChip label="Personalizado" />
                </div>
            </div>

            {/* Budget Alert */}
            <div className="px-4 mb-2">
                <div className="flex items-start gap-3 rounded-lg bg-orange-500/10 border border-orange-500/20 p-3">
                    <span className="material-symbols-outlined text-orange-500 text-[20px] mt-0.5">warning</span>
                    <div>
                        <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400">Alerta de Presupuesto</h3>
                        <p className="text-xs text-text-sec-light dark:text-text-sec-dark leading-relaxed mt-0.5">Marketing ha consumido el 90% del presupuesto mensual asignado.</p>
                    </div>
                </div>
            </div>

            {/* Main KPIs */}
            <div className="px-4 py-2">
                <h3 className="text-lg font-bold mb-3 px-1">Solvencia</h3>
                <div className="grid grid-cols-2 gap-3">
                    <KpiCard
                        title="Caja"
                        value="$1.25M"
                        change="+2.5%"
                        icon="account_balance_wallet"
                        iconColor="text-primary"
                    />
                    <KpiCard
                        title="Runway"
                        value="14 m"
                        change="+1 mo"
                        icon="timelapse"
                        iconColor="text-purple-500"
                    />
                </div>
            </div>

            {/* Chart Section */}
            <div className="px-4 py-4">
                <div className="rounded-xl bg-card-light dark:bg-card-dark p-5 shadow-sm border border-border-light dark:border-border-dark">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">Utilidad Neta</p>
                            <h3 className="text-2xl font-bold tracking-tight">$23,000</h3>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                            <span className="material-symbols-outlined text-[16px]">trending_up</span>
                            <span className="text-xs font-bold">+15%</span>
                        </div>
                    </div>

                    {/* Chart SVG */}
                    <div className="w-full aspect-[16/9] relative">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 150">
                            <defs>
                                <linearGradient id="gradientIncome" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#137fec" stopOpacity="0.3"></stop>
                                    <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <line stroke="#2d3748" strokeDasharray="4" strokeWidth="0.5" x1="0" x2="300" y1="120" y2="120"></line>
                            <line stroke="#2d3748" strokeDasharray="4" strokeWidth="0.5" x1="0" x2="300" y1="80" y2="80"></line>
                            <line stroke="#2d3748" strokeDasharray="4" strokeWidth="0.5" x1="0" x2="300" y1="40" y2="40"></line>
                            <path d="M0,120 C40,110 60,60 100,50 C140,40 160,70 200,60 C240,50 260,20 300,30 V150 H0 Z" fill="url(#gradientIncome)"></path>
                            <path d="M0,120 C40,110 60,60 100,50 C140,40 160,70 200,60 C240,50 260,20 300,30" fill="none" stroke="#137fec" strokeLinecap="round" strokeWidth="2"></path>
                            <path d="M0,130 C40,125 60,100 100,110 C140,120 160,90 200,95 C240,100 260,80 300,90" fill="none" stroke="#ef4444" strokeDasharray="4" strokeLinecap="round" strokeWidth="2"></path>
                        </svg>
                        <div className="flex justify-between mt-2 px-2">
                            {['Ene', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map(m => (
                                <span key={m} className="text-[10px] font-medium text-text-sec-light dark:text-text-sec-dark">{m}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                        <LegendItem color="bg-primary" label="Ingresos" />
                        <LegendItem color="bg-red-500" label="Gastos" />
                    </div>
                </div>
            </div>

            {/* Detailed Metrics */}
            <div className="px-4 py-2">
                <h3 className="text-lg font-bold mb-3 px-1">Detalle Operativo</h3>
                <div className="grid grid-cols-2 gap-3">
                    <DetailCard label="Ingresos Tot." value="$85k" trend="↑ 12%" trendColor="text-emerald-500" />
                    <DetailCard label="Gastos Tot." value="$62k" trend="↓ 5%" trendColor="text-red-500" />
                    <DetailCard label="Burn Rate" value="$45k" trend="Stable" trendColor="text-text-sec-light dark:text-text-sec-dark" />
                    <DetailCard label="Cuentas x Cobrar" value="$12.5k" trend="↓ 2%" trendColor="text-red-500" />
                </div>
            </div>

            {/* Expense Distribution */}
            <div className="px-4 py-4">
                <h3 className="text-lg font-bold mb-3 px-1">Distribución de Gastos</h3>
                <div className="flex flex-col gap-3 bg-card-light dark:bg-card-dark rounded-xl p-5 border border-border-light dark:border-border-dark">
                    <ProgressBar label="Nómina" percentage={45} color="bg-blue-500" />
                    <ProgressBar label="Infraestructura (AWS)" percentage={25} color="bg-purple-500" />
                    <ProgressBar label="Marketing" percentage={20} color="bg-orange-500" />
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="px-4 py-2 mb-6">
                <div className="flex justify-between items-end mb-3 px-1">
                    <h3 className="text-lg font-bold">Últimos Movimientos</h3>
                    <button className="text-sm font-medium text-primary hover:text-primary/80">Ver todo</button>
                </div>
                <div className="flex flex-col gap-0 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                    <TransactionItem title="AWS Services" category="Infraestructura" amount="-$450.00" date="Hoy" icon="cloud" />
                    <TransactionItem title="Cliente Stripe" category="Ventas" amount="+$1,200.00" date="Ayer" icon="attach_money" isIncome />
                    <TransactionItem title="Aeroméxico" category="Viáticos" amount="-$320.00" date="10 Oct" icon="flight" isLast />
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-lg border-t border-border-light dark:border-border-dark pb-safe">
                <div className="flex h-16 items-center justify-around px-2">
                    <NavButton icon="grid_view" label="Resumen" active />
                    <NavButton icon="bar_chart" label="Reportes" href="/overview" />
                    <div className="relative -top-5">
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">add</span>
                        </button>
                    </div>
                    <NavButton icon="account_balance" label="Bancos" />
                    <NavButton icon="settings" label="Ajustes" />
                </div>
            </nav>
        </div>
    );
}

function FilterChip({ label }: { label: string }) {
    return (
        <button className="flex h-9 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-border-light dark:border-border-dark px-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
            <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">{label}</p>
        </button>
    );
}

function KpiCard({ title, value, change, icon, iconColor }: { title: string, value: string, change: string, icon: string, iconColor: string }) {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm border border-border-light dark:border-border-dark">
            <div className="flex justify-between items-start">
                <span className={`material-symbols-outlined ${iconColor} text-[24px]`}>{icon}</span>
                <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">{change}</span>
            </div>
            <div>
                <p className="text-text-sec-light dark:text-text-sec-dark text-xs font-medium uppercase tracking-wide">{title}</p>
                <p className="text-xl font-bold tracking-tight mt-0.5">{value}</p>
            </div>
        </div>
    );
}

function DetailCard({ label, value, trend, trendColor }: { label: string, value: string, trend: string, trendColor: string }) {
    return (
        <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 border border-border-light dark:border-border-dark">
            <p className="text-text-sec-light dark:text-text-sec-dark text-xs font-medium">{label}</p>
            <p className="text-lg font-bold text-text-main-light dark:text-text-main-dark mt-1">{value}</p>
            <p className={`${trendColor} text-xs font-medium mt-1`}>{trend}</p>
        </div>
    );
}

function ProgressBar({ label, percentage, color }: { label: string, percentage: number, color: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between text-sm">
                <span className="font-medium">{label}</span>
                <span className="font-bold">{percentage}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

function TransactionItem({ title, category, amount, date, icon, isIncome = false, isLast = false }: { title: string, category: string, amount: string, date: string, icon: string, isIncome?: boolean, isLast?: boolean }) {
    return (
        <div className={`flex items-center justify-between p-4 ${isLast ? '' : 'border-b border-border-light dark:border-border-dark'} hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}>
            <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${isIncome ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-100 dark:bg-gray-800 text-text-main-light dark:text-text-main-dark'}`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                </div>
                <div>
                    <p className="text-sm font-bold leading-none">{title}</p>
                    <p className="text-xs text-text-sec-light dark:text-text-sec-dark mt-1">{category}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`text-sm font-bold ${isIncome ? 'text-emerald-500' : 'text-text-main-light dark:text-text-main-dark'}`}>{amount}</p>
                <p className="text-xs text-text-sec-light dark:text-text-sec-dark mt-1">{date}</p>
            </div>
        </div>
    );
}

function LegendItem({ color, label }: { color: string, label: string }) {
    return (
        <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <span className="text-xs text-text-sec-light dark:text-text-sec-dark">{label}</span>
        </div>
    );
}

function NavButton({ icon, label, active = false, href = "#" }: { icon: string, label: string, active?: boolean, href?: string }) {
    return (
        <Link href={href} className={`flex flex-col items-center justify-center gap-1 w-16 ${active ? 'text-primary' : 'text-text-sec-light dark:text-text-sec-dark hover:text-primary dark:hover:text-primary transition-colors'}`}>
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
            <span className="text-[10px] font-medium">{label}</span>
        </Link>
    );
}
