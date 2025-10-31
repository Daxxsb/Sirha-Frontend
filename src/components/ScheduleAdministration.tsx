/**
 * ScheduleAdministration
 *
 * Panel para administrar y asignar horarios a grupos: vista de cuadrícula por
 * días y franjas horarias, edición de aula y verificación de conflictos.
 *
 * Props:
 * - onBack: () => void
 * - hasData?: boolean
 *
 * Comportamiento:
 * - Muestra tabla de disponibilidad por día/hora y permite guardar cambios.
 *
 * Ejemplo:
 * <ScheduleAdministration onBack={() => navigate('admin-dashboard')} hasData />
 */

import { ArrowLeft, Clock, Save, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ScheduleAdministrationProps {
  onBack: () => void;
  hasData?: boolean;
}

export function ScheduleAdministration({ onBack, hasData = false }: ScheduleAdministrationProps) {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const timeSlots = [
    "6:00-8:00", "8:00-10:00", "10:00-12:00", "12:00-14:00",
    "14:00-16:00", "16:00-18:00", "18:00-20:00"
  ];

  const sampleSchedule = {
    "Lunes": { "8:00-10:00": true, "14:00-16:00": true },
    "Miércoles": { "8:00-10:00": true, "14:00-16:00": true },
    "Viernes": { "10:00-12:00": true }
  };

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#990000] mb-1">Administración de Horarios</h1>
              <p className="text-gray-600">Configurar horarios de clases por grupo</p>
            </div>
            {hasData && (
              <Button className="bg-[#17C964] hover:bg-[#12A150]">
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            )}
          </div>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Seleccione un grupo para continuar
            </p>
          </Card>
        ) : (
          <>
            {/* Información del Grupo */}
            <Card className="p-6 mb-6 border-l-4 border-[#990000]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Materia</p>
                  <p style={{ fontWeight: 600 }}>Cálculo II</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Grupo</p>
                  <Badge className="bg-[#006FEE]">Grupo A</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Profesor</p>
                  <p style={{ fontWeight: 600 }}>Dr. Carlos Martínez</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salón</p>
                  <p style={{ fontWeight: 600 }}>Aula 301</p>
                </div>
              </div>
            </Card>

            {/* Grid de Horario */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Asignación de Horario</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 bg-[#990000] text-white px-4 py-3 text-left">
                        Hora / Día
                      </th>
                      {daysOfWeek.map((day) => (
                        <th key={day} className="border border-gray-300 bg-[#990000] text-white px-4 py-3 text-center min-w-[120px]">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((time) => (
                      <tr key={time}>
                        <td className="border border-gray-300 bg-gray-50 px-4 py-3" style={{ fontWeight: 600 }}>
                          {time}
                        </td>
                        {daysOfWeek.map((day) => {
                          const isScheduled = sampleSchedule[day]?.[time];
                          return (
                            <td 
                              key={`${day}-${time}`}
                              className={`border border-gray-300 px-4 py-3 text-center cursor-pointer transition-colors ${
                                isScheduled 
                                  ? 'bg-[#990000] text-white hover:bg-[#770000]' 
                                  : 'bg-white hover:bg-gray-100'
                              }`}
                            >
                              {isScheduled ? (
                                <div className="flex items-center justify-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span className="text-sm" style={{ fontWeight: 600 }}>Ocupado</span>
                                </div>
                              ) : (
                                <span className="text-sm text-gray-400">Disponible</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#990000] rounded"></div>
                    <span>Horario asignado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
                    <span>Disponible</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Horas semanales: <span style={{ fontWeight: 700 }}>10 horas</span>
                </p>
              </div>
            </Card>

            {/* Configuración Adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-4" style={{ fontWeight: 600 }}>Configuración del Aula</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Salón Asignado</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                      <option>Aula 301</option>
                      <option>Aula 302</option>
                      <option>Aula 303</option>
                      <option>Laboratorio 1</option>
                      <option>Laboratorio 2</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Capacidad del Salón</label>
                    <input
                      type="number"
                      defaultValue="40"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Tipo de Aula</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                      <option>Aula Teórica</option>
                      <option>Laboratorio</option>
                      <option>Taller</option>
                      <option>Auditorio</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4" style={{ fontWeight: 600 }}>Resumen del Horario</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total de Sesiones</p>
                    <p className="text-2xl" style={{ fontWeight: 700 }}>5</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Horas Semanales</p>
                    <p className="text-2xl" style={{ fontWeight: 700 }}>10</p>
                  </div>
                  <div className="p-3 bg-[#17C964]/10 rounded-lg border border-[#17C964]">
                    <p className="text-sm text-[#12A150] mb-1" style={{ fontWeight: 600 }}>Estado</p>
                    <p className="text-[#12A150]" style={{ fontWeight: 600 }}>Horario Completo</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm mb-2" style={{ fontWeight: 600 }}>Días de Clase</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#990000]">Lunes</Badge>
                    <Badge className="bg-[#990000]">Miércoles</Badge>
                    <Badge className="bg-[#990000]">Viernes</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Conflictos de Horario */}
            <Card className="p-6 mt-6 border-l-4 border-[#C4841D]">
              <h3 className="text-[#C4841D] mb-3" style={{ fontWeight: 600 }}>Verificación de Conflictos</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-[#17C964]/10 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-[#17C964] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-[#12A150]">Sin conflictos detectados</p>
                    <p className="text-sm text-gray-600">El horario no presenta traslapes con otros grupos del mismo profesor</p>
                  </div>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
