# Documentación profesional — Componentes UI

Este documento resume de forma profesional las implementaciones presentes en la carpeta `src/components/ui`. Incluye propósito de cada componente, props más importantes, ejemplos de uso concisos y notas operativas (dependencias, accesibilidad, comportamiento especial).

---

Índice rápido
- Utilidades: cn, useIsMobile
- Controles básicos: Button, Input, Textarea, Switch, Checkbox, RadioGroup, Select, Slider, Progress, Badge
- Contenedores y layout: Card, Accordion, Tabs, TabsList/Trigger/Content, Grid pattern
- Navegación y herramientas: Sidebar (Provider, Trigger, Rail...), Pagination, Breadcrumb, Menubar, NavigationMenu
- Superficies y overlays: Dialog, Sheet, Drawer, Popover, Tooltip, HoverCard, ContextMenu, DropdownMenu, AlertDialog, Alert
- Formularios: Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage (react-hook-form)
- Visualización: Chart (ChartContainer, ChartTooltipContent, ChartLegendContent), Calendar, Carousel
- Utiles adicionales: Skeleton, ScrollArea, Resizable panels, OTP input, Command palette, Badge, Avatar, AspectRatio

---

Convenciones y notas generales
- "use client": Muchos componentes usan APIs que requieren ejecución en cliente (eventos, window, matchMedia). Mantener componentes con "use client" cuando ya están marcados.
- Clases y theming: Se usa utilitario `cn` (clsx + tailwind-merge) para combinar clases. Muchas variables CSS y `data-*` attributes controlan estilos (ej. `data-state`, `data-variant`, `data-slot`).
- Accesibilidad: La mayoría de wrappers de primitives (Radix, Vaul, Recharts, etc.) preservan roles/attributes. Mantener atributos `aria-*`, `role` y `tabIndex` según implementaciones.
- Dependencias externas: Radix UI, lucide-react, react-hook-form, sonner, cmdk, recharts, embla, react-day-picker y otras. Ver `package.json` para versiones.
- SSR / Hydration: Algunos componentes usan window/document APIs (p. ej. useIsMobile, Sidebar cookies) y están marcados como client. Evitar ejecutar estos hooks en servidor.

---

Utilidades
- cn(...inputs: ClassValue[]): string  
  - Propósito: combinar clases usando clsx y resolver conflictos con tailwind-merge.
  - Uso: className={cn("p-2", condition && "bg-red", props.className)}

- useIsMobile(): boolean  
  - Propósito: hook que devuelve true si window.innerWidth < 768. Escucha cambios de media query.
  - Nota: devuelve boolean, inicialmente undefined convertido a boolean (se forzó !!isMobile) — en SSR puede ser inicialmente false. Evitar usar en render crítico del servidor.

---

Componentes clave (resumen por archivo / export)
- button.tsx
  - Exports: Button, buttonVariants
  - Props: variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"; size: "default" | "sm" | "lg" | "icon"; asChild?: boolean
  - Ejemplo:
    ```tsx
    <Button variant="outline" size="sm">Guardar</Button>
    <Button asChild><a href="/path">Ir</a></Button>
    ```

- input.tsx / textarea.tsx / input-otp.tsx
  - Input: wrapper para <input> con estilos, respeta type y props nativos.
  - Textarea: styled <textarea>, clase `resize-none` por defecto.
  - InputOTP: componente de `input-otp` con contenedores estilizados y slots.
  - Ejemplo:
    ```tsx
    <Input placeholder="Correo" />
    <Textarea rows={4} />
    ```

- form.tsx
  - Integración con react-hook-form: Form (FormProvider), FormField (Controller), useFormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage.
  - Uso típico:
    ```tsx
    // Dentro de un FormProvider
    <FormField name="email" control={control} render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}/>
    ```
  - Notas: useFormField depende de estar dentro de FormField y FormItem; usa IDs generados con React.useId().

- tooltip.tsx
  - Provider, Tooltip, TooltipTrigger, TooltipContent
  - Props: TooltipContent acepta sideOffset, side, align y children. Hidden logic puede condicionar (ej. Sidebar oculta tooltips cuando expandido).
  - Ejemplo:
    ```tsx
    <Tooltip>
      <TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger>
      <TooltipContent>Información</TooltipContent>
    </Tooltip>
    ```

