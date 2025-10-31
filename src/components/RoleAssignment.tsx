/**
 * RoleAssignment
 *
 * Herramienta administrativa para asignar y revocar roles de administrador y niveles
 * asociados. Incluye matriz de permisos y lista de administradores actuales.
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *
 * Comportamiento:
 * - Permite seleccionar usuario, justificación y aplicar cambios con confirmación.
 *
 * Ejemplo:
 * <RoleAssignment onNavigate={navigate} />
 */

import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Shield, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

export function RoleAssignment({ onNavigate }: { onNavigate?: (screen: string) => void }) {
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
            <h1 className="text-xl">SIRHA - Asignación de Rol Administrador</h1>
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
            Dashboard Admin &gt; Gestión de Usuarios &gt; <span className="text-[#990000]">Asignación de Roles</span>
          </div>
        </div>

        {/* Warning Alert */}
        <Card className="p-4 border-l-4 border-[#C4841D] bg-yellow-50">
          <p className="text-sm text-gray-700">
            <strong>Advertencia:</strong> Asignar el rol de Administrador otorga privilegios completos sobre el sistema. 
            Esta acción debe ser aprobada por las autoridades competentes.
          </p>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Assign Role Panel */}
          <Card className="p-6">
            <h2 className="text-xl text-[#990000] mb-4">Asignar Rol Administrador</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm">Buscar Usuario</label>
                <div className="h-10 bg-white border rounded mt-1 flex items-center px-3 text-sm text-gray-500">
                  Seleccionar usuario...
                </div>
              </div>

              <div>
                <label className="text-sm">Tipo de Usuario</label>
                <div className="h-10 bg-white border rounded mt-1 flex items-center px-3 text-sm text-gray-500">
                  Seleccionar: Profesor / Decano / Otro
                </div>
              </div>

              <div>
                <label className="text-sm">Nivel de Acceso</label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center p-3 border rounded">
                    <div className="w-4 h-4 border-2 border-[#990000] rounded mr-3"></div>
                    <div className="flex-1">
                      <div>Administrador Total</div>
                      <div className="text-xs text-gray-600">Acceso completo a todas las funcionalidades</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 border rounded">
                    <div className="w-4 h-4 border-2 rounded mr-3"></div>
                    <div className="flex-1">
                      <div>Administrador Académico</div>
                      <div className="text-xs text-gray-600">Solo gestión académica y grupos</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 border rounded">
                    <div className="w-4 h-4 border-2 rounded mr-3"></div>
                    <div className="flex-1">
                      <div>Administrador de Usuarios</div>
                      <div className="text-xs text-gray-600">Solo gestión de usuarios y roles</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm">Justificación *</label>
                <div className="h-20 bg-white border rounded mt-1"></div>
              </div>

              <Button className="w-full bg-[#17C964] hover:bg-green-600 text-white">
                <Shield className="w-4 h-4 mr-2" />
                Asignar Rol Administrador
              </Button>
            </div>
          </Card>

          {/* Current Administrators */}
          <Card className="p-6">
            <h2 className="text-xl text-[#990000] mb-4">Administradores Actuales</h2>
            
            <Table className="border">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead>Usuario</TableHead>
                  <TableHead>Nivel</TableHead>
                  <TableHead className="text-center">Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#990000]" />
                      <div>
                        <div>Admin Principal</div>
                        <div className="text-xs text-gray-600">admin@univ.edu</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#990000] text-white">Total</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="text-xs text-gray-500">Sistema</span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#990000]" />
                      <div>
                        <div>Dr. Roberto Martínez</div>
                        <div className="text-xs text-gray-600">r.martinez@univ.edu</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#006FEE] text-white">Académico</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      Revocar
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#990000]" />
                      <div>
                        <div>Lic. Patricia Vargas</div>
                        <div className="text-xs text-gray-600">p.vargas@univ.edu</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-[#006FEE] text-white">Usuarios</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button size="sm" variant="outline" className="text-[#F31260]">
                      Revocar
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Permissions Matrix */}
        <Card className="p-6">
          <h2 className="text-xl text-[#990000] mb-4">Matriz de Permisos por Rol</h2>
          
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Funcionalidad</TableHead>
                <TableHead className="text-center">Admin Total</TableHead>
                <TableHead className="text-center">Admin Académico</TableHead>
                <TableHead className="text-center">Admin Usuarios</TableHead>
                <TableHead className="text-center">Decano</TableHead>
                <TableHead className="text-center">Estudiante</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Gestionar Usuarios</TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gestionar Materias/Grupos</TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Aprobar Solicitudes</TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Crear Solicitudes</TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ver Reportes</TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-[#17C964] mx-auto" /></TableCell>
                <TableCell className="text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
