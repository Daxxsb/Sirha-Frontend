import { ArrowLeft, Download, FileText, FileSpreadsheet, Printer, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ReportExportProps {
  onBack: () => void;
  hasData?: boolean;
}

export function ReportExport({ onBack, hasData = false }: ReportExportProps) {
  const availableReports = [
    { id: 1, name: "Reporte de Solicitudes por Período", description: "Todas las solicitudes en un rango de fechas", records: 127 },
    { id: 2, name: "Reporte de Grupos Más Solicitados", description: "Ranking de grupos por número de solicitudes", records: 45 },
    { id: 3, name: "Reporte de Tasas de Aprobación", description: "Estadísticas de aprobación vs rechazo", records: 89 },
    { id: 4, name: "Reporte de Carga de Grupos", description: "Ocupación actual de todos los grupos", records: 156 },
    { id: 5, name: "Reporte de Avance Académico", description: "Progreso de estudiantes en plan de estudios", records: 234 }
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
          <h1 className="text-[#990000] mb-1">Exportación de Reportes</h1>
          <p className="text-gray-600">Generar y descargar reportes en diversos formatos</p>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <Download className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Datos cargándose desde servidor
            </p>
          </Card>
        ) : (
          <>
            {/* Configuración de Exportación */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Configuración de Exportación</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Tipo de Reporte</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>Seleccione un tipo de reporte</option>
                    <option>Reporte de Solicitudes</option>
                    <option>Reporte de Grupos</option>
                    <option>Reporte de Tasas</option>
                    <option>Reporte de Carga</option>
                    <option>Reporte de Avance Académico</option>
                    <option>Reporte Personalizado</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Formato de Exportación</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                    <option>PDF (.pdf)</option>
                    <option>Excel (.xlsx)</option>
                    <option>CSV (.csv)</option>
                    <option>JSON (.json)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Fecha de Inicio</label>
                  <input
                    type="date"
                    defaultValue="2024-01-01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Fecha de Fin</label>
                  <input
                    type="date"
                    defaultValue="2024-05-15"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600 mb-2 block">Filtros Adicionales</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                      <option>Todas las facultades</option>
                      <option>Ingeniería</option>
                      <option>Arquitectura</option>
                      <option>Ciencias</option>
                    </select>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000]">
                      <option>Todos los estados</option>
                      <option>Pendiente</option>
                      <option>Aprobada</option>
                      <option>Rechazada</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="mb-3" style={{ fontWeight: 600 }}>Opciones de Exportación</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Incluir gráficos y visualizaciones</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Incluir datos detallados</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Incluir comentarios y observaciones</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-[#990000]" />
                    <span className="text-sm">Agrupar por facultad/decanatura</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline">
                  Vista Previa
                </Button>
                <Button className="bg-[#990000] hover:bg-[#770000]">
                  <Download className="mr-2 h-4 w-4" />
                  Generar y Descargar
                </Button>
              </div>
            </Card>

            {/* Reportes Predefinidos */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Reportes Predefinidos</h2>
              <p className="text-sm text-gray-600 mb-4">
                Accesos rápidos a los reportes más utilizados
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableReports.map((report) => (
                  <Card key={report.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 style={{ fontWeight: 600 }} className="mb-1">{report.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-[#006FEE]">{report.records} registros</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileSpreadsheet className="h-4 w-4 mr-1" />
                        Excel
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Historial de Exportaciones */}
            <Card className="p-6 mb-6">
              <h2 className="text-[#990000] mb-4">Historial de Exportaciones Recientes</h2>
              
              <div className="space-y-3">
                {[
                  { name: "Reporte_Solicitudes_2024-05.pdf", date: "15/05/2024 10:30", size: "2.4 MB", format: "PDF" },
                  { name: "Grupos_Solicitados_2024-05.xlsx", date: "14/05/2024 16:20", size: "856 KB", format: "Excel" },
                  { name: "Tasas_Aprobacion_Completo.pdf", date: "13/05/2024 09:15", size: "1.8 MB", format: "PDF" }
                ].map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow transition-all">
                    <div className="flex items-center gap-3">
                      {file.format === 'PDF' ? (
                        <FileText className="h-8 w-8 text-[#F31260]" />
                      ) : (
                        <FileSpreadsheet className="h-8 w-8 text-[#17C964]" />
                      )}
                      <div>
                        <p style={{ fontWeight: 600 }}>{file.name}</p>
                        <p className="text-sm text-gray-600">
                          {file.date} • {file.size}
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Opciones de Impresión */}
            <Card className="p-6 border-l-4 border-[#006FEE]">
              <div className="flex items-start gap-3">
                <Printer className="h-6 w-6 text-[#006FEE] mt-1" />
                <div className="flex-1">
                  <h3 className="text-[#006FEE] mb-2" style={{ fontWeight: 600 }}>Impresión Directa</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    También puede imprimir reportes directamente sin necesidad de descargar archivos
                  </p>
                  <Button variant="outline" className="text-[#006FEE] border-[#006FEE]">
                    <Printer className="mr-2 h-4 w-4" />
                    Configurar Impresión
                  </Button>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
