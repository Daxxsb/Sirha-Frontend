/**
 * AcademicHistory
 *
 * Componente presentación que muestra el historial académico del estudiante.
 * Documenta materias cursadas, créditos, notas y progreso del plan de estudios.
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *   Función opcional para navegar a otras pantallas dentro del wireframe.
 *
 * Comportamiento:
 * - Es un componente de UI (sin lógica de negocio compleja).
 * - Recibe callbacks de navegación para integrarse con el sistema de routing interno.
 *
 * Ejemplo de uso:
 * <AcademicHistory onNavigate={(screen) => setScreen(screen)} />
 */

import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { BookOpen, Download, Filter, ArrowLeft } from 'lucide-react';

interface AcademicHistoryProps {
  onNavigate?: (screen: string) => void;
}

export function AcademicHistory({ onNavigate }: AcademicHistoryProps) {
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
            <h1 className="text-xl font-bold">SIRHA - Historial Académico</h1>
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
            Dashboard Estudiante &gt; <span className="text-[#990000] font-medium">Historial Académico</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Materias Cursadas</div>
            <div className="text-2xl font-bold text-[#990000]">36</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Promedio General</div>
            <div className="text-2xl font-bold text-[#17C964]">4.2</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Créditos Aprobados</div>
            <div className="text-2xl font-bold text-[#990000]">128</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Créditos Totales</div>
            <div className="text-2xl font-bold text-gray-600">196</div>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#990000]" />
              <div>
                <h2 className="text-xl font-semibold text-[#990000]">Historial de Materias Cursadas</h2>
                <p className="text-sm text-gray-600">Consulta todas las materias con sus calificaciones</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button 
                variant="outline"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Academic History Table */}
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold">Semestre</TableHead>
                <TableHead className="font-semibold">Código</TableHead>
                <TableHead className="font-semibold">Materia</TableHead>
                <TableHead className="font-semibold">Créditos</TableHead>
                <TableHead className="font-semibold">Calificación</TableHead>
                <TableHead className="font-semibold">Estado</TableHead>
                <TableHead className="font-semibold">Profesor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Semester 2024-1 */}
              <TableRow className="bg-blue-50">
                <TableCell colSpan={7}>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">2024-1</div>
                    <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                      Promedio: 4.1
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS401</TableCell>
                <TableCell>Sistemas Operativos</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.5</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. M. Díaz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS402</TableCell>
                <TableCell>Algoritmos Avanzados</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.2</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. L. Gómez</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS403</TableCell>
                <TableCell>Arquitectura de Software</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">3.8</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. D. Silva</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS404</TableCell>
                <TableCell>Gestión de Proyectos</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.0</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. A. Vargas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">HU201</TableCell>
                <TableCell>Ética Profesional</TableCell>
                <TableCell>2</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.5</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. R. Castro</TableCell>
              </TableRow>

              {/* Semester 2023-2 */}
              <TableRow className="bg-blue-50">
                <TableCell colSpan={7}>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">2023-2</div>
                    <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                      Promedio: 4.3
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS301</TableCell>
                <TableCell>Base de Datos II</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.7</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. C. Ruiz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS302</TableCell>
                <TableCell>Desarrollo Web</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.5</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. D. Silva</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS303</TableCell>
                <TableCell>Redes de Computadores</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">3.9</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. J. Mendoza</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">MT301</TableCell>
                <TableCell>Estadística II</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.2</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. L. Gómez</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS304</TableCell>
                <TableCell>Seguridad Informática</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.1</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. P. López</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">EL101</TableCell>
                <TableCell>Inglés Técnico</TableCell>
                <TableCell>2</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.6</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. M. Brown</TableCell>
              </TableRow>

              {/* Semester 2023-1 - Materia Reprobada */}
              <TableRow className="bg-blue-50">
                <TableCell colSpan={7}>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">2023-1</div>
                    <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                      Promedio: 3.5
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS201</TableCell>
                <TableCell>Estructuras de Datos</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">4.0</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. D. Silva</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">IS202</TableCell>
                <TableCell>Teoría de Autómatas</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-[#F31260] font-medium">2.8</TableCell>
                <TableCell><Badge className="bg-[#F31260] text-white">Reprobada</Badge></TableCell>
                <TableCell>Prof. R. Gutiérrez</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="font-medium">MT201</TableCell>
                <TableCell>Cálculo Vectorial</TableCell>
                <TableCell>4</TableCell>
                <TableCell className="text-[#17C964] font-medium">3.7</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Aprobada</Badge></TableCell>
                <TableCell>Prof. L. Gómez</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Mostrando 16 de 36 materias</p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                Anterior
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-[#990000] text-white transition-all duration-200 hover:bg-[#770000]"
              >
                1
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                2
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                3
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
              >
                Siguiente
              </Button>
            </div>
          </div>
        </Card>

        {/* Legend */}
        <Card className="p-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
              <span className="text-gray-600">Calificación ≥ 3.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#F31260] text-white">Reprobada</Badge>
              <span className="text-gray-600">Calificación &lt; 3.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#006FEE] text-white">En Curso</Badge>
              <span className="text-gray-600">Semestre actual</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}