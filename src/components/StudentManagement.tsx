import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Plus, Edit, Trash2, Search, ArrowLeft } from 'lucide-react';

/**
 * StudentManagement
 *
 * Interfaz administrativa para crear, editar y eliminar estudiantes (CRUD).
 * Incluye búsqueda, formulario de alta rápido y tabla con paginación.
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *
 * Comportamiento:
 * - showForm controla la visibilidad del formulario de creación.
 * - handleLogout limpia sesión en localStorage.
 *
 * Ejemplo:
 * <StudentManagement onNavigate={navigate} />
 */

export function StudentManagement({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [showForm, setShowForm] = useState(false);

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
            <h1 className="text-xl">SIRHA - Gestión de Estudiantes</h1>
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
            Dashboard Admin &gt; Gestión de Usuarios &gt; <span className="text-[#990000]">Estudiantes</span>
          </div>
        </div>

        {/* Header Actions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl text-[#990000]">Gestión de Estudiantes (CRUD)</h2>
              <p className="text-sm text-gray-600">Crear, editar y eliminar registros de estudiantes</p>
            </div>
            <Button 
              className="bg-[#17C964] hover:bg-green-600 text-white"
              onClick={() => setShowForm(!showForm)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Estudiante
            </Button>
          </div>

          {/* Search Bar */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <Input 
                placeholder="Buscar por nombre, código o documento..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filtros</Button>
          </div>

          {/* Form (Condicional) */}
          {showForm && (
            <div className="mb-6 p-4 border-2 border-[#006FEE] rounded-lg bg-blue-50">
              <h3 className="text-[#990000] mb-4">Nuevo Estudiante</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm">Código Estudiante *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Nombre Completo *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Documento *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Email Institucional *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Facultad *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Programa *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button className="bg-[#17C964] hover:bg-green-600 text-white">
                  Guardar
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {/* Student Table */}
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Código</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Programa</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>EST001</TableCell>
                <TableCell>Juan Pérez García</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>juan.perez@univ.edu</TableCell>
                <TableCell>Ing. Sistemas</TableCell>
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
                <TableCell>EST002</TableCell>
                <TableCell>María López Torres</TableCell>
                <TableCell>0987654321</TableCell>
                <TableCell>maria.lopez@univ.edu</TableCell>
                <TableCell>Ing. Industrial</TableCell>
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
                <TableCell>EST003</TableCell>
                <TableCell>Carlos Ramírez Cruz</TableCell>
                <TableCell>1122334455</TableCell>
                <TableCell>carlos.ramirez@univ.edu</TableCell>
                <TableCell>Ing. Civil</TableCell>
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
            <p className="text-sm text-gray-600">Mostrando 3 de 127 estudiantes</p>
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
