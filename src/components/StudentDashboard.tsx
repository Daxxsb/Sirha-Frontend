import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Calendar, TrendingUp, BookOpen, ClipboardList, Clock, Eye } from 'lucide-react';

interface StudentDashboardProps {
  onNavigate?: (screen: string) => void;
}

export function StudentDashboard({ onNavigate }: StudentDashboardProps) {
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    onNavigate?.('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center font-bold">
              S
            </div>
            <h1 className="text-xl font-bold">SIRHA - Panel Estudiante</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Juan Pérez (Est.)</span>
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
        {/* Accesos Rápidos - CORREGIDO */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Button 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-105"
            onClick={() => onNavigate?.('student-schedule-view')}
          >
            <Calendar className="w-5 h-5 text-[#990000]" />
            <span className="text-xs">Mi Horario</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-105"
            onClick={() => onNavigate?.('create-request-form')}
          >
            <ClipboardList className="w-5 h-5 text-[#17C964]" />
            <span className="text-xs">Nueva Solicitud</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-105"
            onClick={() => onNavigate?.('request-history')} // ✅ CAMBIADO: Ahora va al historial completo
          >
            <Clock className="w-5 h-5 text-[#C4841D]" />
            <span className="text-xs">Mis Solicitudes</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-105"
            onClick={() => onNavigate?.('academic-traffic-light')}
          >
            <TrendingUp className="w-5 h-5 text-[#006FEE]" />
            <span className="text-xs">Semáforo</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-105"
            onClick={() => onNavigate?.('academic-history')}
          >
            <BookOpen className="w-5 h-5 text-[#990000]" />
            <span className="text-xs">Historial</span>
          </Button>
        </div>

        {/* Horario Actual */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#990000]">Mi Horario Actual</h2>
            <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
              Semestre 2024-2
            </Badge>
          </div>
          
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold">Hora</TableHead>
                <TableHead className="font-semibold">Lunes</TableHead>
                <TableHead className="font-semibold">Martes</TableHead>
                <TableHead className="font-semibold">Miércoles</TableHead>
                <TableHead className="font-semibold">Jueves</TableHead>
                <TableHead className="font-semibold">Viernes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">7:00-9:00</TableCell>
                <TableCell className="bg-blue-50">Matemáticas III<br/><small>Grupo 01</small></TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-blue-50">Matemáticas III<br/><small>Grupo 01</small></TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-blue-50">Matemáticas III<br/><small>Grupo 01</small></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">9:00-11:00</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-green-50">Programación<br/><small>Grupo 02</small></TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-green-50">Programación<br/><small>Grupo 02</small></TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">11:00-13:00</TableCell>
                <TableCell className="bg-yellow-50">Física II<br/><small>Grupo 01</small></TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-yellow-50">Física II<br/><small>Grupo 01</small></TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-yellow-50">Física II<br/><small>Grupo 01</small></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        {/* Solicitudes y Nueva Solicitud */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Nueva Solicitud */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-[#990000] mb-4">Nueva Solicitud</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Solicita el cambio de grupo para alguna de tus materias registradas.
            </p>
            <Button 
              className="w-full bg-[#17C964] hover:bg-green-600 text-white font-semibold transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('create-request-form')}
            >
              + Crear Solicitud
            </Button>
          </Card>

          {/* Mis Solicitudes */}
          <Card className="md:col-span-2 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#990000]">Mis Solicitudes</h3>
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
                onClick={() => onNavigate?.('request-history')} // ✅ CORRECTO: Ya va al historial
              >
                Ver todas
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">Matemáticas III</div>
                  <div className="text-sm text-gray-600">Grupo 01 → Grupo 03</div>
                  <div className="text-xs text-gray-500">Enviado: 15/Sep/2024</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="transition-all duration-200 hover:scale-110"
                    onClick={() => onNavigate?.('request-status')} // ✅ CORRECTO: Va al detalle específico
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">Programación</div>
                  <div className="text-sm text-gray-600">Grupo 02 → Grupo 01</div>
                  <div className="text-xs text-gray-500">Enviado: 10/Sep/2024</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="transition-all duration-200 hover:scale-110"
                    onClick={() => onNavigate?.('request-status')} // ✅ CORRECTO: Va al detalle específico
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">Física II</div>
                  <div className="text-sm text-gray-600">Grupo 01 → Grupo 02</div>
                  <div className="text-xs text-gray-500">Enviado: 8/Sep/2024</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-[#F31260] text-white">Rechazada</Badge>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="transition-all duration-200 hover:scale-110"
                    onClick={() => onNavigate?.('request-status')} // ✅ CORRECTO: Va al detalle específico
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}