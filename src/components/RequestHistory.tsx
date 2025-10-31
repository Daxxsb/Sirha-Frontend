import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Clock, Eye, FileText, ArrowLeft } from 'lucide-react';

interface RequestHistoryProps {
  onNavigate?: (screen: string) => void;
}

export function RequestHistory({ onNavigate }: RequestHistoryProps) {
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
            <h1 className="text-xl font-bold">SIRHA - Historial de Solicitudes</h1>
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
            Dashboard Estudiante &gt; Solicitudes &gt; <span className="text-[#990000] font-medium">Historial</span>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-5 gap-4">
          <Card className="p-4 bg-gray-100 text-center">
            <div className="text-sm text-gray-600 mb-1">Total Solicitudes</div>
            <div className="text-2xl font-bold text-[#990000]">9</div>
          </Card>
          <Card className="p-4 bg-green-50 text-center">
            <div className="text-sm text-gray-600 mb-1">Aprobadas</div>
            <div className="text-2xl font-bold text-[#17C964]">5</div>
            <div className="text-xs text-gray-600">55.6%</div>
          </Card>
          <Card className="p-4 bg-red-50 text-center">
            <div className="text-sm text-gray-600 mb-1">Rechazadas</div>
            <div className="text-2xl font-bold text-[#F31260]">1</div>
            <div className="text-xs text-gray-600">11.1%</div>
          </Card>
          <Card className="p-4 bg-yellow-50 text-center">
            <div className="text-sm text-gray-600 mb-1">Pendientes</div>
            <div className="text-2xl font-bold text-[#C4841D]">2</div>
            <div className="text-xs text-gray-600">22.2%</div>
          </Card>
          <Card className="p-4 bg-blue-50 text-center">
            <div className="text-sm text-gray-600 mb-1">En Revisión</div>
            <div className="text-2xl font-bold text-[#006FEE]">1</div>
            <div className="text-xs text-gray-600">11.1%</div>
          </Card>
        </div>

        {/* History */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#990000]" />
            <div>
              <h2 className="text-xl font-semibold text-[#990000]">Historial de Solicitudes del Estudiante</h2>
              <p className="text-sm text-gray-600">Registro completo de todas las solicitudes realizadas</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {/* Request 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#C4841D] rounded-full"></div>
                <div className="w-0.5 h-full bg-gray-200"></div>
              </div>
              <Card className="flex-1 p-4 border-l-4 border-[#C4841D]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-[#990000]" />
                      <span className="font-medium">SOL-2024-089</span>
                      <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
                    </div>
                    <h3 className="text-[#990000] font-semibold">Cambio de Grupo - Matemáticas III</h3>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                    onClick={() => onNavigate?.('request-status')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalle
                  </Button>
                </div>
                <div className="text-sm space-y-1 text-gray-600">
                  <div><strong>De:</strong> Grupo 01 (L-M-V 7:00-9:00)</div>
                  <div><strong>A:</strong> Grupo 03 (Ma-J 9:00-11:00)</div>
                  <div><strong>Motivo:</strong> Conflicto de horario con trabajo</div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t">
                    <div><strong>Fecha:</strong> 15/Sep/2024 10:30 AM</div>
                    <div><strong>Estado:</strong> Esperando revisión de Decanatura</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Request 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#006FEE] rounded-full"></div>
                <div className="w-0.5 h-full bg-gray-200"></div>
              </div>
              <Card className="flex-1 p-4 border-l-4 border-[#006FEE]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-[#990000]" />
                      <span className="font-medium">SOL-2024-088</span>
                      <Badge className="bg-[#006FEE] text-white">En Revisión</Badge>
                    </div>
                    <h3 className="text-[#990000] font-semibold">Cambio de Grupo - Base de Datos</h3>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                    onClick={() => onNavigate?.('request-status')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalle
                  </Button>
                </div>
                <div className="text-sm space-y-1 text-gray-600">
                  <div><strong>De:</strong> Grupo 02 (Ma-J 14:00-16:00)</div>
                  <div><strong>A:</strong> Grupo 01 (Ma-J 9:00-11:00)</div>
                  <div><strong>Motivo:</strong> Mejor horario para transporte</div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t">
                    <div><strong>Fecha:</strong> 12/Sep/2024 2:15 PM</div>
                    <div><strong>Revisado por:</strong> Dr. Roberto Martínez</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Request 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#17C964] rounded-full"></div>
                <div className="w-0.5 h-full bg-gray-200"></div>
              </div>
              <Card className="flex-1 p-4 border-l-4 border-[#17C964]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-[#990000]" />
                      <span className="font-medium">SOL-2024-087</span>
                      <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                    </div>
                    <h3 className="text-[#990000] font-semibold">Cambio de Grupo - Programación</h3>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                    onClick={() => onNavigate?.('request-status')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalle
                  </Button>
                </div>
                <div className="text-sm space-y-1 text-gray-600">
                  <div><strong>De:</strong> Grupo 02 (Ma-J 9:00-11:00)</div>
                  <div><strong>A:</strong> Grupo 01 (L-Mi 11:00-13:00)</div>
                  <div><strong>Motivo:</strong> Mejor metodología del profesor</div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t">
                    <div><strong>Fecha:</strong> 10/Sep/2024 9:00 AM</div>
                    <div><strong>Aprobado por:</strong> Dr. Roberto Martínez</div>
                    <div><strong>Fecha Aprobación:</strong> 11/Sep/2024</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Request 4 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#F31260] rounded-full"></div>
                <div className="w-0.5 h-full bg-gray-200"></div>
              </div>
              <Card className="flex-1 p-4 border-l-4 border-[#F31260]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-[#990000]" />
                      <span className="font-medium">SOL-2024-086</span>
                      <Badge className="bg-[#F31260] text-white">Rechazada</Badge>
                    </div>
                    <h3 className="text-[#990000] font-semibold">Cambio de Grupo - Física II</h3>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                    onClick={() => onNavigate?.('request-status')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalle
                  </Button>
                </div>
                <div className="text-sm space-y-1 text-gray-600">
                  <div><strong>De:</strong> Grupo 01 (L-Mi-V 11:00-13:00)</div>
                  <div><strong>A:</strong> Grupo 02 (Ma-J 7:00-9:00)</div>
                  <div><strong>Motivo:</strong> Preferencia de horario</div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t">
                    <div><strong>Fecha:</strong> 08/Sep/2024 11:30 AM</div>
                    <div><strong>Rechazado por:</strong> Dr. Roberto Martínez</div>
                    <div><strong>Razón:</strong> Grupo destino sin cupos disponibles</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Request 5 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#17C964] rounded-full"></div>
                <div className="w-0.5 h-full bg-gray-200"></div>
              </div>
              <Card className="flex-1 p-4 border-l-4 border-[#17C964]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-4 h-4 text-[#990000]" />
                      <span className="font-medium">SOL-2024-070</span>
                      <Badge className="bg-[#17C964] text-white">Aprobada</Badge>
                    </div>
                    <h3 className="text-[#990000] font-semibold">Cambio de Grupo - Algoritmos</h3>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-[#006FEE] border-[#006FEE] hover:bg-[#006FEE] hover:text-white transition-all duration-200"
                    onClick={() => onNavigate?.('request-status')}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalle
                  </Button>
                </div>
                <div className="text-sm space-y-1 text-gray-600">
                  <div><strong>De:</strong> Grupo 03 (V-S 14:00-16:00)</div>
                  <div><strong>A:</strong> Grupo 01 (L-Mi 9:00-11:00)</div>
                  <div><strong>Motivo:</strong> Dificultad para asistir los sábados</div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t">
                    <div><strong>Fecha:</strong> 25/Ago/2024 3:00 PM</div>
                    <div><strong>Aprobado por:</strong> Dr. Roberto Martínez</div>
                    <div><strong>Fecha Aprobación:</strong> 26/Ago/2024</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <Button 
              variant="outline"
              className="transition-all duration-200 hover:bg-[#990000] hover:text-white"
            >
              Ver Más Solicitudes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}