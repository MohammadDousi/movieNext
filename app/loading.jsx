export default function Loading() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-1 overflow-hidden">
      <p className="w-full text-center text-lg capitalize text-textColor/90 font-medium">
        Receiving information
      </p>
      <p className="w-full text-center text-base capitalize text-textColor/70 font-normal">
        please wait...
      </p>
    </section>
  );
}
