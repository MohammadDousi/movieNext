export default function Loading() {
  return (
    <section className="w-full h-screen absolute top-0 left-0 z-30 bg-primeryColor flex flex-col justify-center items-center gap-2 overflow-hidden">
      <p className="w-full text-center text-lg capitalize text-textColor/90 font-medium">
        Receiving information, please wait
      </p>
      <span className="loading loading-infinity loading-lg text-accentColor"></span>
    </section>
  );
}
