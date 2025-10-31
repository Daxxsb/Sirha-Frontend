/**
 * PriorityRequestsView
 *
 * Vista para gestionar solicitudes según su prioridad (Alta, Media, Normal).
 * Permite filtrar, ordenar y ejecutar acciones (aprobar/rechazar) en bloque o individual.
 *
 * Props:
 * - onBack: () => void
 * - hasData?: boolean
 *
 * Comportamiento:
 * - Presenta tarjetas de conteo por prioridad y lista detallada con botones de acción.
 *
 * Ejemplo:
 * <PriorityRequestsView onBack={() => navigate('decanatura-dashboard')} hasData />
 */

import { ArrowLeft, AlertCircle, Filter, ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface PriorityRequestsViewProps {
  onBack: () => void;
  hasData?: boolean;
}

export function PriorityRequestsView({ onBack, hasData = false }: PriorityRequestsViewProps) {
  const sampleRequests = [
    { 
      id: "2024-0455", 
      student: "María López", 
      priority: "Alta", 
      reason: "Estudiante de último semestre", 
      from: "Física I - Grupo A", 
      to: "Física I - Grupo C", 
      date: "15/05/2024 08:15", 
      waitingTime: "2 horas",
      status: "Pendiente"
    },
    { 
      id: "2024-0454", 
      student: "Carlos Ramírez", 
      priority: "Alta", 
      reason: "Conflicto de horario laboral", 
      from: "Programación - Grupo D", 
      to: "Programación - Grupo B", 
      date: "15/05/2024 09:30", 
      waitingTime: "45 min",
      status: "Pendiente"
    },
    { 
      id: "2024-0452", 
      student: "Luis Gómez", 
      priority: "Media", 
      reason: "Mejora de rendimiento académico", 
      from: "Álgebra Lineal - Grupo C", 
      to: "Álgebra Lineal - Grupo A", 
      date: "14/05/2024 14:20", 
      waitingTime: "1 día",
      status: "Pendiente"
    },
    { 
      id: "2024-0450", 
      student: "Ana Torres", 
      priority: "Normal", 
      reason: "Preferencia de horario", 
      from: "Cálculo II - Grupo B", 
      to: "Cálculo II - Grupo A", 
      date: "13/05/2024 11:45", 
      waitingTime: "2 días",
      status: "Pendiente"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 text-[#990000] hover:text-[#990000] hover:bg-[#990000]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-[#990000] mb-1">Gestión por Prioridad</h1>
          <p className="text-gray-600">Solicitudes ordenadas por prioridad y tiempo de espera</p>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <ArrowUpDown className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <>
            {/* Filtros */}
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#990000]">Filtros</h2>
                <Button variant="outline" size="sm">
                  Restablecer Filtros
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Prioridad</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Todas las prioridades</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Normal</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Ordenar por</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Prioridad (Mayor a menor)</option>
                    <option>Tiempo de espera (Mayor a menor)</option>
                    <option>Fecha (Más reciente)</option>
                    <option>Fecha (Más antigua)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Tiempo de espera</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Cualquier tiempo</option>
                    <option>Menos de 1 hora</option>
                    <option>1-24 horas</option>
                    <option>Más de 1 día</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Motivo</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Todos los motivos</option>
                    <option>Último semestre</option>
                    <option>Conflicto horario</option>
                    <option>Rendimiento académico</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4 text-center border-l-4 border-[#F31260]">
                <p className="text-3xl text-[#F31260] mb-1" style={{ fontWeight: 700 }}>8</p>
                <p className="text-sm text-gray-600">Prioridad Alta</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-[#C4841D]">
                <p className="text-3xl text-[#C4841D] mb-1" style={{ fontWeight: 700 }}>15</p>
                <p className="text-sm text-gray-600">Prioridad Media</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-[#006FEE]">
                <p className="text-3xl text-[#006FEE] mb-1" style={{ fontWeight: 700 }}>19</p>
                <p className="text-sm text-gray-600">Prioridad Normal</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>42</p>
                <p className="text-sm text-gray-600">Total Pendientes</p>
              </Card>
            </div>

            {/* Lista de Solicitudes por Prioridad */}
            <div className="space-y-4">
              {sampleRequests.map((request) => (
                <Card 
                  key={request.id} 
                  className={`p-5 hover:shadow-md transition-shadow border-l-4 ${
                    request.priority === 'Alta' ? 'border-[#F31260]' :
                    request.priority === 'Media' ? 'border-[#C4841D]' :
                    'border-[#006FEE]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-[#990000]">{request.id}</Badge>
                        <Badge
                          className={
                            request.priority === 'Alta' ? 'bg-[#F31260]' :
                            request.priority === 'Media' ? 'bg-[#C4841D]' :
                            'bg-[#006FEE]'
                          }
                        >
                          Prioridad {request.priority}
                        </Badge>
                        <Badge className="bg-gray-500">
                          Esperando: {request.waitingTime}
                        </Badge>
                      </div>

                      {/* Información */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-500">Estudiante</p>
                          <p style={{ fontWeight: 600 }}>{request.student}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Cambio solicitado</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">{request.from}</span>
                            <span className="text-[#990000]">→</span>
                            <span style={{ fontWeight: 600 }}>{request.to}</span>
                          </div>
                        </div>
                      </div>

                      {/* Motivo */}
                      <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border-l-2 border-[#990000]">
                        <AlertCircle className="h-4 w-4 text-[#990000] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm" style={{ fontWeight: 600 }}>Motivo de Prioridad:</p>
                          <p className="text-sm text-gray-700">{request.reason}</p>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>Fecha: {request.date}</span>
                        <span>•</span>
                        <span>Tiempo de espera: {request.waitingTime}</span>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex flex-col gap-2 ml-4">
                      <Button
                        size="sm"
                        className="bg-[#17C964] hover:bg-[#12A150]"
                      >
                        Aprobar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[#F31260] border-[#F31260] hover:bg-[#F31260] hover:text-white"
                      >
                        Rechazar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        Ver Detalle
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Información */}
            <Card className="p-6 mt-6 border-l-4 border-[#006FEE]">
              <h3 className="text-[#006FEE] mb-3" style={{ fontWeight: 600 }}>Criterios de Prioridad</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p style={{ fontWeight: 600 }} className="text-[#F31260] mb-2">Alta Prioridad</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Estudiantes de último semestre</li>
                    <li>• Conflictos de horario laboral</li>
                    <li>• Casos médicos documentados</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }} className="text-[#C4841D] mb-2">Media Prioridad</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mejora de rendimiento académico</li>
                    <li>• Traslapes de horario</li>
                    <li>• Repetición de materia</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }} className="text-[#006FEE] mb-2">Normal Prioridad</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Preferencia de horario</li>
                    <li>• Preferencia de profesor</li>
                    <li>• Otros motivos</li>
                  </ul>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
