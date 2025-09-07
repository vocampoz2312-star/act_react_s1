import Usuario from '../components/Usuario';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      <Usuario nombre="Ana García" edad={25} ciudad="Madrid" />
    </main>
  );
}