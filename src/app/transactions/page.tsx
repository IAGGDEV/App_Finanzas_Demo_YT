import Link from "next/link";

export default function TransactionsPage() {
    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">
            {/* Top App Bar */}
            <header className="sticky top-0 z-40 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1">Transacciones</h2>
                <div className="flex items-center gap-3 justify-end">
                    <button className="flex items-center justify-center rounded-full w-10 h-10 bg-transparent text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">checklist_rtl</span>
                    </button>
                    <button className="flex items-center justify-center rounded-full w-10 h-10 bg-transparent text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">ios_share</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col pb-32">
                {/* Search Bar */}
                <div className="px-4 py-3">
                    <label className="flex flex-col w-full">
                        <div className="flex w-full items-stretch rounded-xl h-12 shadow-sm">
                            <div className="text-gray-500 dark:text-[#9dabb9] flex border-none bg-white dark:bg-[#283039] items-center justify-center pl-4 rounded-l-xl">
                                <span className="material-symbols-outlined text-lg">search</span>
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#283039] h-full placeholder:text-gray-400 dark:placeholder:text-[#9dabb9] px-4 rounded-l-none pl-2 text-base font-normal"
                                placeholder="Buscar por nombre, monto..."
                            />
                        </div>
                    </label>
                </div>

                {/* Filters (Chips) */}
                <div className="flex gap-2 px-4 pb-2 overflow-x-auto no-scrollbar items-center">
                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 pl-3 pr-3 transition-colors active:bg-primary/20">
                        <span className="text-primary text-sm font-bold">Este Mes</span>
                        <span className="material-symbols-outlined text-primary text-[18px]">close</span>
                    </button>
                    <FilterChip label="Categoría" />
                    <FilterChip label="Estado" />
                    <FilterChip label="Tipo" />
                </div>

                {/* Quick Add Row */}
                <div className="flex px-4 py-3 sticky top-[65px] z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
                    <button className="flex w-full cursor-pointer items-center justify-between rounded-xl h-12 px-4 bg-primary text-white shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="text-sm font-bold leading-normal tracking-[0.015em]">Nuevo Registro</span>
                        </div>
                        <span className="text-xs font-medium opacity-80 bg-white/20 px-2 py-0.5 rounded">Quick Add</span>
                    </button>
                </div>

                {/* Transaction List */}
                <div className="flex flex-col">
                    <SectionHeader title="Hoy" total="- $345.00" />
                    <TransactionItem
                        title="Starbucks Coffee"
                        amount="- $12.50"
                        category="Comida y Bebida"
                        time="10:42 AM"
                        status="Pagado"
                        icon="restaurant"
                        iconBg="bg-orange-100 dark:bg-orange-500/20"
                        iconColor="text-orange-600 dark:text-orange-400"
                    />
                    <TransactionItem
                        title="AWS Services"
                        amount="- $249.00"
                        category="Infraestructura"
                        time="08:00 AM"
                        status="Pendiente"
                        icon="dns"
                        iconBg="bg-purple-100 dark:bg-purple-500/20"
                        iconColor="text-purple-600 dark:text-purple-400"
                        isPending
                    />

                    <SectionHeader title="Ayer" total="+ $4,850.00" />
                    <TransactionItem
                        title="Stripe Payout"
                        amount="+ $5,200.00"
                        category="Ingresos"
                        time="14 Oct"
                        status="Recibido"
                        icon="attach_money"
                        iconBg="bg-green-100 dark:bg-green-500/20"
                        iconColor="text-green-600 dark:text-green-400"
                        isIncome
                    />
                    <TransactionItem
                        title="American Airlines"
                        amount="- $350.00"
                        category="Viajes"
                        time="14 Oct"
                        status="Pagado"
                        icon="flight"
                        iconBg="bg-blue-100 dark:bg-blue-500/20"
                        iconColor="text-blue-600 dark:text-blue-400"
                    />

                    {/* Selected State Demo */}
                    <div className="group relative flex items-center gap-4 px-4 py-3 bg-primary/10 border-l-4 border-l-primary transition-colors">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            <span className="material-symbols-outlined">check_box</span>
                        </div>
                        <div className="flex flex-1 flex-col justify-center overflow-hidden">
                            <div className="flex justify-between items-start">
                                <p className="truncate text-base font-bold text-slate-900 dark:text-white">Apple Store</p>
                                <p className="text-base font-bold text-slate-900 dark:text-white">- $2,100.00</p>
                            </div>
                            <div className="flex justify-between items-center mt-0.5">
                                <p className="truncate text-sm text-slate-500 dark:text-gray-400">Hardware • 13 Oct</p>
                                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30">
                                    <span className="text-xs font-bold text-red-700 dark:text-red-400">Rechazado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="p-6 flex justify-center">
                    <button className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-2">
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Cargando más transacciones...
                    </button>
                </div>
            </main>

            {/* Bulk Action Floating Bar */}
            <div className="fixed bottom-20 left-4 right-4 z-30">
                <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl shadow-2xl p-2 flex items-center justify-between pl-4 border border-slate-700 dark:border-slate-200">
                    <div className="text-sm font-bold">1 Seleccionado</div>
                    <div className="flex gap-1">
                        <BulkAction icon="category" label="Categ." />
                        <BulkAction icon="check_circle" label="Pagar" />
                        <BulkAction icon="delete" label="Borrar" isDelete />
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-safe">
                <div className="flex h-16 items-center justify-around px-2">
                    <NavButton icon="grid_view" label="Resumen" href="/" />
                    <NavButton icon="bar_chart" label="Reportes" href="/overview" />
                    <div className="relative -top-5">
                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">add</span>
                        </button>
                    </div>
                    <NavButton icon="receipt_long" label="Transacc." active href="/transactions" />
                    <NavButton icon="settings" label="Ajustes" />
                </div>
            </nav>
        </div>
    );
}

