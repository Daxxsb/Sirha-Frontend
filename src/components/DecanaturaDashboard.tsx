import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Eye, Check, X } from 'lucide-react';

interface DecanaturaDashboardProps {
  onNavigate?: (screen: string) => void;
}

export function DecanaturaDashboard({ onNavigate }: DecanaturaDashboardProps) {
  const handleLogout = () => {
    // Limpiar localStorage al cerrar sesión
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
              D
            </div>
            <h1 className="text-xl font-bold">SIRHA - Panel Decanatura</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Dra. María González (Dec.)</span>
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
        {/* Estadísticas Rápidas */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-[#C4841D]">23</div>
            <div className="text-sm text-gray-600">Pendientes</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-[#17C964]">156</div>
            <div className="text-sm text-gray-600">Aprobadas</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-[#F31260]">42</div>
            <div className="text-sm text-gray-600">Rechazadas</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-[#006FEE]">221</div>
            <div className="text-sm text-gray-600">Total</div>
          </Card>
        </div>

        {/* Filtros y Búsqueda */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-[#990000] mb-4">Solicitudes Pendientes</h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar por nombre o código del estudiante"
                  className="pl-10 h-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[200px] h-10">
                <SelectValue placeholder="Filtrar por programa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los programas</SelectItem>
                <SelectItem value="sistemas">Ing. Sistemas</SelectItem>
                <SelectItem value="industrial">Ing. Industrial</SelectItem>
                <SelectItem value="civil">Ing. Civil</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[150px] h-10">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pendientes</SelectItem>
                <SelectItem value="approved">Aprobadas</SelectItem>
                <SelectItem value="rejected">Rechazadas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabla de Solicitudes */}
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-semibold">Fecha</TableHead>
                <TableHead className="font-semibold">Estudiante</TableHead>
                <TableHead className="font-semibold">Programa</TableHead>
                <TableHead className="font-semibold">Materia</TableHead>
                <TableHead className="font-semibold">Cambio</TableHead>
                <TableHead className="font-semibold">Estado</TableHead>
                <TableHead className="font-semibold">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>15/Sep/2024</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">Juan Pérez G.</div>
                    <div className="text-sm text-gray-600">2024001234</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">Ing. Sistemas</TableCell>
                <TableCell>Matemáticas III</TableCell>
                <TableCell className="text-sm">
                  <div>Grupo 01 → Grupo 03</div>
                  <div className="text-xs text-gray-500">Lun-Mié-Vie → Sáb</div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                      onClick={() => onNavigate?.('request-detail')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#17C964] hover:bg-green-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#F31260] hover:bg-red-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>14/Sep/2024</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">Ana López M.</div>
                    <div className="text-sm text-gray-600">2024001235</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">Ing. Industrial</TableCell>
                <TableCell>Física II</TableCell>
                <TableCell className="text-sm">
                  <div>Grupo 02 → Grupo 01</div>
                  <div className="text-xs text-gray-500">Mar-Jue → Lun-Mié-Vie</div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                      onClick={() => onNavigate?.('request-detail')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#17C964] hover:bg-green-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#F31260] hover:bg-red-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>13/Sep/2024</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">Carlos Ruiz S.</div>
                    <div className="text-sm text-gray-600">2024001236</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm">Ing. Civil</TableCell>
                <TableCell>Programación</TableCell>
                <TableCell className="text-sm">
                  <div>Grupo 01 → Grupo 02</div>
                  <div className="text-xs text-gray-500">Lun-Mié → Mar-Jue</div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                      onClick={() => onNavigate?.('request-detail')}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#17C964] hover:bg-green-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-[#F31260] hover:bg-red-600 text-white transition-all duration-200 hover:scale-105"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Paginación */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">
              Mostrando 1-3 de 23 solicitudes
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="outline" size="sm" className="bg-[#990000] text-white transition-all duration-200 hover:bg-[#770000]">1</Button>
              <Button variant="outline" size="sm" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">2</Button>
              <Button variant="outline" size="sm" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">3</Button>
              <Button variant="outline" size="sm" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">Siguiente</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}