- sidebar.tsx
  - Exports: SidebarProvider, useSidebar, Sidebar y subcomponentes: SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarContent, SidebarSeparator, SidebarRail, SidebarTrigger, etc.
  - Comportamiento importante:
    - Guarda estado en cookie `sidebar_state` con max-age de 7 días.
    - Soporta versiones mobile (utiliza Sheet) y desktop.
    - Atajo de teclado: Ctrl/Cmd + B para togglear (const SIDEBAR_KEYBOARD_SHORTCUT = "b").
    - Prop `collapsible`: "offcanvas" | "icon" | "none".
  - Ejemplo básico:
    ```tsx
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader>...</SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Dashboard">Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
    ```
  - Notas: Cuando se usa en mobile, el ancho cambia a `--sidebar-width` mobile y el comportamiento cambia a Sheet.

- dialog.tsx / sheet.tsx / drawer.tsx / alert-dialog.tsx
  - Wrappers sobre primitives (Radix / Vaul) con estilos, overlay, close buttons y accesibilidad.
  - Uso: mantener Title/Description/Content/Trigger/Close según la primitive.

- dropdown-menu.tsx / context-menu.tsx / menubar.tsx / navigation-menu.tsx
  - Wrappers con estilos y componentes compuestos (Item, Separator, Group, Label, Shortcut, Check/Radio items).
  - Ejemplo:
    ```tsx
    <DropdownMenu>
      <DropdownMenuTrigger><Button>Menu</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={...}>Acción</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    ```

- tabs.tsx / accordion.tsx
  - Implementaciones estilizadas alrededor de Radix primitives. Mantienen `data-slot` y clases para estados activos.

- table.tsx
  - Componentes: Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption
  - Uso semántico estándar: Table > TableHeader > TableRow > TableHead / TableBody > TableRow > TableCell.

- progress.tsx / slider.tsx / pagination.tsx
  - Controles de progreso e interacción; Pagination exporta enlaces estilizados y componentes auxiliares.

- chart.tsx
  - ChartContainer: envuelve `Recharts ResponsiveContainer`, inyecta estilos CSS variables por tema para colores de series.
  - ChartTooltipContent: render personalizado para tooltip (admite custom formatter, indicator, hideLabel, etc.).
  - ChartLegendContent: render legible con iconos/colores.
  - Notas: `config` permite mapear keys de datos a color/theme/icon/label; soporta themes (light/dark) definiendo selectores CSS.

- calendar.tsx
  - Wrapper sobre react-day-picker con estilos y componentes personalizados para nav buttons.
  - Props principales: `showOutsideDays`, `classNames` extendible.

- carousel.tsx
  - Basado en Embla; expone contexto con `carouselRef`, `api`, `scrollPrev`, `scrollNext`, `canScrollPrev`, `canScrollNext`. Maneja navegación por teclado (ArrowLeft/ArrowRight).
  - Ejemplo:
    ```tsx
    <Carousel>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    ```

- command.tsx
  - Command palette construido con `cmdk` y envuelto en Dialog; incluye `CommandInput`, `CommandList`, `CommandGroup`, `CommandItem`, `CommandShortcut`.

- avatar.tsx / badge.tsx / breadcrumb.tsx / card.tsx / aspect-ratio.tsx / skeleton.tsx
  - Componentes presentacionales y utilitarios para UI consistente.

---

Buenas prácticas y recomendaciones de mantenimiento
1. Mantener tests visuales (Storybook / Chromatic) para validar estilos y estados (active, disabled, hover, data-state).
2. Documentar en cada componente props complejos (ej. `config` en ChartContainer) con ejemplos de config y dataset esperado.
3. Evitar lógica pesada en componentes marcados "use client", extraer hooks reutilizables.
4. Centralizar valores CSS variables (colores, spacing) en el tema Tailwind para coherencia.
5. En Sidebar, considerar leer cookie en montaje (p. ej. synchronizar estado inicial con cookie) si se desea persistencia entre refreshes fuera de control externo.

---

Ejemplos prácticos (concisos)
- Form + Input:
  ```tsx
  // en un componente funcional con useForm()
  <Form {...methods}>
    <FormField name="email" control={control} render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} placeholder="correo@ejemplo.com" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}/>
  </Form>
  ```

- ChartContainer básico:
  ```tsx
  <ChartContainer id="ventas" config={{ ventas: { label: "Ventas", color: "#4f46e5" } }}>
    <LineChart data={data}>
      <Line dataKey="ventas" stroke="var(--color-ventas)" />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
    </LineChart>
  </ChartContainer>
  ```

---

Contacto y mantenimiento
- Mantener actualizadas las versiones de las primitives (Radix, cmdk, Embla, Recharts) y validar breaking changes.  
- Para ampliaciones: añadir JSDoc en componentes con props complejas y ejemplos reproducibles.

Fin de la documentación.
