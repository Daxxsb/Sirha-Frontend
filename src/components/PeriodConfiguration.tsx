import { ArrowLeft, Calendar, Save, Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface PeriodConfigurationProps {
  onBack: () => void;
  hasData?: boolean;
}

export function PeriodConfiguration({ onBack, hasData = false }: PeriodConfigurationProps) {
  const samplePeriods = [
    { id: 1, name: "Período de Ajuste 2024-1", startDate: "15/01/2024", endDate: "31/01/2024", status: "Finalizado", requests: 234 },
    { id: 2, name: "Período Regular 2024-1", startDate: "01/03/2024", endDate: "20/05/2024", status: "Activo", requests: 127 },
    { id: 3, name: "Período de Ajuste 2024-2", startDate: "15/06/2024", endDate: "30/06/2024", status: "Programado", requests: 0 }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#990000] mb-1">Configuración de Períodos</h1>
              <p className="text-gray-600">Definir períodos de tiempo para cambios de grupo</p>
            </div>
            {hasData && (
              <Button className="bg-[#990000] hover:bg-[#770000]">
                <Plus className="mr-2 h-4 w-4" />
                Crear Nuevo Período
              </Button>
            )}
          </div>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <>
            {/* Período Activo Destacado */}
            <Card className="p-6 mb-6 border-l-4 border-[#17C964] bg-[#17C964]/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-[#990000]">Período Regular 2024-1</h2>
                    <Badge className="bg-[#17C964]">Activo</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Fecha de Inicio</p>
                      <p style={{ fontWeight: 600 }}>01/03/2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha de Fin</p>
                      <p style={{ fontWeight: 600 }}>20/05/2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Solicitudes Recibidas</p>
                      <p style={{ fontWeight: 600 }} className="text-[#990000]">127</p>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="text-[#990000] border-[#990000]">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Editar
                </Button>
              </div>
            </Card>

            {/* Lista de Períodos */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Todos los Períodos</h2>
              
              <div className="space-y-4">
                {samplePeriods.map((period) => (
                  <Card 
                    key={period.id} 
                    className={`p-5 hover:shadow-md transition-shadow ${
                      period.status === 'Activo' ? 'border-l-4 border-[#17C964]' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 style={{ fontWeight: 600 }}>{period.name}</h3>
                          <Badge
                            className={
                              period.status === 'Activo' ? 'bg-[#17C964]' :
                              period.status === 'Programado' ? 'bg-[#006FEE]' :
                              'bg-gray-500'
                            }
                          >
                            {period.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Inicio</p>
                            <p style={{ fontWeight: 600 }}>{period.startDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Fin</p>
                            <p style={{ fontWeight: 600 }}>{period.endDate}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duración</p>
                            <p>16 días</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Solicitudes</p>
                            <p style={{ fontWeight: 600 }}>{period.requests}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline" className="text-[#990000] border-[#990000]">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        {period.status === 'Programado' && (
                          <Button size="sm" variant="outline" className="text-[#F31260] border-[#F31260]">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Formulario de Nuevo Período */}
            <Card className="p-6">
              <h2 className="text-[#990000] mb-4">Crear Nuevo Período</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Nombre del Período</label>
                  <input
                    type="text"
                    placeholder="Ej: Período de Ajuste 2024-2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Tipo de Período</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Período de Ajuste</option>
                    <option>Período Regular</option>
                    <option>Período Extraordinario</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Fecha de Inicio</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Fecha de Fin</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600 mb-2 block">Descripción (Opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Descripción del período..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="mb-4" style={{ fontWeight: 600 }}>Restricciones y Reglas</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Permitir solicitudes automáticas</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Requerir aprobación de Decanatura</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Limitar número de solicitudes por estudiante</span>
                  </label>
                  <div className="ml-7">
                    <input
                      type="number"
                      defaultValue="3"
                      className="w-20 px-3 py-1 border border-gray-300 rounded-lg text-sm"
                    />
                    <span className="ml-2 text-sm text-gray-600">solicitudes máximo</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline">
                  Cancelar
                </Button>
                <Button className="bg-[#17C964] hover:bg-[#12A150]">
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Período
                </Button>
              </div>
            </Card>

            {/* Información Adicional */}
            <Card className="p-6 mt-6 border-l-4 border-[#006FEE]">
              <h3 className="text-[#006FEE] mb-3" style={{ fontWeight: 600 }}>Información Importante</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Los períodos no pueden superponerse en fechas</li>
                <li>• Solo puede haber un período activo a la vez</li>
                <li>• Los estudiantes solo pueden crear solicitudes durante períodos activos</li>
                <li>• Los períodos finalizados no pueden ser editados</li>
              </ul>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
