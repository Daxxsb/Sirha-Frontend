/**
 * GlobalRequestsView
 *
 * Vista consolidada para consultar solicitudes a nivel de facultad/decanatura.
 * Permite búsqueda, filtrado y exportación del conjunto de datos.
 *
 * Props:
 * - onBack: () => void       // acción para volver a la pantalla anterior
 * - hasData?: boolean        // si false muestra estado vacío / loading
 *
 * Comportamiento:
 * - Muestra tarjetas de estadística, tabla de resultados y paginación.
 * - El botón de exportar se habilita cuando hasData === true.
 *
 * Ejemplo:
 * <GlobalRequestsView onBack={() => navigate('admin-dashboard')} hasData={true} />
 */

import { ArrowLeft, Filter, Search, Download, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface GlobalRequestsViewProps {
  onBack: () => void;
  hasData?: boolean;
}

export function GlobalRequestsView({ onBack, hasData = false }: GlobalRequestsViewProps) {
  const sampleRequests = [
    { id: "2024-0456", student: "Juan Pérez García", faculty: "Ingeniería", from: "Cálculo II - Grupo B", to: "Cálculo II - Grupo A", date: "15/05/2024", status: "Aprobada" },
    { id: "2024-0455", student: "María López", faculty: "Ingeniería", from: "Física I - Grupo A", to: "Física I - Grupo C", date: "15/05/2024", status: "Pendiente" },
    { id: "2024-0454", student: "Carlos Ramírez", faculty: "Ingeniería", from: "Programación - Grupo D", to: "Programación - Grupo B", date: "14/05/2024", status: "Rechazada" },
    { id: "2024-0453", student: "Ana Torres", faculty: "Arquitectura", from: "Dibujo Técnico - Grupo A", to: "Dibujo Técnico - Grupo B", date: "14/05/2024", status: "Aprobada" },
    { id: "2024-0452", student: "Luis Gómez", faculty: "Ingeniería", from: "Álgebra Lineal - Grupo C", to: "Álgebra Lineal - Grupo A", date: "13/05/2024", status: "Pendiente" }
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#990000] mb-1">Consulta Global de Solicitudes</h1>
              <p className="text-gray-600">Vista consolidada por facultad y decanatura</p>
            </div>
            {hasData && (
              <Button className="bg-[#990000] hover:bg-[#770000]">
                <Download className="mr-2 h-4 w-4" />
                Exportar Reporte
              </Button>
            )}
          </div>
        </div>

        {/* Filtros y Búsqueda */}
        {hasData && (
          <Card className="p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600 mb-2 block">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar por estudiante, ID o materia..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Facultad</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                  <option>Todas las facultades</option>
                  <option>Ingeniería</option>
                  <option>Arquitectura</option>
                  <option>Ciencias</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Estado</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                  <option>Todos los estados</option>
                  <option>Pendiente</option>
                  <option>Aprobada</option>
                  <option>Rechazada</option>
                </select>
              </div>
            </div>
          </Card>
        )}

        {/* Estadísticas Rápidas */}
        {hasData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 text-center">
              <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>127</p>
              <p className="text-sm text-gray-600">Total Solicitudes</p>
            </Card>
            <Card className="p-4 text-center border-l-4 border-[#C4841D]">
              <p className="text-3xl text-[#C4841D] mb-1" style={{ fontWeight: 700 }}>42</p>
              <p className="text-sm text-gray-600">Pendientes</p>
            </Card>
            <Card className="p-4 text-center border-l-4 border-[#17C964]">
              <p className="text-3xl text-[#17C964] mb-1" style={{ fontWeight: 700 }}>68</p>
              <p className="text-sm text-gray-600">Aprobadas</p>
            </Card>
            <Card className="p-4 text-center border-l-4 border-[#F31260]">
              <p className="text-3xl text-[#F31260] mb-1" style={{ fontWeight: 700 }}>17</p>
              <p className="text-sm text-gray-600">Rechazadas</p>
            </Card>
          </div>
        )}

        {/* Tabla de Solicitudes */}
        {!hasData ? (
          <Card className="p-12 text-center">
            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#990000] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">ID Solicitud</th>
                    <th className="px-4 py-3 text-left">Estudiante</th>
                    <th className="px-4 py-3 text-left">Facultad</th>
                    <th className="px-4 py-3 text-left">Cambio Solicitado</th>
                    <th className="px-4 py-3 text-left">Fecha</th>
                    <th className="px-4 py-3 text-left">Estado</th>
                    <th className="px-4 py-3 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {sampleRequests.map((request, index) => (
                    <tr key={request.id} className={`border-b border-gray-200 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-4 py-3">
                        <span style={{ fontWeight: 600 }} className="text-[#006FEE]">{request.id}</span>
                      </td>
                      <td className="px-4 py-3">{request.student}</td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-600">{request.faculty}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm">
                          <p className="text-gray-500">{request.from}</p>
                          <p className="text-gray-700">→ {request.to}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{request.date}</td>
                      <td className="px-4 py-3">
                        <Badge
                          className={
                            request.status === 'Aprobada' ? 'bg-[#17C964]' :
                            request.status === 'Rechazada' ? 'bg-[#F31260]' :
                            'bg-[#C4841D]'
                          }
                        >
                          {request.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-[#990000] border-[#990000] hover:bg-[#990000] hover:text-white"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Ver Detalle
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Paginación */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Mostrando <span style={{ fontWeight: 600 }}>1-5</span> de <span style={{ fontWeight: 600 }}>127</span> solicitudes
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Anterior</Button>
                <Button variant="outline" size="sm" className="bg-[#990000] text-white border-[#990000]">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Siguiente</Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
