const LoadingDiv = ({ text }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5">
      <img src="/Loading.webp" alt="" className="h-20 w-20 animate-spin" />
      <p className="text-2xl font-bold text-neutral-400">{text}</p>
    </section>
  );
};

export default LoadingDiv;
