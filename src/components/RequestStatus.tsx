import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Search, Eye, Filter, ArrowLeft } from 'lucide-react';

interface RequestStatusProps {
  onNavigate?: (screen: string) => void;
}

export function RequestStatus({ onNavigate }: RequestStatusProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center">
              S
            </div>
            <h1 className="text-xl">SIRHA - Estado de Solicitudes</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Juan Pérez (Est.)</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white hover:bg-white hover:text-[#990000]"
              onClick={() => onNavigate?.('login')}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#990000] p-0 h-auto"
            onClick={() => onNavigate?.('student-dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver al Dashboard
          </Button>
        </div>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600">
          Dashboard Estudiante &gt; Solicitudes &gt; <span className="text-[#990000]">Estado de Solicitudes</span>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4 border-l-4 border-[#C4841D]">
            <div className="text-sm text-gray-600 mb-1">Pendientes</div>
            <div className="text-2xl text-[#C4841D]">2</div>
          </Card>
          <Card className="p-4 border-l-4 border-[#17C964]">
            <div className="text-sm text-gray-600 mb-1">Aprobadas</div>
            <div className="text-2xl text-[#17C964]">5</div>
          </Card>
          <Card className="p-4 border-l-4 border-[#F31260]">
            <div className="text-sm text-gray-600 mb-1">Rechazadas</div>
            <div className="text-2xl text-[#F31260]">1</div>
          </Card>
          <Card className="p-4 border-l-4 border-[#006FEE]">
            <div className="text-sm text-gray-600 mb-1">En Revisión</div>
            <div className="text-2xl text-[#006FEE]">1</div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <h2 className="text-xl text-[#990000] mb-4">Consulta del Estado de las Solicitudes</h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2">
              <label className="text-sm mb-1 block">Buscar</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <Input placeholder="Buscar por materia o código..." className="pl-10" />
              </div>
            </div>
            <div>
              <label className="text-sm mb-1 block">Estado</label>
              <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                Todos
              </div>
            </div>
            <div>
              <label className="text-sm mb-1 block">Fecha</label>
              <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                Rango de fechas
              </div>
            </div>
          </div>

          {/* Requests Table */}
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Código</TableHead>
                <TableHead>Materia</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Cambio Solicitado</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-center">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SOL-2024-089</TableCell>
                <TableCell>Matemáticas III</TableCell>
                <TableCell><Badge variant="outline">Cambio de Grupo</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">Grupo 01 → Grupo 03</div>
                </TableCell>
                <TableCell>15/Sep/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SOL-2024-088</TableCell>
                <TableCell>Base de Datos</TableCell>
                <TableCell><Badge variant="outline">Cambio de Grupo</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">Grupo 02 → Grupo 01</div>
                </TableCell>
                <TableCell>12/Sep/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#006FEE] text-white">En Revisión</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SOL-2024-087</TableCell>
                <TableCell>Programación</TableCell>
                <TableCell><Badge variant="outline">Cambio de Grupo</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">Grupo 02 → Grupo 01</div>
                </TableCell>
                <TableCell>10/Sep/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SOL-2024-086</TableCell>
                <TableCell>Física II</TableCell>
                <TableCell><Badge variant="outline">Cambio de Grupo</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">Grupo 01 → Grupo 02</div>
                </TableCell>
                <TableCell>08/Sep/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#F31260] text-white">Rechazada</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SOL-2024-070</TableCell>
                <TableCell>Algoritmos</TableCell>
                <TableCell><Badge variant="outline">Cambio de Grupo</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">Grupo 03 → Grupo 01</div>
                </TableCell>
                <TableCell>25/Ago/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SOL-2024-065</TableCell>
                <TableCell>Base de Datos I</TableCell>
                <TableCell><Badge variant="outline">Cambio de Materia</Badge></TableCell>
                <TableCell>
                  <div className="text-sm">BD I → Electiva Técnica</div>
                </TableCell>
                <TableCell>22/Ago/2024</TableCell>
                <TableCell>
                  <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Mostrando 6 de 9 solicitudes</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm" className="bg-[#990000] text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Siguiente</Button>
            </div>
          </div>
        </Card>

        {/* Legend */}
        <Card className="p-4">
          <h3 className="text-sm mb-3">Estados de Solicitud</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
              <span className="text-gray-600">Esperando revisión de decanatura</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#006FEE] text-white">En Revisión</Badge>
              <span className="text-gray-600">Siendo evaluada por decanatura</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
              <span className="text-gray-600">Solicitud aceptada</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#F31260] text-white">Rechazada</Badge>
              <span className="text-gray-600">Solicitud denegada</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
