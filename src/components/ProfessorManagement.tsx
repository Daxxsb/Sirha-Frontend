/**
 * ProfessorManagement
 *
 * Panel RUD para profesores: listar, editar, eliminar y exportar registros.
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *
 * Comportamiento:
 * - Incluye búsqueda, tabla de profesores y acciones por fila.
 * - handleLogout limpia la sesión y redirige al login.
 *
 * Ejemplo:
 * <ProfessorManagement onNavigate={(s) => setScreen(s)} />
 */

import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Edit, Trash2, User, Search, ArrowLeft } from 'lucide-react';

export function ProfessorManagement({ onNavigate }: { onNavigate?: (screen: string) => void }) {
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
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center">
              A
            </div>
            <h1 className="text-xl">SIRHA - Gestión de Profesores</h1>
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
        {/* Breadcrumb */}
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
            Dashboard Admin &gt; Gestión de Usuarios &gt; <span className="text-[#990000]">Profesores</span>
          </div>
        </div>

        {/* Info Alert */}
        <Card className="p-4 border-l-4 border-[#006FEE] bg-blue-50">
          <p className="text-sm text-gray-700">
            <strong>Nota:</strong> Los profesores se registran automáticamente desde el sistema académico institucional. 
            Solo se permite editar información y eliminar registros (RUD - Read, Update, Delete).
          </p>
        </Card>

        {/* Header Actions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl text-[#990000]">Registro de Profesores (RUD)</h2>
              <p className="text-sm text-gray-600">Consultar, actualizar y eliminar registros de profesores</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <Input 
                placeholder="Buscar por nombre, documento o especialidad..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filtros</Button>
            <Button variant="outline">Exportar</Button>
          </div>

          {/* Professor Table */}
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Nombre</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Especialidad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Grupos Asignados</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#990000]" />
                    Prof. Laura Gómez
                  </div>
                </TableCell>
                <TableCell>CC 11223344</TableCell>
                <TableCell>l.gomez@univ.edu</TableCell>
                <TableCell>Matemáticas</TableCell>
                <TableCell><Badge variant="outline">Tiempo Completo</Badge></TableCell>
                <TableCell>3 grupos</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Activo</Badge></TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="text-[#006FEE]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#990000]" />
                    Prof. Diego Silva
                  </div>
                </TableCell>
                <TableCell>CC 44556677</TableCell>
                <TableCell>d.silva@univ.edu</TableCell>
                <TableCell>Programación</TableCell>
                <TableCell><Badge variant="outline">Tiempo Completo</Badge></TableCell>
                <TableCell>4 grupos</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Activo</Badge></TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="text-[#006FEE]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#990000]" />
                    Prof. Carmen Ruiz
                  </div>
                </TableCell>
                <TableCell>CC 77889900</TableCell>
                <TableCell>c.ruiz@univ.edu</TableCell>
                <TableCell>Física</TableCell>
                <TableCell><Badge variant="outline">Cátedra</Badge></TableCell>
                <TableCell>2 grupos</TableCell>
                <TableCell><Badge className="bg-[#17C964] text-white">Activo</Badge></TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="text-[#006FEE]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    Prof. Miguel Torres
                  </div>
                </TableCell>
                <TableCell>CC 22334455</TableCell>
                <TableCell>m.torres@univ.edu</TableCell>
                <TableCell>Química</TableCell>
                <TableCell><Badge variant="outline">Cátedra</Badge></TableCell>
                <TableCell>0 grupos</TableCell>
                <TableCell><Badge variant="outline">Inactivo</Badge></TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button size="sm" variant="outline" className="text-[#006FEE]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Mostrando 4 de 85 profesores</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm" className="bg-[#990000] text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Siguiente</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
