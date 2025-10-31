import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Plus, Edit, Trash2, Users, ArrowLeft } from 'lucide-react';

export function SubjectGroupManagement({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const [showForm, setShowForm] = useState(false);

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
            <h1 className="text-xl">SIRHA - Gestión de Materias y Grupos</h1>
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
            Dashboard Admin &gt; Gestión Académica &gt; <span className="text-[#990000]">Materias y Grupos</span>
          </div>
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl text-[#990000]">Gestión de Materias y Grupos (CRUD)</h2>
              <p className="text-sm text-gray-600">Administrar materias, grupos, cupos y profesores asignados</p>
            </div>
            <Button className="bg-[#17C964] hover:bg-green-600 text-white" onClick={() => setShowForm(!showForm)}>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Grupo
            </Button>
          </div>

          {showForm && (
            <div className="mb-6 p-4 border-2 border-[#006FEE] rounded-lg bg-blue-50">
              <h3 className="text-[#990000] mb-4">Nuevo Grupo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm">Materia *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Número de Grupo *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Cupo Máximo *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Profesor Asignado *</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Aula</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
                <div>
                  <label className="text-sm">Semestre</label>
                  <div className="h-10 bg-white border rounded mt-1"></div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button className="bg-[#17C964] hover:bg-green-600 text-white">Guardar</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button>
              </div>
            </div>
          )}

          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Código</TableHead>
                <TableHead>Materia</TableHead>
                <TableHead>Grupo</TableHead>
                <TableHead>Profesor</TableHead>
                <TableHead>Aula</TableHead>
                <TableHead>Cupos</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>IS301</TableCell>
                <TableCell>Matemáticas III</TableCell>
                <TableCell>01</TableCell>
                <TableCell>Prof. Laura Gómez</TableCell>
                <TableCell>B-301</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>28/30</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#17C964] rounded-full" style={{ width: '93%' }}></div>
                    </div>
                  </div>
                </TableCell>
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
                <TableCell>IS301</TableCell>
                <TableCell>Matemáticas III</TableCell>
                <TableCell>02</TableCell>
                <TableCell>Prof. Laura Gómez</TableCell>
                <TableCell>B-302</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>15/30</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#006FEE] rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </TableCell>
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
                <TableCell>IS302</TableCell>
                <TableCell>Programación</TableCell>
                <TableCell>01</TableCell>
                <TableCell>Prof. Diego Silva</TableCell>
                <TableCell>C-105</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>25/25</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#F31260] rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </TableCell>
                <TableCell><Badge className="bg-[#C4841D] text-white">Lleno</Badge></TableCell>
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
                <TableCell>IS302</TableCell>
                <TableCell>Programación</TableCell>
                <TableCell>02</TableCell>
                <TableCell>Prof. Diego Silva</TableCell>
                <TableCell>C-106</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>23/25</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#C4841D] rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </TableCell>
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
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-600">Mostrando 4 de 45 grupos</p>
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
