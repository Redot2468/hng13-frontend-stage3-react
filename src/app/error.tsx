"use client";

interface ErrorType {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorType) {
  return (
    <div className="flex items-center flex-col justify-center gap-6">
      <h1 className="font-bold text-2xl text-neutral-900">{error?.message}</h1>

      <button onClick={reset} className="bg-black text-white py-2 5 px-8">
        Retry
      </button>
    </div>
  );
}
