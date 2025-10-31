import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { UserPlus, UserMinus, Search, ArrowLeft } from 'lucide-react';

export function StudentGroupAssignment({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [activeTab, setActiveTab] = useState('assign');

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
            <h1 className="text-xl">SIRHA - Asignación de Estudiantes</h1>
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
            Dashboard Admin &gt; Gestión de Asignaciones &gt; <span className="text-[#990000]">Estudiantes</span>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-xl text-[#990000] mb-4">Gestión de Asignación de Estudiantes</h2>
          
          <div className="flex gap-2 mb-6">
            <Button 
              className={activeTab === 'assign' ? 'bg-[#990000] text-white' : 'bg-white'}
              variant={activeTab === 'assign' ? 'default' : 'outline'}
              onClick={() => setActiveTab('assign')}
            >
              <UserPlus className="w-4 h-4 mr-2" />
              Asignar a Grupo
            </Button>
            <Button 
              className={activeTab === 'remove' ? 'bg-[#990000] text-white' : 'bg-white'}
              variant={activeTab === 'remove' ? 'default' : 'outline'}
              onClick={() => setActiveTab('remove')}
            >
              <UserMinus className="w-4 h-4 mr-2" />
              Retirar de Grupo
            </Button>
          </div>

          {activeTab === 'assign' && (
            <div className="space-y-6">
              <Card className="p-4 border-2 border-[#006FEE] bg-blue-50">
                <h3 className="text-[#990000] mb-4">Asignar Estudiante a Grupo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm mb-1 block">Estudiante *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      <Search className="w-4 h-4 mr-2" />
                      Buscar estudiante por código o nombre...
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">Semestre *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      Seleccionar semestre...
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">Materia *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      Seleccionar materia...
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">Grupo *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      Seleccionar grupo...
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white border rounded">
                  <div className="text-sm text-gray-600 mb-2">Vista Previa</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-600">Estudiante:</span>
                      <span className="ml-2">Juan Pérez (EST001)</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Grupo:</span>
                      <span className="ml-2">Matemáticas III - Grupo 01</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Profesor:</span>
                      <span className="ml-2">Prof. Laura Gómez</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Cupos disponibles:</span>
                      <span className="ml-2 text-[#17C964]">2 de 30</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button className="bg-[#17C964] hover:bg-green-600 text-white">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Asignar Estudiante
                  </Button>
                  <Button variant="outline">Cancelar</Button>
                </div>
              </Card>

              <div>
                <h3 className="text-lg text-[#990000] mb-3">Asignaciones Recientes</h3>
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estudiante</TableHead>
                      <TableHead>Materia</TableHead>
                      <TableHead>Grupo</TableHead>
                      <TableHead>Responsable</TableHead>
                      <TableHead>Estado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>26/Oct/2024 10:30</TableCell>
                      <TableCell>María López (EST002)</TableCell>
                      <TableCell>Programación</TableCell>
                      <TableCell>Grupo 02</TableCell>
                      <TableCell>Admin Usuario</TableCell>
                      <TableCell><Badge className="bg-[#17C964] text-white">Completado</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>26/Oct/2024 09:15</TableCell>
                      <TableCell>Carlos Ramírez (EST003)</TableCell>
                      <TableCell>Base de Datos</TableCell>
                      <TableCell>Grupo 01</TableCell>
                      <TableCell>Admin Usuario</TableCell>
                      <TableCell><Badge className="bg-[#17C964] text-white">Completado</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === 'remove' && (
            <div className="space-y-6">
              <Card className="p-4 border-2 border-[#F31260] bg-red-50">
                <h3 className="text-[#990000] mb-4">Retirar Estudiante de Grupo o Materia</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm mb-1 block">Estudiante *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      <Search className="w-4 h-4 mr-2" />
                      Buscar estudiante por código o nombre...
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-1 block">Semestre *</label>
                    <div className="h-10 bg-white border rounded flex items-center px-3 text-sm text-gray-500">
                      Seleccionar semestre...
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm mb-2 block">Grupos Actuales del Estudiante</label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white border rounded">
                      <div>
                        <div>Matemáticas III - Grupo 01</div>
                        <div className="text-xs text-gray-600">Prof. Laura Gómez - L-M-V 7:00-9:00</div>
                      </div>
                      <div className="w-4 h-4 border-2 border-[#990000] rounded"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border rounded">
                      <div>
                        <div>Programación - Grupo 02</div>
                        <div className="text-xs text-gray-600">Prof. Diego Silva - Ma-J 9:00-11:00</div>
                      </div>
                      <div className="w-4 h-4 border-2 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border rounded">
                      <div>
                        <div>Física II - Grupo 01</div>
                        <div className="text-xs text-gray-600">Prof. Carmen Ruiz - L-Mi-V 11:00-13:00</div>
                      </div>
                      <div className="w-4 h-4 border-2 rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm mb-1 block">Motivo del Retiro *</label>
                  <div className="h-20 bg-white border rounded"></div>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button className="bg-[#F31260] hover:bg-red-700 text-white">
                    <UserMinus className="w-4 h-4 mr-2" />
                    Retirar Estudiante
                  </Button>
                  <Button variant="outline">Cancelar</Button>
                </div>
              </Card>

              <Card className="p-4 border-l-4 border-[#C4841D] bg-yellow-50">
                <p className="text-sm text-gray-700">
                  <strong>Advertencia:</strong> El retiro de un estudiante de un grupo o materia es una acción irreversible. 
                  Asegúrese de verificar la información antes de proceder.
                </p>
              </Card>

              <div>
                <h3 className="text-lg text-[#990000] mb-3">Retiros Recientes</h3>
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estudiante</TableHead>
                      <TableHead>Materia</TableHead>
                      <TableHead>Grupo</TableHead>
                      <TableHead>Motivo</TableHead>
                      <TableHead>Responsable</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>25/Oct/2024 14:20</TableCell>
                      <TableCell>Pedro González (EST015)</TableCell>
                      <TableCell>Algoritmos</TableCell>
                      <TableCell>Grupo 03</TableCell>
                      <TableCell>Cambio de programa</TableCell>
                      <TableCell>Admin Usuario</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>24/Oct/2024 11:45</TableCell>
                      <TableCell>Ana Martínez (EST022)</TableCell>
                      <TableCell>Física II</TableCell>
                      <TableCell>Grupo 02</TableCell>
                      <TableCell>Duplicidad de matrícula</TableCell>
                      <TableCell>Admin Usuario</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
