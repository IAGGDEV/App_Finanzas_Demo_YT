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

                {/* Charts Mockup Placeholder */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="glass-card p-6 h-[400px] flex flex-col justify-center items-center text-slate-500">
                        <BarChart3 size={48} className="mb-4 opacity-20" />
                        <p>Visualización de Gráfico de Flujo de Caja</p>
                    </div>
                    <div className="glass-card p-6 h-[400px] flex flex-col justify-center items-center text-slate-500">
                        <TrendingUp size={48} className="mb-4 opacity-20" />
                        <p>Análisis de Gastos por Categoría</p>
                    </div>
                </div>
            </main>
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
