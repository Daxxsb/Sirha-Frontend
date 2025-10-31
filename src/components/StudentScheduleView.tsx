import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Calendar, Download, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface StudentScheduleViewProps {
  onNavigate?: (screen: string) => void;
}

export function StudentScheduleView({ onNavigate }: StudentScheduleViewProps) {
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
            <h1 className="text-xl font-bold">SIRHA - Mi Horario</h1>
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
        {/* Breadcrumb con botón Volver */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#990000] p-0 h-auto hover:bg-transparent"
              onClick={() => onNavigate?.('student-dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver al Dashboard
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Dashboard Estudiante &gt; <span className="text-[#990000] font-medium">Mi Horario</span>
          </div>
        </div>

        {/* Semester Selector */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Calendar className="w-6 h-6 text-[#990000]" />
              <div>
                <h2 className="text-xl font-semibold text-[#990000]">Consulta de Horario</h2>
                <p className="text-sm text-gray-600">Visualiza tu horario actual y de semestres anteriores</p>
              </div>
            </div>
            <Button 
              variant="outline"
              className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF
            </Button>
          </div>

          {/* Semester Navigation */}
          <div className="flex items-center justify-between mb-6 p-4 border rounded-lg bg-gray-50">
            <Button 
              variant="outline" 
              size="sm"
              className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
            <div className="text-center">
              <div className="text-sm text-gray-600">Semestre Seleccionado</div>
              <div className="text-xl font-bold">2024-2</div>
              <Badge className="bg-[#17C964] text-white mt-1">Semestre Actual</Badge>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              disabled
              className="transition-all duration-200"
            >
              Siguiente
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>

        {/* Current Schedule */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-[#990000] mb-4">Horario 2024-2</h3>
          
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-24 font-semibold">Hora</TableHead>
                <TableHead className="font-semibold">Lunes</TableHead>
                <TableHead className="font-semibold">Martes</TableHead>
                <TableHead className="font-semibold">Miércoles</TableHead>
                <TableHead className="font-semibold">Jueves</TableHead>
                <TableHead className="font-semibold">Viernes</TableHead>
                <TableHead className="font-semibold">Sábado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="bg-gray-50 font-medium">7:00-9:00</TableCell>
                <TableCell className="bg-blue-50">
                  <div className="p-2">
                    <div className="font-medium">Matemáticas III</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: B-301</div>
                    <div className="text-xs text-gray-600">Prof. L. Gómez</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-blue-50">
                  <div className="p-2">
                    <div className="font-medium">Matemáticas III</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: B-301</div>
                    <div className="text-xs text-gray-600">Prof. L. Gómez</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-blue-50">
                  <div className="p-2">
                    <div className="font-medium">Matemáticas III</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: B-301</div>
                    <div className="text-xs text-gray-600">Prof. L. Gómez</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-50 font-medium">9:00-11:00</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-green-50">
                  <div className="p-2">
                    <div className="font-medium">Programación</div>
                    <div className="text-xs text-gray-600">Grupo 02</div>
                    <div className="text-xs text-gray-600">Aula: C-105</div>
                    <div className="text-xs text-gray-600">Prof. D. Silva</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-green-50">
                  <div className="p-2">
                    <div className="font-medium">Programación</div>
                    <div className="text-xs text-gray-600">Grupo 02</div>
                    <div className="text-xs text-gray-600">Aula: C-105</div>
                    <div className="text-xs text-gray-600">Prof. D. Silva</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-50 font-medium">11:00-13:00</TableCell>
                <TableCell className="bg-yellow-50">
                  <div className="p-2">
                    <div className="font-medium">Física II</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: A-202</div>
                    <div className="text-xs text-gray-600">Prof. C. Ruiz</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-yellow-50">
                  <div className="p-2">
                    <div className="font-medium">Física II</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: A-202</div>
                    <div className="text-xs text-gray-600">Prof. C. Ruiz</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-yellow-50">
                  <div className="p-2">
                    <div className="font-medium">Física II</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: A-202</div>
                    <div className="text-xs text-gray-600">Prof. C. Ruiz</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="bg-gray-50 font-medium">14:00-16:00</TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-purple-50">
                  <div className="p-2">
                    <div className="font-medium">Base de Datos</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: C-201</div>
                    <div className="text-xs text-gray-600">Prof. M. Díaz</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell className="bg-purple-50">
                  <div className="p-2">
                    <div className="font-medium">Base de Datos</div>
                    <div className="text-xs text-gray-600">Grupo 01</div>
                    <div className="text-xs text-gray-600">Aula: C-201</div>
                    <div className="text-xs text-gray-600">Prof. M. Díaz</div>
                  </div>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        {/* Previous Semesters */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-[#990000] mb-4">Semestres Anteriores</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer transition-all duration-200">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">2024-1</div>
                <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">Completado</Badge>
              </div>
              <div className="text-sm text-gray-600">5 materias cursadas</div>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full mt-3 transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                Ver Horario
              </Button>
            </Card>

            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer transition-all duration-200">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">2023-2</div>
                <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">Completado</Badge>
              </div>
              <div className="text-sm text-gray-600">6 materias cursadas</div>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full mt-3 transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                Ver Horario
              </Button>
            </Card>

            <Card className="p-4 border-2 hover:border-[#990000] cursor-pointer transition-all duration-200">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">2023-1</div>
                <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">Completado</Badge>
              </div>
              <div className="text-sm text-gray-600">5 materias cursadas</div>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full mt-3 transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                Ver Horario
              </Button>
            </Card>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-[#990000] mb-4">Resumen Académico</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-[#990000]">4</div>
              <div className="text-sm text-gray-600">Materias Activas</div>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-[#990000]">12</div>
              <div className="text-sm text-gray-600">Horas Semanales</div>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-[#990000]">65%</div>
              <div className="text-sm text-gray-600">Progreso del Plan</div>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="text-2xl font-bold text-[#990000]">4.2</div>
              <div className="text-sm text-gray-600">Promedio Acumulado</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}