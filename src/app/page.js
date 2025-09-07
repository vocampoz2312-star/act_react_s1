import Usuario from '../components/Usuario';

export default function Home() {
  const usuario = {
    nombre: 'Ana García',
    edad: 25,
    ciudad: 'Madrid',
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      <Usuario usuario={usuario} />
    </main>
  );
}