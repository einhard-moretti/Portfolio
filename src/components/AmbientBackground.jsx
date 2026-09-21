export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob-a absolute -top-48 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="blob-b absolute bottom-[-25%] left-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/[0.05] blur-3xl" />
      <div className="grain absolute inset-0" />
    </div>
  );
}