function FilterChip({ label }: { label: string }) {
    return (
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#283039] border border-gray-200 dark:border-transparent pl-3 pr-2 shadow-sm">
            <span className="text-slate-700 dark:text-white text-sm font-medium">{label}</span>
            <span className="material-symbols-outlined text-slate-500 dark:text-gray-400 text-[20px]">expand_more</span>
        </button>
    );
}

function SectionHeader({ title, total }: { title: string, total: string }) {
    return (
        <div className="flex justify-between items-end px-4 pb-2 pt-6">
            <h3 className="text-slate-500 dark:text-gray-400 text-sm font-bold uppercase tracking-wider">{title}</h3>
            <span className="text-xs text-slate-400 dark:text-gray-500">{total}</span>
        </div>
    );
}

function TransactionItem({ title, amount, category, time, status, icon, iconBg, iconColor, isIncome = false, isPending = false }: { title: string, amount: string, category: string, time: string, status: string, icon: string, iconBg: string, iconColor: string, isIncome?: boolean, isPending?: boolean }) {
    return (
        <div className="group relative flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#1a222c] transition-colors border-b border-gray-100 dark:border-gray-800">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div className="flex flex-1 flex-col justify-center overflow-hidden">
                <div className="flex justify-between items-start">
                    <p className="truncate text-base font-bold text-slate-900 dark:text-white">{title}</p>
                    <p className={`text-base font-bold ${isIncome ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'}`}>{amount}</p>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                    <p className="truncate text-sm text-slate-500 dark:text-gray-400">{category} • {time}</p>
                    {isPending ? (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-500">{status}</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-green-500 text-[16px]">check_circle</span>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">{status}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function BulkAction({ icon, label, isDelete = false }: { icon: string, label: string, isDelete?: boolean }) {
    return (
        <button className={`p-2 rounded-lg hover:bg-white/10 dark:hover:bg-slate-200 transition-colors flex flex-col items-center gap-0.5 min-w-[60px] ${isDelete ? 'text-red-400 dark:text-red-600' : ''}`}>
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}

function NavButton({ icon, label, active = false, href = "#" }: { icon: string, label: string, active?: boolean, href?: string }) {
    return (
        <Link href={href} className={`flex flex-col items-center justify-center gap-1 w-16 ${active ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary transition-colors'}`}>
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
            <span className="text-[10px] font-medium">{label}</span>
        </Link>
    );
}
