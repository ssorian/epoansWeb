import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, Heart, DollarSign, Leaf, Scale, Palette, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { SubjectCard } from "@/components/subject-card"
import { ContentSection } from "@/components/content-section"

export default function EducationalPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Plataforma Educativa Digital</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Espacio</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Colaborativo
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Un espacio virtual creado para aprender de forma colaborativa, creativa y digital. Desarrollado como
              proyecto transversal integrando múltiples disciplinas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                <span className="relative z-10 flex items-center">
                  Explorar Contenido{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Subjects Overview */}
      <section id="subjects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Materias Integradas" subtitle="Proyecto transversal multidisciplinario" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <SubjectCard
              title="Matemáticas"
              description="Relación entre matemáticas y desarrollo web"
              icon={<Calculator className="h-8 w-8" />}
              href="#matematicas"
            />
            <SubjectCard
              title="Psicología"
              description="Etapas del desarrollo humano"
              icon={<Heart className="h-8 w-8" />}
              href="#psicologia"
            />
            <SubjectCard
              title="Economía"
              description="Gestión financiera y ahorro"
              icon={<DollarSign className="h-8 w-8" />}
              href="#economia"
            />
            <SubjectCard
              title="Ecología"
              description="Impacto ambiental y conservación"
              icon={<Leaf className="h-8 w-8" />}
              href="#ecologia"
            />
            <SubjectCard
              title="Derecho"
              description="Derechos humanos y amparo"
              icon={<Scale className="h-8 w-8" />}
              href="#derecho"
            />
            <SubjectCard
              title="Diseño Digital"
              description="Narrativa visual y creatividad"
              icon={<Palette className="h-8 w-8" />}
              href="#diseno"
            />
            <SubjectCard
              title="Historia"
              description="Potencias del siglo XXI"
              icon={<Globe className="h-8 w-8" />}
              href="#historia"
            />
            <SubjectCard
              title="Proyecto Web"
              description="Integración de conocimientos"
              icon={<BookOpen className="h-8 w-8" />}
              href="#proyecto"
            />
          </div>
        </div>
      </section>

      {/* Mathematics Section */}
      <ContentSection
        id="matematicas"
        title="Matemáticas y Desarrollo Web"
        subtitle="La ciencia exacta detrás del código"
        icon={<Calculator className="h-12 w-12 text-purple-400" />}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold">1</span>
              </div>
              Diseño Geométrico
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-purple-300">Geometría</h4>
                  <p className="text-zinc-400">
                    Las figuras geométricas y los ángulos son pieza clave para el diseño de páginas web funcionales y
                    atractivas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-pink-300">Ángulos y Formas</h4>
                  <p className="text-zinc-400">
                    Elementos visuales como botones, iconos y gráficos utilizan conceptos geométricos fundamentales.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 h-48 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Geometric design elements"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <span className="text-pink-400 font-bold">2</span>
              </div>
              Visualización de Datos
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-purple-300">Lectura de Gráficos</h4>
                  <p className="text-zinc-400">
                    Herramientas de visualización para recolectar datos y tomar decisiones informadas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-pink-300">Funciones y Ecuaciones</h4>
                  <p className="text-zinc-400">
                    Modelado de relaciones entre variables como visitas, usuarios y recolección de datos.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 h-48 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Data visualization charts"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>
        </div>

        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Conclusión</h3>
          <p className="text-lg text-zinc-300 text-center">
            Pusimos en práctica las habilidades desarrolladas durante el curso y retomamos las bases principales de las
            matemáticas para construir sitios funcionales, estéticos y eficientes, utilizando herramientas digitales de
            manera interactiva y dinámica.
          </p>
        </GlassmorphicCard>
      </ContentSection>

      {/* Psychology Section */}
      <ContentSection
        id="psicologia"
        title="Psicología del Desarrollo"
        subtitle="Etapas del ciclo vital humano"
        icon={<Heart className="h-12 w-12 text-pink-400" />}
      >
        <div className="mb-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">Collage: Etapa Prenatal, Neonatal y Lactancia</h3>
            <p className="text-zinc-300 mb-6">
              Proyecto realizado en la asignatura de psicología para informar sobre el orden correcto que cada persona
              cumple en las etapas del desarrollo temprano.
            </p>
            <div className="h-64 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50 mb-6">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Collage de etapas del desarrollo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassmorphicCard>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold">Etapa Prenatal</h3>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• Desde la fecundación hasta el nacimiento</li>
              <li>• Cigoto (0-2 semanas)</li>
              <li>• Embrión (2-8 semanas)</li>
              <li>• Feto (9 semanas hasta nacimiento)</li>
            </ul>
            <div className="mt-4 h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=120&width=200"
                alt="Etapa prenatal"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-pink-400">2</span>
              </div>
              <h3 className="text-xl font-bold">Etapa Neonatal</h3>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• Desde el nacimiento hasta los 28 días</li>
              <li>• Adaptación al medio externo</li>
              <li>• Reflejos básicos (succión, agarre)</li>
              <li>• Vínculo con los padres</li>
            </ul>
            <div className="mt-4 h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=120&width=200"
                alt="Etapa neonatal"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-xl font-bold">Etapa de Lactancia</h3>
            </div>
            <ul className="space-y-2 text-zinc-300">
              <li>• Primer mes hasta los 2 años aprox.</li>
              <li>• Leche materna como alimento principal</li>
              <li>• Interacción con el entorno</li>
              <li>• Fortalecimiento de vínculos afectivos</li>
            </ul>
            <div className="mt-4 h-32 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=120&width=200"
                alt="Etapa de lactancia"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>
        </div>
      </ContentSection>

      {/* Economy Section */}
      <ContentSection
        id="economia"
        title="Economía Personal"
        subtitle="Gestión financiera y hábitos de ahorro"
        icon={<DollarSign className="h-12 w-12 text-green-400" />}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">Proyecto de Ahorro</h3>
            <p className="text-zinc-300 mb-4">
              Desarrollamos el hábito del ahorro como proyecto final, aprendiendo a utilizar herramientas de gestión
              financiera para llevar un control sano de nuestros ingresos.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
              <p className="text-red-300 font-semibold">
                📊 Dato importante: El 45% de la población mexicana está endeudada
              </p>
            </div>
            <div className="h-48 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Gráfico de ahorro personal"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">Objetivos del Proyecto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Prevenir el endeudamiento a temprana edad</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Incentivar el interés en bienestar financiero</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Demostrar que todos podemos cumplir objetivos financieros</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Aplicar información disponible en entornos digitales</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Herramientas de Gestión Financiera</h3>
          <div className="h-64 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Herramientas financieras digitales"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </GlassmorphicCard>
      </ContentSection>

      {/* Ecology Section */}
      <ContentSection
        id="ecologia"
        title="Ecología y Medio Ambiente"
        subtitle="Conservación de ecosistemas locales"
        icon={<Leaf className="h-12 w-12 text-green-400" />}
      >
        <div className="mb-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">Investigación de Campo</h3>
            <p className="text-zinc-300 mb-6">
              Desarrollamos una investigación enfocada en analizar la mala gestión de desechos en el municipio y los
              animales en peligro de extinción, creando conciencia sobre las situaciones ecológicas de nuestro entorno.
            </p>
            <div className="h-48 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=200&width=600"
                alt="Investigación ecológica de campo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4 text-red-400">Problemas Identificados</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                <p className="text-zinc-300">Ingestión de basura por animales</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                <p className="text-zinc-300">Enredo y atrapamiento de especies</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                <p className="text-zinc-300">Alteración de ecosistemas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                <p className="text-zinc-300">Lesiones graves o muerte de especies</p>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4 text-green-400">Acciones Realizadas</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Encuesta a habitantes de la comunidad</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Recolección de desechos en zonas contaminadas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Separación y depósito en contenedores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Difusión de información estratégica</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Resultados y Recuperación</h3>
          <p className="text-zinc-300 text-center mb-6">
            Observamos una recuperación rápida de los ecosistemas tras nuestra intervención, lo que nos incentivó a
            crear conciencia y difundir información para preservar nuestros ecosistemas.
          </p>
          <div className="h-64 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Recuperación de ecosistemas"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </GlassmorphicCard>
      </ContentSection>

      {/* Law Section */}
      <ContentSection
        id="derecho"
        title="Derechos Humanos"
        subtitle="Protección legal y juicio de amparo"
        icon={<Scale className="h-12 w-12 text-blue-400" />}
      >
        <div className="mb-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">¿Qué son los Derechos Humanos?</h3>
            <p className="text-zinc-300 mb-6">
              Son libertades, facultades y garantías que tiene toda persona por el simple hecho de ser humana. Protegen
              la dignidad, la libertad, la igualdad y la justicia.
            </p>
          </GlassmorphicCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4">Derechos Fundamentales</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Derecho a la vida</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Libertad de expresión</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Igualdad ante la ley</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Derecho a la educación</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Derecho a la salud</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-zinc-800/30 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300">Derecho a un juicio justo</span>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4">Juicio de Amparo</h3>
            <p className="text-zinc-300 mb-4">
              Mecanismo legal que protege a las personas cuando sus derechos humanos son violados por autoridades.
            </p>
            <h4 className="font-semibold text-blue-300 mb-2">Beneficios:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Protege frente a abusos de autoridad</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Obliga a respetar la ley</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Puede suspender actos graves</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                <p className="text-zinc-300">Fortalece justicia y democracia</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Organismos Protectores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-purple-300 mb-3">Nacionales</h4>
              <div className="bg-zinc-800/30 rounded-lg p-4">
                <p className="text-zinc-300">Comisión Nacional de los Derechos Humanos (CNDH)</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-pink-300 mb-3">Internacionales</h4>
              <div className="space-y-2">
                <div className="bg-zinc-800/30 rounded-lg p-3">
                  <p className="text-zinc-300">ONU</p>
                </div>
                <div className="bg-zinc-800/30 rounded-lg p-3">
                  <p className="text-zinc-300">Corte Interamericana de Derechos Humanos</p>
                </div>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </ContentSection>

      {/* Digital Design Section */}
      <ContentSection
        id="diseno"
        title="Diseño Digital"
        subtitle="Narrativa visual y creatividad"
        icon={<Palette className="h-12 w-12 text-purple-400" />}
      >
        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Espacio de Creatividad Digital</h3>
          <p className="text-zinc-300 text-center mb-6">
            Bienvenidos a un espacio donde la imaginación cobra vida a través del diseño digital. Esta página es el
            resultado de mezclar narrativa y diseño visual.
          </p>
          <div className="h-64 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50 mb-6">
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Diseño digital creativo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-zinc-300 text-center">
            Aquí experimentamos, visualizamos y sentimos los cuentos de forma diferente, gracias a los colores e
            imágenes que los acompañan, mostrando cómo el diseño puede darle un sentido único al relato y sus
            personajes.
          </p>
        </GlassmorphicCard>
      </ContentSection>

      {/* History Section */}
      <ContentSection
        id="historia"
        title="Historia del Siglo XXI"
        subtitle="Potencias mundiales contemporáneas"
        icon={<Globe className="h-12 w-12 text-yellow-400" />}
      >
        <div className="mb-8">
          <GlassmorphicCard>
            <h3 className="text-2xl font-bold mb-4">¿Qué son las Potencias del Siglo XXI?</h3>
            <p className="text-zinc-300 mb-4">
              Son países con gran influencia económica, militar, política, tecnológica y cultural a nivel global. Su
              poder no solo se mide por sus armas o riqueza, sino también por su capacidad de liderar alianzas e influir
              en decisiones internacionales.
            </p>
            <div className="h-48 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
              <img
                src="/placeholder.svg?height=200&width=600"
                alt="Mapa de potencias mundiales"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </GlassmorphicCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Principales Potencias</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-zinc-300 font-medium">Estados Unidos (EE.UU.)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-zinc-300 font-medium">China</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-zinc-300 font-medium">Rusia</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-zinc-300 font-medium">Unión Europea</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="text-zinc-300 font-medium">India</span>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Potencias Influyentes</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <span className="text-zinc-300 font-medium">Japón:</span>
                  <span className="text-zinc-400"> Líder en tecnología y economía</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <span className="text-zinc-300 font-medium">Brasil:</span>
                  <span className="text-zinc-400"> Potencia regional en América Latina</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <span className="text-zinc-300 font-medium">Alemania y Francia:</span>
                  <span className="text-zinc-400"> Clave dentro de la UE</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <span className="text-zinc-300 font-medium">Corea del Sur:</span>
                  <span className="text-zinc-400"> Potencia tecnológica</span>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        <GlassmorphicCard>
          <h3 className="text-2xl font-bold mb-4 text-center">Influencia Global</h3>
          <p className="text-zinc-300 text-center mb-6">
            Las potencias del siglo XXI no solo dominan por la fuerza, sino también por su influencia global, su
            tecnología y su capacidad para liderar cambios en temas como el medio ambiente, la inteligencia artificial o
            la diplomacia internacional.
          </p>
          <div className="h-64 bg-zinc-800/50 rounded-lg flex items-center justify-center border border-zinc-700/50">
            <img
              src="/placeholder.svg?height=300&width=800"
              alt="Influencia global de las potencias"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </GlassmorphicCard>
      </ContentSection>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Proyecto Transversal Educativo</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Este espacio virtual representa la integración de conocimientos de múltiples disciplinas, fomentando la
              cooperación, el análisis crítico y la comunicación digital durante los semestres 5to y 6to.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-800">
            <div>
              <Link href="/" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Plataforma
                </span>
                <span className="text-white">Educativa</span>
              </Link>
              <p className="text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Proyecto Transversal. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                asChild
              >
                <Link href="/">Volver al Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
