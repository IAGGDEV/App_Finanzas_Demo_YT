import { TrendingUp, Wallet, ArrowUpRight, ArrowDownRight, LayoutDashboard, BarChart3, Settings, LogOut } from "lucide-react";

export default function Home() {
    return (
        <div className="flex h-screen bg-[#0a0a0b]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#111114] flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold gradient-text">FinanzaPro</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                    <NavItem icon={<BarChart3 size={20} />} label="Reportes" />
                    <NavItem icon={<Wallet size={20} />} label="Transacciones" />
                    <NavItem icon={<Settings size={20} />} label="Configuración" />
                </nav>
                <div className="p-4 border-t border-white/5">
                    <button className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white transition-colors w-full">
                        <LogOut size={20} />
                        <span className="font-medium">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Dashboard Financiero</h2>
                        <p className="text-slate-400">Bienvenido de nuevo, Administrador</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20">
                            Nuevo Reporte
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        title="Balance Total"
                        value="$1,245,000"
                        change="+12.5%"
                        isPositive={true}
                        icon={<TrendingUp className="text-emerald-400" />}
                    />
                    <StatCard
                        title="Ingresos Mensuales"
                        value="$84,200"
                        change="+5.2%"
                        isPositive={true}
                        icon={<ArrowUpRight className="text-blue-400" />}
                    />
                    <StatCard
                        title="Gastos Operativos"
                        value="$32,400"
                        change="-2.1%"
                        isPositive={false}
                        icon={<ArrowDownRight className="text-rose-400" />}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-card p-6 min-h-[400px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white">Flujo de Caja Anual</h3>
                            <div className="flex gap-2">
                                <span className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="w-3 h-3 rounded-full bg-blue-500"></span> Ingresos
                                </span>
                                <span className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Ahorros
                                </span>
                            </div>
                        </div>
                        <div className="h-[300px] flex items-end justify-between gap-2 px-4">
                            {/* Mock Chart Bars */}
                            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 70].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                                    <div
                                        className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-lg transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-400"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                    <span className="text-[10px] text-slate-500 mt-2">{['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-6 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-6">Distribución de Gastos</h3>
                        <div className="flex-1 flex flex-col justify-center gap-6">
                            <ExpenseItem label="Operaciones" value="45%" color="bg-blue-500" />
                            <ExpenseItem label="Marketing" value="25%" color="bg-emerald-500" />
                            <ExpenseItem label="Recursos Humanos" value="20%" color="bg-amber-500" />
                            <ExpenseItem label="Otros" value="10%" color="bg-slate-500" />

                            <div className="mt-8 p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                                <p className="text-sm text-blue-400 font-medium leading-relaxed">
                                    💡 Tip de IA: Tus gastos operativos han bajado un 2% este mes. Considera reinvertir en Marketing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function ExpenseItem({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-slate-400">{label}</span>
                <span className="text-white font-bold">{value}</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: value }}></div>
            </div>
        </div>
    );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full font-medium ${active ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}>
            {icon}
            <span>{label}</span>
        </button>
    );
}

function StatCard({ title, value, change, isPositive, icon }: { title: string, value: string, change: string, isPositive: boolean, icon: React.ReactNode }) {
    return (
        <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    {icon}
                </div>
                <span className={`text-sm font-bold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {change}
                </span>
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
        </div>
    );
}
