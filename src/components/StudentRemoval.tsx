/**
 * StudentRemoval
 *
 * Pantalla para procesar el retiro de estudiantes de una inscripción o materia.
 * Incluye confirmación, motivos, notificaciones y registro en historial.
 *
 * Props:
 * - onBack: () => void
 * - hasData?: boolean
 *
 * Comportamiento:
 * - Contiene checklist de verificación y un bloqueo visual para acciones irreversibles.
 *
 * Ejemplo:
 * <StudentRemoval onBack={() => navigate('admin-dashboard')} hasData />
 */

import { ArrowLeft, UserMinus, AlertTriangle, Search, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface StudentRemovalProps {
  onBack: () => void;
  hasData?: boolean;
}

export function StudentRemoval({ onBack, hasData = false }: StudentRemovalProps) {
  const sampleEnrollments = [
    { 
      id: 1, 
      student: "Juan Pérez García", 
      code: "2021123456", 
      subject: "Cálculo II", 
      group: "Grupo A", 
      professor: "Dr. Carlos Martínez",
      enrollmentDate: "15/01/2024",
      attendance: "92%",
      grade: "4.2"
    },
    { 
      id: 2, 
      student: "María López", 
      code: "2020987654", 
      subject: "Física I", 
      group: "Grupo C", 
      professor: "Dra. Ana García",
      enrollmentDate: "15/01/2024",
      attendance: "88%",
      grade: "3.8"
    },
    { 
      id: 3, 
      student: "Carlos Ramírez", 
      code: "2021456789", 
      subject: "Programación", 
      group: "Grupo B", 
      professor: "Ing. Luis Rodríguez",
      enrollmentDate: "15/01/2024",
      attendance: "95%",
      grade: "4.5"
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
          <div className="flex items-center gap-3">
            <UserMinus className="h-8 w-8 text-[#F31260]" />
            <div>
              <h1 className="text-[#990000] mb-1">Retiro de Estudiantes</h1>
              <p className="text-gray-600">Retirar estudiantes de grupos o materias</p>
            </div>
          </div>
        </div>

        {/* Alerta de Advertencia */}
        {hasData && (
          <Card className="p-4 mb-6 border-l-4 border-[#F31260] bg-[#F31260]/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-[#F31260] mt-0.5 flex-shrink-0" />
              <div>
                <p style={{ fontWeight: 600 }} className="text-[#F31260] mb-1">Acción Irreversible</p>
                <p className="text-sm text-gray-700">
                  El retiro de un estudiante de un grupo o materia es una acción permanente que afecta 
                  sus registros académicos. Verifique cuidadosamente antes de proceder.
                </p>
              </div>
            </div>
          </Card>
        )}

        {!hasData ? (
          <Card className="p-12 text-center">
            <UserMinus className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <>
            {/* Búsqueda y Filtros */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Buscar Inscripción</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600 mb-2 block">Buscar Estudiante</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar por nombre o código..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Filtrar por Materia</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Todas las materias</option>
                    <option>Cálculo II</option>
                    <option>Física I</option>
                    <option>Programación</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Lista de Inscripciones Activas */}
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#990000]">Inscripciones Activas</h2>
                <Badge className="bg-[#006FEE]">{sampleEnrollments.length} estudiantes</Badge>
              </div>

              <div className="space-y-4">
                {sampleEnrollments.map((enrollment) => (
                  <Card key={enrollment.id} className="p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 style={{ fontWeight: 600 }}>{enrollment.student}</h3>
                          <Badge className="bg-gray-500">{enrollment.code}</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Materia</p>
                            <p style={{ fontWeight: 600 }}>{enrollment.subject}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Grupo</p>
                            <Badge className="bg-[#006FEE]">{enrollment.group}</Badge>
                          </div>
                          <div>
                            <p className="text-gray-500">Profesor</p>
                            <p>{enrollment.professor}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Asistencia</p>
                            <p style={{ fontWeight: 600 }} className="text-[#17C964]">{enrollment.attendance}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Nota Actual</p>
                            <p style={{ fontWeight: 600 }}>{enrollment.grade}</p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-200 text-sm text-gray-600">
                          <p>Fecha de inscripción: {enrollment.enrollmentDate}</p>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        className="ml-4 bg-[#F31260] hover:bg-[#C10E4D]"
                      >
                        <UserMinus className="h-4 w-4 mr-1" />
                        Retirar
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Modal de Confirmación (Simulado) */}
            <Card className="p-6 border-l-4 border-[#F31260]">
              <h3 className="text-[#F31260] mb-4" style={{ fontWeight: 600 }}>Confirmar Retiro de Estudiante</h3>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Estudiante seleccionado:</p>
                <p style={{ fontWeight: 600 }} className="mb-1">Juan Pérez García (2021123456)</p>
                <p className="text-sm">Cálculo II - Grupo A</p>
              </div>

              <div className="mb-6">
                <label className="text-sm text-gray-600 mb-2 block">Motivo del retiro *</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000] mb-3">
                  <option>Seleccione un motivo</option>
                  <option>Retiro voluntario del estudiante</option>
                  <option>Cambio de grupo aprobado</option>
                  <option>Bajo rendimiento académico</option>
                  <option>Problemas disciplinarios</option>
                  <option>Solicitud de la institución</option>
                  <option>Otro (especificar)</option>
                </select>

                <label className="text-sm text-gray-600 mb-2 block">Observaciones adicionales</label>
                <textarea
                  rows={3}
                  placeholder="Ingrese detalles adicionales sobre el retiro..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                />
              </div>

              <div className="mb-6 space-y-2">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 text-[#990000]" />
                  <span className="text-sm">Notificar al estudiante por correo electrónico</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#990000]" />
                  <span className="text-sm">Registrar en el historial académico del estudiante</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 text-[#990000]" />
                  <span className="text-sm">Notificar al profesor del grupo</span>
                </label>
              </div>

              <div className="p-4 bg-[#F31260]/10 rounded-lg border border-[#F31260] mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#F31260] mt-0.5 flex-shrink-0" />
                  <div>
                    <p style={{ fontWeight: 600 }} className="text-[#F31260] mb-1">Confirme que ha verificado:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• La identidad del estudiante es correcta</li>
                      <li>• El motivo del retiro está justificado</li>
                      <li>• Se han evaluado alternativas al retiro</li>
                      <li>• Esta acción no puede ser revertida</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline">
                  Cancelar
                </Button>
                <Button className="bg-[#F31260] hover:bg-[#C10E4D]">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Confirmar Retiro
                </Button>
              </div>
            </Card>

            {/* Historial de Retiros Recientes */}
            <Card className="p-6 mt-6">
              <h3 className="mb-4" style={{ fontWeight: 600 }}>Retiros Recientes</h3>
              <div className="space-y-2">
                {[
                  { student: "Pedro Ruiz", subject: "Álgebra Lineal", group: "Grupo B", date: "14/05/2024", reason: "Retiro voluntario" },
                  { student: "Laura Sánchez", subject: "Física II", group: "Grupo A", date: "13/05/2024", reason: "Cambio de grupo" }
                ].map((record, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg text-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p style={{ fontWeight: 600 }}>{record.student}</p>
                        <p className="text-gray-600">{record.subject} - {record.group}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600">{record.date}</p>
                        <p className="text-xs text-gray-500">{record.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
