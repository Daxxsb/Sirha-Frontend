/**
 * GroupCapacityMonitor
 *
 * Interfaz administrativa para monitorear ocupación de grupos y recibir alertas
 * por % de uso (disponible / cerca al 90% / lleno).
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *
 * Comportamiento:
 * - Presenta métricas rápidas, lista de grupos con barras de ocupación y recomendaciones.
 * - handleLogout limpia el estado de sesión del localStorage y redirige.
 *
 * Ejemplo:
 * <GroupCapacityMonitor onNavigate={navigate} />
 */

import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { AlertTriangle, Users, TrendingUp, ArrowLeft } from 'lucide-react';

export function GroupCapacityMonitor({ onNavigate }: { onNavigate?: (screen: string) => void }) {
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
            <h1 className="text-xl">SIRHA - Monitoreo de Carga de Grupos</h1>
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
            Dashboard Admin &gt; Monitoreo y Alertas &gt; <span className="text-[#990000]">Carga de Grupos</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4 bg-red-50">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-[#F31260]" />
              <span className="text-sm text-gray-600">Grupos Llenos</span>
            </div>
            <div className="text-2xl text-[#F31260]">8</div>
            <div className="text-xs text-gray-600">100% capacidad</div>
          </Card>
          <Card className="p-4 bg-yellow-50">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-[#C4841D]" />
              <span className="text-sm text-gray-600">Alerta 90%</span>
            </div>
            <div className="text-2xl text-[#C4841D]">12</div>
            <div className="text-xs text-gray-600">Próximos a llenar</div>
          </Card>
          <Card className="p-4 bg-blue-50">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-[#006FEE]" />
              <span className="text-sm text-gray-600">Ocupación Media</span>
            </div>
            <div className="text-2xl text-[#006FEE]">15</div>
            <div className="text-xs text-gray-600">50-89% capacidad</div>
          </Card>
          <Card className="p-4 bg-green-50">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-[#17C964]" />
              <span className="text-sm text-gray-600">Disponibles</span>
            </div>
            <div className="text-2xl text-[#17C964]">10</div>
            <div className="text-xs text-gray-600">&lt; 50% capacidad</div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl text-[#990000] mb-4">Grupos con Alertas de Capacidad</h2>
          
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Materia</TableHead>
                <TableHead>Grupo</TableHead>
                <TableHead>Profesor</TableHead>
                <TableHead>Cupo</TableHead>
                <TableHead>Ocupación</TableHead>
                <TableHead>Alerta</TableHead>
                <TableHead>Solicitudes Pendientes</TableHead>
                <TableHead className="text-center">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-red-50">
                <TableCell>Programación</TableCell>
                <TableCell>01</TableCell>
                <TableCell>Prof. Diego Silva</TableCell>
                <TableCell>25/25</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#F31260] rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-[#F31260]">100%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#F31260] text-white">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Lleno
                  </Badge>
                </TableCell>
                <TableCell>3 solicitudes</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">Ver Detalles</Button>
                </TableCell>
              </TableRow>
              <TableRow className="bg-yellow-50">
                <TableCell>Matemáticas III</TableCell>
                <TableCell>01</TableCell>
                <TableCell>Prof. Laura Gómez</TableCell>
                <TableCell>28/30</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#C4841D] rounded-full" style={{ width: '93%' }}></div>
                    </div>
                    <span className="text-[#C4841D]">93%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    90%
                  </Badge>
                </TableCell>
                <TableCell>5 solicitudes</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">Ver Detalles</Button>
                </TableCell>
              </TableRow>
              <TableRow className="bg-yellow-50">
                <TableCell>Programación</TableCell>
                <TableCell>02</TableCell>
                <TableCell>Prof. Diego Silva</TableCell>
                <TableCell>23/25</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#C4841D] rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-[#C4841D]">92%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-[#C4841D] text-white">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    90%
                  </Badge>
                </TableCell>
                <TableCell>2 solicitudes</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">Ver Detalles</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Base de Datos</TableCell>
                <TableCell>01</TableCell>
                <TableCell>Prof. Carmen Ruiz</TableCell>
                <TableCell>22/25</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#006FEE] rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <span className="text-[#006FEE]">88%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[#006FEE] border-[#006FEE]">
                    Normal
                  </Badge>
                </TableCell>
                <TableCell>1 solicitud</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">Ver Detalles</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Física II</TableCell>
                <TableCell>02</TableCell>
                <TableCell>Prof. Miguel Torres</TableCell>
                <TableCell>12/30</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-[#17C964] rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="text-[#17C964]">40%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-[#17C964] border-[#17C964]">
                    Disponible
                  </Badge>
                </TableCell>
                <TableCell>0 solicitudes</TableCell>
                <TableCell className="text-center">
                  <Button size="sm" variant="outline">Ver Detalles</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

        <Card className="p-4 border-l-4 border-[#C4841D] bg-yellow-50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#C4841D] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#990000] mb-1">Recomendación del Sistema</h3>
              <p className="text-sm text-gray-700">
                Se detectaron 12 grupos próximos a su capacidad máxima (≥90%). 
                Considere habilitar grupos adicionales o revisar las solicitudes pendientes para distribuir mejor la carga.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
