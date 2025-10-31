import { ArrowLeft, UserPlus, UserMinus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface ProfessorAssignmentProps {
  onBack: () => void;
  hasData?: boolean;
}

export function ProfessorAssignment({ onBack, hasData = false }: ProfessorAssignmentProps) {
  const sampleGroups = [
    { id: 1, subject: "Cálculo II", group: "Grupo A", professor: "Dr. Carlos Martínez", schedule: "Lun-Mié 8:00-10:00", students: 35, capacity: 40 },
    { id: 2, subject: "Cálculo II", group: "Grupo B", professor: "Dra. Ana García", schedule: "Mar-Jue 10:00-12:00", students: 38, capacity: 40 },
    { id: 3, subject: "Física I", group: "Grupo A", professor: null, schedule: "Lun-Mié 14:00-16:00", students: 0, capacity: 35 },
    { id: 4, subject: "Programación", group: "Grupo C", professor: "Ing. Luis Rodríguez", schedule: "Vie 8:00-12:00", students: 28, capacity: 30 }
  ];

  const availableProfessors = [
    { id: 1, name: "Dr. Roberto Sánchez", specialty: "Matemáticas", activeGroups: 2 },
    { id: 2, name: "Dra. María Fernández", specialty: "Física", activeGroups: 1 },
    { id: 3, name: "Ing. Pedro Castro", specialty: "Programación", activeGroups: 3 }
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
          <h1 className="text-[#990000] mb-1">Asignación de Profesores</h1>
          <p className="text-gray-600">Asignar y retirar profesores de grupos académicos</p>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <UserPlus className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Panel de Grupos */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[#990000]">Grupos Académicos</h2>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar grupo..."
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {sampleGroups.map((group) => (
                    <Card key={group.id} className="p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 style={{ fontWeight: 600 }}>{group.subject}</h3>
                            <Badge className="bg-[#006FEE]">{group.group}</Badge>
                            {!group.professor && (
                              <Badge className="bg-[#F31260]">Sin Profesor</Badge>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Profesor Asignado</p>
                              <p style={{ fontWeight: 600 }}>
                                {group.professor || "No asignado"}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Horario</p>
                              <p>{group.schedule}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Estudiantes</p>
                              <p>{group.students} / {group.capacity}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Ocupación</p>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      (group.students / group.capacity) >= 0.9 ? 'bg-[#F31260]' :
                                      (group.students / group.capacity) >= 0.7 ? 'bg-[#C4841D]' :
                                      'bg-[#17C964]'
                                    }`}
                                    style={{ width: `${(group.students / group.capacity) * 100}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs">
                                  {Math.round((group.students / group.capacity) * 100)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 ml-4">
                          {group.professor ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-[#F31260] border-[#F31260] hover:bg-[#F31260] hover:text-white"
                            >
                              <UserMinus className="h-4 w-4 mr-1" />
                              Retirar
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              className="bg-[#17C964] hover:bg-[#12A150]"
                            >
                              <UserPlus className="h-4 w-4 mr-1" />
                              Asignar
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            Reasignar
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            {/* Panel de Profesores Disponibles */}
            <div>
              <Card className="p-6">
                <h3 className="mb-4" style={{ fontWeight: 600 }}>Profesores Disponibles</h3>
                
                <div className="space-y-3 mb-6">
                  {availableProfessors.map((prof) => (
                    <Card key={prof.id} className="p-4 bg-gray-50 hover:bg-white hover:shadow transition-all cursor-pointer">
                      <p style={{ fontWeight: 600 }} className="mb-1">{prof.name}</p>
                      <p className="text-sm text-gray-600 mb-2">{prof.specialty}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Grupos activos:</span>
                        <Badge className="bg-[#006FEE]">{prof.activeGroups}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>

                <Button className="w-full bg-[#990000] hover:bg-[#770000]">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Agregar Nuevo Profesor
                </Button>
              </Card>

              {/* Estadísticas */}
              <Card className="p-6 mt-6">
                <h3 className="mb-4" style={{ fontWeight: 600 }}>Estadísticas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Grupos</span>
                    <span style={{ fontWeight: 700 }}>4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Con Profesor</span>
                    <span style={{ fontWeight: 700 }} className="text-[#17C964]">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sin Profesor</span>
                    <span style={{ fontWeight: 700 }} className="text-[#F31260]">1</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Cobertura</span>
                    <span style={{ fontWeight: 700 }} className="text-[#990000]">75%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
