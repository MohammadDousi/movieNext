export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-2 overflow-hidden">
      <p className="w-full text-center text-lg capitalize text-textColor/90 font-medium">
        Receiving information, please wait
      </p>
      <span className="loading loading-infinity loading-lg text-accentColor"></span>
    </section>
  );
}
