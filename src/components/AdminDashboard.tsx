import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Search, Plus, Edit, Trash2, Users, BookOpen, BarChart3, UserCog, AlertCircle, GraduationCap, ArrowLeft } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate?: (screen: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
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
              A
            </div>
            <h1 className="text-xl font-bold">SIRHA - Panel Administrador</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Ing. Roberto Silva (Admin.)</span>
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

      <div className="max-w-7xl mx-auto p-6">
        {/* Breadcrumb con botón Volver - NUEVO */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#990000] p-0 h-auto hover:bg-transparent"
              onClick={() => onNavigate?.('login')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Cambiar Usuario
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Panel Administrador &gt; <span className="text-[#990000] font-medium">Dashboard Principal</span>
          </div>
        </div>

        {/* Accesos Rápidos a Módulos - CON TRANSICIONES AGREGADAS */}
        <Card className="p-6 mb-6">
          <h2 className="text-lg font-semibold text-[#990000] mb-4">Módulos de Gestión</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('student-management')}
            >
              <Users className="w-6 h-6 text-[#006FEE]" />
              <span className="text-sm">Estudiantes</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('dean-management')}
            >
              <UserCog className="w-6 h-6 text-[#17C964]" />
              <span className="text-sm">Decanos</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('professor-management')}
            >
              <GraduationCap className="w-6 h-6 text-[#C4841D]" />
              <span className="text-sm">Profesores</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('role-assignment')}
            >
              <UserCog className="w-6 h-6 text-[#990000]" />
              <span className="text-sm">Roles</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('subject-group-management')}
            >
              <BookOpen className="w-6 h-6 text-[#006FEE]" />
              <span className="text-sm">Materias y Grupos</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('student-group-assignment')}
            >
              <Users className="w-6 h-6 text-[#17C964]" />
              <span className="text-sm">Asignar Estudiantes</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('group-capacity-monitor')}
            >
              <AlertCircle className="w-6 h-6 text-[#F31260]" />
              <span className="text-sm">Alertas</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105"
              onClick={() => onNavigate?.('reports-dashboard')}
            >
              <BarChart3 className="w-6 h-6 text-[#990000]" />
              <span className="text-sm">Reportes</span>
            </Button>
          </div>
        </Card>

        {/* Estadísticas Generales - TODO EL CONTENIDO MANTENIDO */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-6 h-6 text-[#006FEE]" />
            </div>
            <div className="text-2xl font-bold text-[#006FEE]">42</div>
            <div className="text-sm text-gray-600">Materias Activas</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-[#17C964]" />
            </div>
            <div className="text-2xl font-bold text-[#17C964]">156</div>
            <div className="text-sm text-gray-600">Grupos Creados</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-[#C4841D]" />
            </div>
            <div className="text-2xl font-bold text-[#C4841D]">2,340</div>
            <div className="text-sm text-gray-600">Estudiantes Inscritos</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="w-6 h-6 text-[#F31260]" />
            </div>
            <div className="text-2xl font-bold text-[#F31260]">221</div>
            <div className="text-sm text-gray-600">Solicitudes Este Mes</div>
          </Card>
        </div>

        {/* Tabs de Gestión - TODO EL CONTENIDO MANTENIDO */}
        <Tabs defaultValue="materias" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materias">Gestión de Materias</TabsTrigger>
            <TabsTrigger value="grupos">Gestión de Grupos</TabsTrigger>
            <TabsTrigger value="reportes">Reportes</TabsTrigger>
          </TabsList>

          {/* Gestión de Materias - CONTENIDO COMPLETO MANTENIDO */}
          <TabsContent value="materias" className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#990000]">Materias del Programa</h2>
                <Button className="bg-[#17C964] hover:bg-green-600 text-white transition-all duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Materia
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Buscar materia por nombre o código"
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
              </div>

              <Table className="border">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="font-semibold">Código</TableHead>
                    <TableHead className="font-semibold">Nombre</TableHead>
                    <TableHead className="font-semibold">Programa</TableHead>
                    <TableHead className="font-semibold">Créditos</TableHead>
                    <TableHead className="font-semibold">Semestre</TableHead>
                    <TableHead className="font-semibold">Grupos</TableHead>
                    <TableHead className="font-semibold">Estado</TableHead>
                    <TableHead className="font-semibold">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">MAT301</TableCell>
                    <TableCell>Matemáticas III</TableCell>
                    <TableCell className="text-sm">Ing. Sistemas</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>5°</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                        4 grupos
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-[#17C964] text-white">Activa</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-200">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">PROG201</TableCell>
                    <TableCell>Programación Orientada a Objetos</TableCell>
                    <TableCell className="text-sm">Ing. Sistemas</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>4°</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                        3 grupos
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-[#17C964] text-white">Activa</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-200">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-medium">FIS201</TableCell>
                    <TableCell>Física II</TableCell>
                    <TableCell className="text-sm">Ing. Civil</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>3°</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                        5 grupos
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-[#17C964] text-white">Activa</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-200">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Gestión de Grupos - CONTENIDO COMPLETO MANTENIDO */}
          <TabsContent value="grupos" className="space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#990000]">Gestión de Grupos y Cupos</h2>
                <Button className="bg-[#17C964] hover:bg-green-600 text-white transition-all duration-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Grupo
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-1 min-w-[300px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input 
                      placeholder="Buscar por materia o profesor"
                      className="pl-10 h-10"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-[200px] h-10">
                    <SelectValue placeholder="Filtrar por materia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las materias</SelectItem>
                    <SelectItem value="mat301">Matemáticas III</SelectItem>
                    <SelectItem value="prog201">Programación</SelectItem>
                    <SelectItem value="fis201">Física II</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table className="border">
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="font-semibold">Materia</TableHead>
                    <TableHead className="font-semibold">Grupo</TableHead>
                    <TableHead className="font-semibold">Profesor</TableHead>
                    <TableHead className="font-semibold">Horario</TableHead>
                    <TableHead className="font-semibold">Aula</TableHead>
                    <TableHead className="font-semibold">Cupos</TableHead>
                    <TableHead className="font-semibold">Ocupación</TableHead>
                    <TableHead className="font-semibold">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Matemáticas III</div>
                        <div className="text-xs text-gray-500">MAT301</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">01</TableCell>
                    <TableCell className="text-sm">Dr. Carlos López</TableCell>
                    <TableCell className="text-sm">
                      <div>Lun-Mié-Vie</div>
                      <div className="text-xs text-gray-500">7:00-9:00</div>
                    </TableCell>
                    <TableCell>205-A</TableCell>
                    <TableCell className="text-center">
                      <div className="font-medium">30</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm">28/30</div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '93%'}}></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200">
                          <Users className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="font-medium">Matemáticas III</div>
                        <div className="text-xs text-gray-500">MAT301</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">03</TableCell>
                    <TableCell className="text-sm">Dr. Luis Rodríguez</TableCell>
                    <TableCell className="text-sm">
                      <div>Sábado</div>
                      <div className="text-xs text-gray-500">8:00-12:00</div>
                    </TableCell>
                    <TableCell>301-C</TableCell>
                    <TableCell className="text-center">
                      <div className="font-medium">25</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm">17/25</div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline" className="transition-all duration-200 hover:bg-[#990000] hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200">
                          <Users className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Reportes - CONTENIDO COMPLETO MANTENIDO */}
          <TabsContent value="reportes" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-[#990000] mb-4">Estado de Solicitudes (Últimos 30 días)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Aprobadas</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#17C964] h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-sm font-medium">156 (70%)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Rechazadas</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#F31260] h-2 rounded-full" style={{width: '19%'}}></div>
                      </div>
                      <span className="text-sm font-medium">42 (19%)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pendientes</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C4841D] h-2 rounded-full" style={{width: '11%'}}></div>
                      </div>
                      <span className="text-sm font-medium">23 (11%)</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-[#990000] mb-4">Materias Más Solicitadas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Matemáticas III</span>
                    <Badge className="bg-[#006FEE] text-white">45 solicitudes</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Programación</span>
                    <Badge className="bg-[#006FEE] text-white">38 solicitudes</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Física II</span>
                    <Badge className="bg-[#006FEE] text-white">32 solicitudes</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Cálculo II</span>
                    <Badge className="bg-[#006FEE] text-white">28 solicitudes</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-[#990000] mb-4">Ocupación por Programa</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ing. Sistemas</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#17C964] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ing. Industrial</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#C4841D] h-2 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ing. Civil</span>
                      <span>72%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#006FEE] h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-[#990000] mb-4">Resumen Mensual</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#17C964]">221</div>
                    <div className="text-xs text-gray-600">Total Solicitudes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#006FEE]">2.3</div>
                    <div className="text-xs text-gray-600">Días Promedio</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C4841D]">94%</div>
                    <div className="text-xs text-gray-600">Tasa Resolución</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F31260]">12</div>
                    <div className="text-xs text-gray-600">Grupos Llenos</div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}