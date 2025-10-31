import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ArrowLeft, Check, X, AlertTriangle } from 'lucide-react';

interface RequestDetailProps {
  onNavigate?: (screen: string) => void;
}

export function RequestDetail({ onNavigate }: RequestDetailProps) {
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
              D
            </div>
            <h1 className="text-xl font-bold">SIRHA - Detalle de Solicitud</h1>
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

      <div className="max-w-5xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#990000] p-0 h-auto"
            onClick={() => onNavigate?.('decanatura-dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver a Solicitudes
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Información Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Datos de la Solicitud */}
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-[#990000]">Solicitud de Cambio de Grupo</h2>
                <Badge className="bg-[#C4841D] text-white">Pendiente</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Información del Estudiante</h3>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-600">Nombre:</span> <span className="font-medium">Juan Pérez Gómez</span></div>
                      <div><span className="text-gray-600">Código:</span> <span className="font-medium">2024001234</span></div>
                      <div><span className="text-gray-600">Programa:</span> <span className="font-medium">Ingeniería de Sistemas</span></div>
                      <div><span className="text-gray-600">Semestre:</span> <span className="font-medium">7°</span></div>
                      <div><span className="text-gray-600">Promedio:</span> <span className="font-medium">4.2</span></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Datos de la Solicitud</h3>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-gray-600">Fecha envío:</span> <span className="font-medium">15/Sep/2024 - 10:30 AM</span></div>
                      <div><span className="text-gray-600">Materia:</span> <span className="font-medium">Matemáticas III</span></div>
                      <div><span className="text-gray-600">Código materia:</span> <span className="font-medium">MAT301</span></div>
                      <div><span className="text-gray-600">Créditos:</span> <span className="font-medium">4</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comparación de Grupos */}
            <Card className="p-6">
              <h3 className="font-semibold text-[#990000] mb-4">Comparación de Grupos</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Grupo Actual */}
                <div className="border-2 border-red-200 bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">Grupo Actual (01)</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Profesor:</span> <span className="font-medium">Dr. Carlos López</span></div>
                    <div><span className="text-gray-600">Horario:</span> <span className="font-medium">Lun-Mié-Vie 7:00-9:00</span></div>
                    <div><span className="text-gray-600">Aula:</span> <span className="font-medium">205-A</span></div>
                    <div><span className="text-gray-600">Cupos:</span> <span className="font-medium">28/30</span></div>
                    <div><span className="text-gray-600">Modalidad:</span> <span className="font-medium">Presencial</span></div>
                  </div>
                </div>

                {/* Grupo Destino */}
                <div className="border-2 border-green-200 bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-3">Grupo Destino (03)</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Profesor:</span> <span className="font-medium">Dr. Luis Rodríguez</span></div>
                    <div><span className="text-gray-600">Horario:</span> <span className="font-medium">Sábado 8:00-12:00</span></div>
                    <div><span className="text-gray-600">Aula:</span> <span className="font-medium">301-C</span></div>
                    <div><span className="text-gray-600">Cupos:</span> <span className="font-medium">17/25</span></div>
                    <div><span className="text-gray-600">Modalidad:</span> <span className="font-medium">Presencial</span></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Observaciones del Estudiante */}
            <Card className="p-6">
              <h3 className="font-semibold text-[#990000] mb-3">Observaciones del Estudiante</h3>
              <div className="bg-gray-50 p-4 rounded-lg text-sm">
                "Solicito el cambio al grupo de los sábados debido a que conseguí trabajo de medio tiempo en las mañanas entre semana. El horario actual me impide cumplir con mis responsabilidades laborales que son importantes para mi sustento económico durante los estudios."
              </div>
            </Card>
          </div>

          {/* Panel de Acciones */}
          <div className="space-y-6">
            {/* Validaciones Automáticas */}
            <Card className="p-6">
              <h3 className="font-semibold text-[#990000] mb-4">Validaciones del Sistema</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Cupos disponibles en grupo destino</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Sin choques de horario</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">Prerrequisitos cumplidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-700">Cambio de profesor diferente</span>
                </div>
              </div>
            </Card>

            {/* Historial de Solicitudes */}
            <Card className="p-6">
              <h3 className="font-semibold text-[#990000] mb-4">Historial del Estudiante</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Solicitudes aprobadas:</span>
                  <span className="font-medium text-green-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Solicitudes rechazadas:</span>
                  <span className="font-medium text-red-600">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Última solicitud:</span>
                  <span className="font-medium">Ago 2024</span>
                </div>
              </div>
            </Card>

            {/* Acciones */}
            <Card className="p-6">
              <h3 className="font-semibold text-[#990000] mb-4">Decisión</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="observaciones-dec" className="text-sm font-medium">
                    Observaciones de la Decanatura
                  </Label>
                  <Textarea
                    id="observaciones-dec"
                    placeholder="Ingrese observaciones sobre la decisión..."
                    className="mt-1 text-sm"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-[#17C964] hover:bg-green-600 text-white font-semibold">
                    <Check className="w-4 h-4 mr-2" />
                    Aprobar Solicitud
                  </Button>
                  <Button className="w-full bg-[#F31260] hover:bg-red-600 text-white font-semibold">
                    <X className="w-4 h-4 mr-2" />
                    Rechazar Solicitud
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}