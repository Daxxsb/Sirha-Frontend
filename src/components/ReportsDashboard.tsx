import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FileText, Download, TrendingUp, Users, CheckCircle2, ArrowLeft } from 'lucide-react';

export function ReportsDashboard({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const mostRequestedGroups = [
    { name: 'Prog. G01', value: 45 },
    { name: 'Mat III G03', value: 38 },
    { name: 'BD G01', value: 32 },
    { name: 'Física G02', value: 28 },
    { name: 'Alg. G01', value: 25 },
  ];

  const approvalRate = [
    { name: 'Ing. Sistemas', approved: 65, rejected: 15 },
    { name: 'Ing. Industrial', approved: 58, rejected: 22 },
    { name: 'Ing. Civil', approved: 48, rejected: 18 },
    { name: 'Arquitectura', approved: 52, rejected: 12 },
  ];

  const planProgress = [
    { range: '0-25%', students: 45 },
    { range: '26-50%', students: 120 },
    { range: '51-75%', students: 185 },
    { range: '76-100%', students: 95 },
  ];

  const reassignmentStats = [
    { name: 'Aprobadas', value: 256, color: '#17C964' },
    { name: 'Pendientes', value: 45, color: '#C4841D' },
    { name: 'Rechazadas', value: 38, color: '#F31260' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    onNavigate?.('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center">A</div>
            <h1 className="text-xl">SIRHA - Reportes y Estadísticas</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Admin Usuario</span>
            <Button 
              size="sm" 
              className="bg-white text-[#990000] border border-white font-medium transition-all duration-300 ease-in-out hover:bg-[#990000] hover:text-white hover:border-white hover:scale-105 shadow-md hover:shadow-lg"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>
 
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#990000] p-0 h-auto hover:bg-transparent"
              onClick={() => onNavigate?.('admin-dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver al Dashboard
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Dashboard Admin &gt; <span className="text-[#990000]">Reportes y Estadísticas</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl text-[#990000]">Reportes Generales</h2>
            <p className="text-sm text-gray-600">Análisis estadístico del sistema SIRHA</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar Excel
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#990000]" />
              <span className="text-sm text-gray-600">Total Solicitudes</span>
            </div>
            <div className="text-2xl text-[#990000]">339</div>
            <div className="text-xs text-gray-600">Período 2024-2</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-[#17C964]" />
              <span className="text-sm text-gray-600">Tasa Aprobación</span>
            </div>
            <div className="text-2xl text-[#17C964]">75.5%</div>
            <div className="text-xs text-gray-600">256 aprobadas</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-[#006FEE]" />
              <span className="text-sm text-gray-600">Tiempo Promedio</span>
            </div>
            <div className="text-2xl text-[#006FEE]">2.3</div>
            <div className="text-xs text-gray-600">días en procesar</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-[#990000]" />
              <span className="text-sm text-gray-600">Estudiantes Activos</span>
            </div>
            <div className="text-2xl text-[#990000]">1,245</div>
            <div className="text-xs text-gray-600">Con solicitudes</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#990000]">Grupos Más Solicitados</h3>
              <Button variant="outline" size="sm">
                <Download className="w-3 h-3 mr-1" />
                Exportar
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mostRequestedGroups}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#990000" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#990000]">Tasa Aprobación vs Rechazo por Decanatura</h3>
              <Button variant="outline" size="sm">
                <Download className="w-3 h-3 mr-1" />
                Exportar
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={approvalRate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="approved" fill="#17C964" name="Aprobadas" />
                <Bar dataKey="rejected" fill="#F31260" name="Rechazadas" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#990000]">Avance Promedio Plan de Estudios</h3>
              <Button variant="outline" size="sm">
                <Download className="w-3 h-3 mr-1" />
                Exportar
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={planProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#006FEE" name="Estudiantes" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[#990000]">Estadísticas de Reasignación Global</h3>
              <Button variant="outline" size="sm">
                <Download className="w-3 h-3 mr-1" />
                Exportar
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={reassignmentStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {reassignmentStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg text-[#990000]">Reportes Detallados por Categoría</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#990000] text-white rounded flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div>Reporte por Materia</div>
                  <div className="text-xs text-gray-600">Estadísticas específicas por materia</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Generar Reporte</Button>
            </Card>

            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#990000] text-white rounded flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div>Reporte por Grupo</div>
                  <div className="text-xs text-gray-600">Análisis de ocupación y solicitudes</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Generar Reporte</Button>
            </Card>

            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#990000] text-white rounded flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div>Reporte por Decanatura</div>
                  <div className="text-xs text-gray-600">Comparativa entre facultades</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Generar Reporte</Button>
            </Card>

            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#990000] text-white rounded flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div>Reporte Consolidado Global</div>
                  <div className="text-xs text-gray-600">Vista general del sistema</div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">Generar Reporte</Button>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
